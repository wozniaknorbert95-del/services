'use client';

// NOTE: SVG attributes (fill, stroke) do NOT support CSS custom properties (var(--x)).
// All colors in SVG elements must be hardcoded to match design tokens:
//   --qf-accent: #e8a33d
//   --qf-text: #e5e7ef
//   --qf-text-dim: #9ca3c7
//   --qf-text-faint: #9ca3af
//   --qf-ok: #6fae6f
// HTML/Tailwind classes use CSS vars as normal.

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  type DiagramNode,
  type DiagramNodeId,
  type DiagramView,
  DIAGRAM_CANVAS,
  DIAGRAM_EDGES,
  DIAGRAM_HEADER,
  LIFE_LOOP_PHASES,
  LOS_LAYER_BANDS,
  getNodeById,
  getNodePosition,
  getVisibleEdges,
  getVisibleNodes,
} from '@/content/system-diagram';
import { GRATKA } from '@/lib/gratka';
import { ROUTES } from '@/lib/constants';
import { useMotion } from '@/lib/useMotion';
import DiagramViewToggle from './DiagramViewToggle';
import DiagramDetailPanel from './DiagramDetailPanel';
import DiagramMobileAccordion from './DiagramMobileAccordion';
import DiagramStoryView from './DiagramStoryView';
import DiagramStatusLegend from './DiagramStatusLegend';

const NODE_W = 172;
const NODE_H = 68;

const LAYER_STYLE: Record<string, { fill: string; stroke: string }> = {
  guard: { fill: 'rgba(16, 185, 129, 0.06)', stroke: 'rgba(16, 185, 129, 0.35)' },
  sense: { fill: 'rgba(255, 255, 255, 0.03)', stroke: 'rgba(255, 255, 255, 0.1)' },
  think: { fill: 'rgba(245, 158, 11, 0.05)', stroke: 'rgba(245, 158, 11, 0.25)' },
  orchestrate: { fill: 'rgba(255, 255, 255, 0.03)', stroke: 'rgba(255, 255, 255, 0.1)' },
  act: { fill: 'rgba(245, 158, 11, 0.08)', stroke: 'rgba(245, 158, 11, 0.35)' },
  memory: { fill: 'rgba(96, 165, 250, 0.05)', stroke: 'rgba(96, 165, 250, 0.3)' },
};

const LAYER_ORDER = ['guard', 'sense', 'think', 'orchestrate', 'act', 'memory'] as const;

interface LivingSystemDiagramProps {
  variant?: 'founder' | 'full';
  defaultView?: DiagramView;
}

function edgePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  selfLoop = false
): string {
  if (selfLoop) {
    const cx = from.x;
    const cy = from.y - NODE_H / 2 - 24;
    return `M ${cx - 28} ${from.y - NODE_H / 2} Q ${cx} ${cy} ${cx + 28} ${from.y - NODE_H / 2}`;
  }
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  const nx = (dx / dist) * (NODE_W / 2 + 6);
  const ny = (dy / dist) * (NODE_H / 2 + 6);
  const sx = from.x + nx;
  const sy = from.y + ny;
  const ex = to.x - nx;
  const ey = to.y - ny;
  const mx = (sx + ex) / 2;
  const my = (sy + ey) / 2 - Math.min(48, dist * 0.12);
  return `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`;
}

function edgeStroke(status: string, highlighted: boolean, isHero: boolean): string {
  if (!isHero && !highlighted) return 'rgba(255,255,255,0.08)';
  if (status === 'PLANNED') return highlighted ? '#e8a33d' : 'rgba(245,158,11,0.4)';
  if (status === 'PARTIAL') return highlighted ? '#e8a33d' : 'rgba(245,158,11,0.55)';
  return highlighted ? '#e8a33d' : isHero ? 'rgba(245,158,11,0.75)' : 'rgba(245,158,11,0.45)';
}

export default function LivingSystemDiagram({
  variant = 'full',
  defaultView = 'architecture',
}: LivingSystemDiagramProps) {
  const resolvedDefault = variant === 'founder' && defaultView === 'architecture' ? 'story' : defaultView;
  const { prefersReduced } = useMotion();
  const [view, setView] = useState<DiagramView>(resolvedDefault);
  const [selectedId, setSelectedId] = useState<DiagramNodeId | null>(null);
  const [hoveredId, setHoveredId] = useState<DiagramNodeId | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [loopOpen, setLoopOpen] = useState(variant !== 'founder');
  const [loopPhase, setLoopPhase] = useState(0);
  const [walking, setWalking] = useState(false);
  const [loopSpeed, setLoopSpeed] = useState(2000);

  const nodes = useMemo(() => getVisibleNodes(view), [view]);
  const edges = useMemo(
    () => getVisibleEdges(view, showIntegrations),
    [view, showIntegrations]
  );
  const selectedNode = selectedId ? getNodeById(selectedId) : undefined;
  const integrationCount = DIAGRAM_EDGES.filter(
    (e) => e.architectureVisible && !e.heroEdge
  ).length;

  const connectedNodeIds = useMemo(() => {
    const focus = hoveredId ?? selectedId;
    if (!focus) return new Set<DiagramNodeId>();
    const ids = new Set<DiagramNodeId>([focus]);
    for (const e of edges) {
      if (e.from === focus) ids.add(e.to);
      if (e.to === focus) ids.add(e.from);
    }
    return ids;
  }, [edges, hoveredId, selectedId]);

  const highlightedEdges = useMemo(() => {
    const focus = hoveredId ?? selectedId;
    if (!focus) return new Set<string>();
    return new Set(
      edges.filter((e) => e.from === focus || e.to === focus).map((e) => e.id)
    );
  }, [edges, hoveredId, selectedId]);

  useEffect(() => {
    if (!walking || prefersReduced) return;
    const timer = window.setInterval(() => {
      setLoopPhase((p) => (p + 1) % LIFE_LOOP_PHASES.length);
    }, loopSpeed);
    return () => window.clearInterval(timer);
  }, [walking, prefersReduced, loopSpeed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNodeClick = useCallback((id: DiagramNodeId) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const panelBelow = variant === 'founder';

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <DiagramViewToggle view={view} onChange={setView} variant={variant} />
        <div className="flex flex-wrap items-center gap-3">
          {view === 'architecture' && (
            <button
              type="button"
              onClick={() => setShowIntegrations((v) => !v)}
              className={`rounded-[var(--qf-radius)] border px-4 py-1.5 text-xs font-semibold transition-colors ${
                showIntegrations
                  ? 'border-[var(--qf-accent)] text-[var(--qf-accent)]'
                  : 'border-[var(--qf-border)] text-[var(--qf-text-dim)] hover:text-[var(--qf-text)]'
              }`}
            >
              {showIntegrations ? 'Hide' : 'Show'} integrations ({integrationCount})
            </button>
          )}
          {loopOpen && (
            <>
              <button
                type="button"
                onClick={() => {
                  setWalking((w) => !w);
                  if (!walking) setLoopPhase(0);
                }}
                className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] px-4 py-1.5 text-xs font-semibold text-[var(--qf-text-dim)] hover:border-[var(--qf-accent)] hover:text-[var(--qf-accent)]"
              >
                {walking ? 'Stop loop' : 'Walk the loop'}
              </button>
              {walking && (
                <select
                  value={loopSpeed}
                  onChange={(e) => setLoopSpeed(Number(e.target.value))}
                  className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] px-2 py-1 text-xs text-[var(--qf-text-dim)]"
                  aria-label="Loop speed"
                >
                  <option value={4000}>Slow</option>
                  <option value={2000}>Normal</option>
                  <option value={1000}>Fast</option>
                </select>
              )}
            </>
          )}
        </div>
      </div>

      {/* Life loop — collapsible on founder */}
      <details
        open={loopOpen}
        onToggle={(e) => setLoopOpen((e.target as HTMLDetailsElement).open)}
        className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg)]"
      >
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-[var(--qf-text-dim)] hover:text-[var(--qf-text)]">
          How the operating loop works (Sense → Learn)
        </summary>
        <div className="border-t border-[var(--qf-border)] p-3">
          <div className="overflow-x-auto">
            <div className="flex min-w-max items-center gap-1">
              {LIFE_LOOP_PHASES.map((phase, i) => {
                const active = walking && loopPhase === i;
                return (
                  <div key={phase.id} className="flex items-center gap-1">
                    <motion.span
                      className={`rounded-[var(--qf-radius)] px-3 py-1 font-mono text-[10px] uppercase tracking-wide ${
                        active
                          ? 'bg-[var(--qf-accent)] text-black'
                          : phase.id === 'hitl'
                            ? 'border border-[var(--qf-ok)]/40 text-[var(--qf-ok)]'
                            : 'border border-[var(--qf-border)] text-[var(--qf-text-faint)]'
                      }`}
                      animate={active && !prefersReduced ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {phase.label}
                    </motion.span>
                    {i < LIFE_LOOP_PHASES.length - 1 && (
                      <span className="text-[var(--qf-text-faint)]">→</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-2 text-xs text-[var(--qf-text-faint)]">
            Guard layer stays on throughout — human approval before any production write.
          </p>
        </div>
      </details>

      {/* Story view (founder default) */}
      {view === 'story' && (
        <div className="hidden md:block">
          <DiagramStoryView selectedId={selectedId} onSelect={handleNodeClick} />
        </div>
      )}

      {/* Architecture / funnel SVG */}
      {view !== 'story' && (
        <div
          className={
            panelBelow
              ? 'space-y-0'
              : 'hidden md:grid md:grid-cols-[1fr_auto] md:gap-0'
          }
        >
          <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg)] p-3">
            <svg
              viewBox={`0 0 ${DIAGRAM_CANVAS.width} ${DIAGRAM_CANVAS.height}`}
              className="h-auto w-full"
              role="img"
              aria-label="Living Operating System interactive diagram"
            >
              <defs>
                <marker id="arrow-amber" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6 Z" fill="#e8a33d" />
                </marker>
                <marker id="arrow-faint" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6 Z" fill="rgba(255,255,255,0.25)" />
                </marker>
              </defs>

              <text x={600} y={36} textAnchor="middle" fill="#e5e7ef" fontSize={16} fontWeight={700}>
                {DIAGRAM_HEADER.title}
              </text>
              <text x={600} y={56} textAnchor="middle" fill="#9ca3c7" fontSize={11}>
                {DIAGRAM_HEADER.subtitle}
              </text>

              {LAYER_ORDER.map((layerId) => {
                const band = LOS_LAYER_BANDS[layerId];
                if (!band) return null;
                const style = LAYER_STYLE[layerId];
                return (
                  <g key={layerId}>
                    <rect
                      x={32}
                      y={band.y}
                      width={DIAGRAM_CANVAS.width - 64}
                      height={band.height}
                      rx={6}
                      fill={style.fill}
                      stroke={style.stroke}
                    />
                    <text x={48} y={band.y + 20} fill="#e8a33d" fontSize={11} fontWeight={700} fontFamily="ui-monospace, monospace">
                      {band.label.toUpperCase()}
                    </text>
                    {band.subtitle && (
                      <text x={48} y={band.y + 36} fill="#9ca3af" fontSize={9} fontFamily="ui-monospace, monospace">
                        {band.subtitle}
                      </text>
                    )}
                  </g>
                );
              })}

              {edges.map((edge) => {
                const fromNode = getNodeById(edge.from);
                const toNode = getNodeById(edge.to);
                if (!fromNode || !toNode) return null;
                const from = getNodePosition(fromNode, view);
                const to = getNodePosition(toNode, view);
                const selfLoop = edge.from === edge.to;
                const highlighted = highlightedEdges.has(edge.id) || hoveredEdge === edge.id;
                const isHero = !!edge.heroEdge;
                const d = edgePath(from, to, selfLoop);
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2;
                return (
                  <g key={edge.id}>
                    <path
                      d={d}
                      fill="none"
                      stroke={edgeStroke(edge.status, highlighted, isHero)}
                      strokeWidth={highlighted ? 3 : isHero ? 2.5 : 1.5}
                      strokeDasharray={edge.status === 'PLANNED' ? '6 4' : undefined}
                      markerEnd={isHero || highlighted ? 'url(#arrow-amber)' : 'url(#arrow-faint)'}
                      onMouseEnter={() => setHoveredEdge(edge.id)}
                      onMouseLeave={() => setHoveredEdge(null)}
                      style={{ pointerEvents: 'stroke' }}
                    />
                    {(isHero || hoveredEdge === edge.id) && (
                      <text
                        x={midX}
                        y={midY - 10}
                        textAnchor="middle"
                        fontSize={10}
                        fill="#e8a33d"
                        fontWeight={600}
                        fontFamily="ui-monospace, monospace"
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {nodes.map((node) => (
                <DiagramSvgNode
                  key={node.id}
                  node={node}
                  view={view}
                  selected={selectedId === node.id}
                  dimmed={
                    connectedNodeIds.size > 0 &&
                    !connectedNodeIds.has(node.id) &&
                    (hoveredId !== null || selectedId !== null)
                  }
                  onHover={setHoveredId}
                  onClick={handleNodeClick}
                />
              ))}

              <text x={600} y={DIAGRAM_CANVAS.height - 16} textAnchor="middle" fill="#9ca3af" fontSize={10}>
                Click any module · {showIntegrations ? 'All integrations visible' : 'Hero path only — toggle for full INT map'}
              </text>
            </svg>
          </div>

          {!panelBelow && (
            <AnimatePresence mode="wait">
              {selectedNode ? (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: prefersReduced ? 0 : 0.2 }}
                  className="w-full min-w-[300px] max-w-sm rounded-r-[var(--qf-radius)] border border-l-0 border-[var(--qf-border)]"
                >
                  <DiagramDetailPanel node={selectedNode} onClose={() => setSelectedId(null)} variant={variant} />
                </motion.div>
              ) : (
                <div className="hidden w-72 items-center justify-center rounded-r-[var(--qf-radius)] border border-l-0 border-dashed border-[var(--qf-border)] bg-[var(--qf-bg)] p-6 text-center text-sm text-[var(--qf-text-faint)] lg:flex">
                  Click a module for AS-IS proof, live demos and roadmap detail.
                </div>
              )}
            </AnimatePresence>
          )}
        </div>
      )}

      {/* Story on mobile */}
      {view === 'story' && (
        <div className="md:hidden">
          <DiagramStoryView selectedId={selectedId} onSelect={handleNodeClick} />
        </div>
      )}

      {/* Panel below diagram (founder) or story selection */}
      {(panelBelow || view === 'story') && (
        <AnimatePresence mode="wait">
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: prefersReduced ? 0 : 0.2 }}
              className="overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)]"
            >
              <DiagramDetailPanel
                node={selectedNode}
                onClose={() => setSelectedId(null)}
                variant={variant}
                layout="below"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {(view === 'architecture' || view === 'smb_funnel') && (
        <DiagramMobileAccordion view={view} variant={variant} />
      )}

      {view !== 'story' && <DiagramStatusLegend />}

      <div className="flex flex-wrap gap-4 text-sm">
        <a href={GRATKA.losArchitectureSvg} download className="font-semibold text-[var(--qf-accent)] hover:underline">
          Download static SVG →
        </a>
        <a href={GRATKA.losArchitecturePdf} className="font-semibold text-[var(--qf-accent)] hover:underline">
          Download PDF map →
        </a>
        {variant === 'founder' && (
          <Link href={ROUTES.resultsOwnerEcosystem} className="text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)] hover:underline">
            Full owner ecosystem →
          </Link>
        )}
      </div>
    </div>
  );
}

interface DiagramSvgNodeProps {
  node: DiagramNode;
  view: DiagramView;
  selected: boolean;
  dimmed: boolean;
  onHover: (id: DiagramNodeId | null) => void;
  onClick: (id: DiagramNodeId) => void;
}

function DiagramSvgNode({ node, view, selected, dimmed, onHover, onClick }: DiagramSvgNodeProps) {
  const pos = getNodePosition(node, view);
  const x = pos.x - NODE_W / 2;
  const y = pos.y - NODE_H / 2;
  const statusColor =
    node.status === 'LIVE' ? '#6fae6f' : node.status === 'PARTIAL' ? '#e8a33d' : '#9ca3af';

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${node.label}, ${node.status}. ${node.hoverLine}`}
      aria-pressed={selected}
      opacity={dimmed ? 0.3 : 1}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(node.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(node.id);
        }
      }}
      className="cursor-pointer outline-none focus-visible:stroke-[var(--qf-accent)] focus-visible:stroke-[3px]"
    >
      <rect
        x={x}
        y={y}
        width={NODE_W}
        height={NODE_H}
        rx={2}
        fill={selected ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.06)'}
        stroke={selected ? '#e8a33d' : 'rgba(255,255,255,0.2)'}
        strokeWidth={selected ? 2.5 : 1.5}
      />
      <circle cx={x + 14} cy={y + 14} r={5} fill={statusColor} />
      <text x={pos.x} y={y + 28} textAnchor="middle" fontSize={12} fontWeight={700} fill="#e5e7ef">
        {node.label}
      </text>
      <text x={pos.x} y={y + 44} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.55)">
        {node.hoverLine.length > 42 ? `${node.hoverLine.slice(0, 40)}…` : node.hoverLine}
      </text>
      <text x={pos.x} y={y + 58} textAnchor="middle" fontSize={9} fill={statusColor} fontWeight={600} fontFamily="ui-monospace, monospace">
        {node.status} · {node.readiness}
      </text>
      <title>{`${node.hoverLine} (${node.status})`}</title>
    </g>
  );
}

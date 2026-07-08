'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  type DiagramNode,
  type DiagramNodeId,
  type DiagramView,
  DIAGRAM_CANVAS,
  DIAGRAM_EDGES,
  LIFE_LOOP_PHASES,
  LOS_LAYER_BANDS,
  THREE_BRAINS,
  getNodeById,
  getNodePosition,
  getVisibleEdges,
  getVisibleNodes,
} from '@/content/system-diagram';
import { GRATKA } from '@/lib/gratka';
import { ROUTES } from '@/lib/constants';
import { useMotion } from '@/lib/useMotion';
import StatusBadge from '@/components/ui/StatusBadge';
import DiagramViewToggle from './DiagramViewToggle';
import DiagramDetailPanel from './DiagramDetailPanel';
import DiagramMobileAccordion from './DiagramMobileAccordion';

const NODE_W = 148;
const NODE_H = 52;

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
    const cy = from.y - NODE_H / 2 - 20;
    return `M ${cx - 24} ${from.y - NODE_H / 2} Q ${cx} ${cy} ${cx + 24} ${from.y - NODE_H / 2}`;
  }
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  const nx = (dx / dist) * (NODE_W / 2 + 4);
  const ny = (dy / dist) * (NODE_H / 2 + 4);
  const sx = from.x + nx;
  const sy = from.y + ny;
  const ex = to.x - nx;
  const ey = to.y - ny;
  const mx = (sx + ex) / 2;
  const my = (sy + ey) / 2 - Math.min(60, dist * 0.15);
  return `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`;
}

function edgeStroke(status: string, highlighted: boolean): string {
  if (status === 'PLANNED') return highlighted ? 'rgba(245,158,11,0.35)' : 'rgba(255,255,255,0.12)';
  if (status === 'PARTIAL') return highlighted ? 'rgba(245,158,11,0.7)' : 'rgba(245,158,11,0.35)';
  return highlighted ? '#f59e0b' : 'rgba(245,158,11,0.45)';
}

function edgeDash(status: string): string | undefined {
  return status === 'PLANNED' ? '6 4' : undefined;
}

export default function LivingSystemDiagram({
  variant = 'full',
  defaultView = 'architecture',
}: LivingSystemDiagramProps) {
  const { prefersReduced } = useMotion();
  const [view, setView] = useState<DiagramView>(defaultView);
  const [selectedId, setSelectedId] = useState<DiagramNodeId | null>(null);
  const [hoveredId, setHoveredId] = useState<DiagramNodeId | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
  const [loopPhase, setLoopPhase] = useState(0);
  const [walking, setWalking] = useState(false);

  const nodes = useMemo(() => getVisibleNodes(view), [view]);
  const edges = useMemo(() => getVisibleEdges(view), [view]);
  const selectedNode = selectedId ? getNodeById(selectedId) : undefined;

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
    }, 2000);
    return () => window.clearInterval(timer);
  }, [walking, prefersReduced]);

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

  const layerBands =
    view === 'architecture'
      ? (['sense', 'think', 'orchestrate', 'act', 'guard', 'memory'] as const)
      : ([] as const);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <DiagramViewToggle view={view} onChange={setView} />
        <button
          type="button"
          onClick={() => {
            setWalking((w) => !w);
            if (!walking) setLoopPhase(0);
          }}
          className="rounded-full border border-[var(--qf-border)] px-4 py-1.5 text-xs font-semibold text-[var(--qf-text-dim)] hover:border-[var(--qf-accent)] hover:text-[var(--qf-accent)]"
        >
          {walking ? 'Stop loop' : 'Walk the loop'}
        </button>
      </div>

      {/* Life loop strip */}
      <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg)] p-3">
        <div className="flex min-w-max items-center gap-1">
          {LIFE_LOOP_PHASES.map((phase, i) => {
            const active = walking && loopPhase === i;
            return (
              <div key={phase.id} className="flex items-center gap-1">
                <motion.span
                  className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wide ${
                    active
                      ? 'bg-[var(--qf-accent)] text-black'
                      : phase.id === 'hitl'
                        ? 'border border-emerald-500/40 text-emerald-500'
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
        <p className="mt-2 text-xs text-[var(--qf-text-faint)]">
          Guard layer (VCMS + meta) stays visible throughout — HITL before any production write.
        </p>
      </div>

      {/* Desktop SVG */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto] md:gap-0">
        <div className="overflow-x-auto rounded-l-[var(--qf-radius)] border border-[var(--qf-border)] bg-[#0a0a0a] p-2">
          <svg
            viewBox={`0 0 ${DIAGRAM_CANVAS.width} ${DIAGRAM_CANVAS.height}`}
            className="h-auto min-w-[720px] w-full"
            role="img"
            aria-label="Living Operating System interactive diagram"
          >
            <defs>
              <marker
                id="arrow-amber"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
              </marker>
              <marker
                id="arrow-faint"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.2)" />
              </marker>
            </defs>

            {view === 'architecture' &&
              layerBands.map((layerId) => {
                const band = LOS_LAYER_BANDS[layerId];
                if (!band) return null;
                return (
                  <g key={layerId}>
                    <rect
                      x={24}
                      y={band.y}
                      width={DIAGRAM_CANVAS.width - 48}
                      height={band.height}
                      rx={8}
                      fill="rgba(255,255,255,0.02)"
                      stroke={
                        layerId === 'act'
                          ? 'rgba(245,158,11,0.25)'
                          : layerId === 'guard'
                            ? 'rgba(16,185,129,0.2)'
                            : 'rgba(255,255,255,0.06)'
                      }
                    />
                    <text
                      x={36}
                      y={band.y + 18}
                      className="fill-[var(--qf-text-faint)]"
                      fontSize={10}
                      fontFamily="ui-monospace, monospace"
                    >
                      {band.label.toUpperCase()}
                    </text>
                  </g>
                );
              })}

            {view === 'architecture' &&
              THREE_BRAINS.map((brain) => (
                <text
                  key={brain.id}
                  x={DIAGRAM_CANVAS.width - 200}
                  y={
                    brain.id === 'governance' ? 520 : brain.id === 'operations' ? 220 : 300
                  }
                  fontSize={9}
                  fill="rgba(245,158,11,0.5)"
                  fontFamily="ui-monospace, monospace"
                >
                  {brain.label}
                </text>
              ))}

            {edges.map((edge) => {
              const fromNode = getNodeById(edge.from);
              const toNode = getNodeById(edge.to);
              if (!fromNode || !toNode) return null;
              const from = getNodePosition(fromNode, view);
              const to = getNodePosition(toNode, view);
              const selfLoop = edge.from === edge.to;
              const highlighted = highlightedEdges.has(edge.id) || hoveredEdge === edge.id;
              const d = edgePath(from, to, selfLoop);
              return (
                <g key={edge.id}>
                  <path
                    d={d}
                    fill="none"
                    stroke={edgeStroke(edge.status, highlighted)}
                    strokeWidth={highlighted ? 2.5 : 1.5}
                    strokeDasharray={edgeDash(edge.status)}
                    markerEnd={
                      edge.status === 'PLANNED' ? 'url(#arrow-faint)' : 'url(#arrow-amber)'
                    }
                    onMouseEnter={() => setHoveredEdge(edge.id)}
                    onMouseLeave={() => setHoveredEdge(null)}
                    style={{ pointerEvents: 'stroke' }}
                  />
                  {hoveredEdge === edge.id && (
                    <text
                      x={(from.x + to.x) / 2}
                      y={(from.y + to.y) / 2 - 8}
                      textAnchor="middle"
                      fontSize={10}
                      fill="#f59e0b"
                      fontFamily="ui-monospace, monospace"
                    >
                      {edge.id}: {edge.label}
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
          </svg>
        </div>

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
              <DiagramDetailPanel
                node={selectedNode}
                onClose={() => setSelectedId(null)}
                variant={variant}
              />
            </motion.div>
          ) : (
            <div className="hidden w-72 items-center justify-center rounded-r-[var(--qf-radius)] border border-l-0 border-dashed border-[var(--qf-border)] bg-[var(--qf-bg)] p-6 text-center text-sm text-[var(--qf-text-faint)] lg:flex">
              Click a node for AS-IS / TO-BE detail, proof links and live demos.
            </div>
          )}
        </AnimatePresence>
      </div>

      <DiagramMobileAccordion view={view} variant={variant} />

      {/* Static fallback */}
      <noscript>
        <p>
          <a href={GRATKA.losArchitectureSvg}>Download static LOS diagram (SVG)</a>
        </p>
      </noscript>
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href={GRATKA.losArchitectureSvg}
          download
          className="font-semibold text-[var(--qf-accent)] hover:underline"
        >
          Download static SVG →
        </a>
        <a
          href={GRATKA.losArchitecturePdf}
          className="font-semibold text-[var(--qf-accent)] hover:underline"
        >
          Download PDF map →
        </a>
        {variant === 'founder' && (
          <Link
            href={ROUTES.resultsOwnerEcosystem}
            className="text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)] hover:underline"
          >
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

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${node.label}, ${node.status}. ${node.hoverLine}`}
      aria-pressed={selected}
      opacity={dimmed ? 0.35 : 1}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(node.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(node.id);
        }
      }}
      className="cursor-pointer outline-none focus-visible:[&_rect]:stroke-[#f59e0b]"
    >
      <rect
        x={x}
        y={y}
        width={NODE_W}
        height={NODE_H}
        rx={8}
        fill={selected ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.04)'}
        stroke={selected ? '#f59e0b' : 'rgba(255,255,255,0.15)'}
        strokeWidth={selected ? 2 : 1}
      />
      <text
        x={pos.x}
        y={y + 20}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        fill="#fafafa"
        fontFamily="system-ui, sans-serif"
      >
        {node.label.length > 18 ? node.shortLabel : node.label}
      </text>
      <text
        x={pos.x}
        y={y + 36}
        textAnchor="middle"
        fontSize={9}
        fill="rgba(255,255,255,0.5)"
        fontFamily="ui-monospace, monospace"
      >
        {node.status} · {node.readiness}
      </text>
      <title>{`${node.hoverLine} (${node.status})`}</title>
    </g>
  );
}

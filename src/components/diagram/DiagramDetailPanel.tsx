'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import type { DiagramNode } from '@/content/system-diagram';
import StatusBadge from '@/components/ui/StatusBadge';
import { ROUTES } from '@/lib/constants';

interface DiagramDetailPanelProps {
  node: DiagramNode;
  onClose: () => void;
  variant?: 'founder' | 'full';
}

export default function DiagramDetailPanel({ node, onClose, variant = 'full' }: DiagramDetailPanelProps) {
  const ownerAnchor = `${ROUTES.resultsOwnerEcosystem}#repo-${node.shortLabel}`;

  return (
    <div
      role="dialog"
      aria-labelledby={`diagram-panel-${node.id}`}
      className="flex h-full flex-col border-l border-[var(--qf-border)] bg-[var(--qf-bg-raised)]"
    >
      <div className="flex items-start justify-between gap-3 border-b border-[var(--qf-border)] p-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <StatusBadge status={node.status} />
            <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--qf-text-faint)]">
              {node.readiness}
            </span>
          </div>
          <h3 id={`diagram-panel-${node.id}`} className="text-lg font-bold text-[var(--qf-text)]">
            {node.label}
          </h3>
          <p className="mt-1 font-mono text-xs text-[var(--qf-text-faint)]">{node.shortLabel}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-[var(--qf-border)] p-1.5 text-[var(--qf-text-dim)] hover:text-[var(--qf-text)]"
          aria-label="Close details"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-6 text-sm text-[var(--qf-text-dim)]">{node.northStar}</p>

        <div className="mb-6">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-500">
            AS-IS LIVE
          </h4>
          <ul className="space-y-2 text-sm text-[var(--qf-text-dim)]">
            {node.asIs.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {node.toBe.length > 0 && (
          <div className="mb-6">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-500">
              TO-BE / PLANNED
            </h4>
            <ul className="space-y-2 text-sm text-[var(--qf-text-dim)]">
              {node.toBe.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-2">
          {node.proofRoute && (
            <Link
              href={node.proofRoute}
              className="text-sm font-semibold text-[var(--qf-accent)] hover:underline"
            >
              See proof →
            </Link>
          )}
          {node.demoUrl && (
            <a
              href={node.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--qf-accent)] hover:underline"
            >
              Live demo ↗
            </a>
          )}
          {variant === 'full' && (
            <Link
              href={ownerAnchor}
              className="text-sm text-[var(--qf-text-dim)] hover:text-[var(--qf-text)] hover:underline"
            >
              Full module spec →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

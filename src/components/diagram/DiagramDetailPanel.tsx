'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import type { DiagramNode } from '@/content/system-diagram';
import StatusBadge from '@/components/ui/StatusBadge';
import { ROUTES } from '@/lib/constants';

interface DiagramDetailPanelProps {
  node: DiagramNode;
  onClose: () => void;
  variant?: 'founder' | 'full';
  layout?: 'side' | 'below';
}

function CollapsibleSection({
  title,
  color,
  defaultOpen = false,
  children,
}: {
  title: string;
  color: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 py-1 text-left"
        aria-expanded={open}
      >
        <span className={`text-xs font-semibold uppercase tracking-wide ${color}`}>
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--qf-text-faint)] transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default function DiagramDetailPanel({
  node,
  onClose,
  variant = 'full',
  layout = 'side',
}: DiagramDetailPanelProps) {
  const ownerAnchor = `${ROUTES.resultsOwnerEcosystem}#repo-${node.shortLabel}`;

  return (
    <div
      role="dialog"
      aria-labelledby={`diagram-panel-${node.id}`}
      className={`flex flex-col bg-[var(--qf-bg-raised)] ${
        layout === 'side' ? 'h-full border-l border-[var(--qf-border)]' : ''
      }`}
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
          className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] p-1.5 text-[var(--qf-text-dim)] hover:text-[var(--qf-text)]"
          aria-label="Close details"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-6 text-sm text-[var(--qf-text-dim)]">{node.northStar}</p>

        {node.capabilityChips && node.capabilityChips.length > 0 && (
          <CollapsibleSection title="Capabilities" color="text-[var(--qf-accent)]" defaultOpen>
            <div className="flex flex-wrap gap-2">
              {node.capabilityChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`rounded-[var(--qf-radius)] border px-2.5 py-1 text-[10px] font-medium ${
                    chip.status === 'LIVE'
                      ? 'border-[var(--qf-ok)]/30 text-[var(--qf-ok)]'
                      : chip.status === 'PARTIAL'
                        ? 'border-[var(--qf-accent)]/30 text-[var(--qf-accent)]'
                        : 'border-[var(--qf-border)] text-[var(--qf-text-faint)]'
                  }`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </CollapsibleSection>
        )}

        <CollapsibleSection title="AS-IS LIVE" color="text-[var(--qf-ok)]" defaultOpen>
          <ul className="space-y-2 text-sm text-[var(--qf-text-dim)]">
            {node.asIs.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[var(--qf-ok)]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        {node.toBe.length > 0 && (
          <CollapsibleSection title="TO-BE / PLANNED" color="text-[var(--qf-accent)]">
            <ul className="space-y-2 text-sm text-[var(--qf-text-dim)]">
              {node.toBe.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--qf-accent)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        )}

        <div className="flex flex-col gap-2 pt-2">
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

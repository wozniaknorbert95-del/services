'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { DiagramNode, DiagramView } from '@/content/system-diagram';
import { getVisibleNodes } from '@/content/system-diagram';
import StatusBadge from '@/components/ui/StatusBadge';
import DiagramDetailPanel from './DiagramDetailPanel';

interface DiagramMobileAccordionProps {
  view: DiagramView;
  variant?: 'founder' | 'full';
}

export default function DiagramMobileAccordion({ view, variant = 'full' }: DiagramMobileAccordionProps) {
  const nodes = getVisibleNodes(view);
  const [openId, setOpenId] = useState<DiagramNode['id'] | null>(null);

  return (
    <div className="space-y-2 md:hidden">
      {nodes.map((node) => {
        const open = openId === node.id;
        return (
          <div
            key={node.id}
            className="overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 p-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : node.id)}
            >
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <StatusBadge status={node.status} />
                  <span className="font-mono text-[10px] text-[var(--qf-text-faint)]">
                    {node.shortLabel}
                  </span>
                </div>
                <span className="font-semibold text-[var(--qf-text)]">{node.label}</span>
                <p className="mt-1 text-xs text-[var(--qf-text-dim)]">{node.hoverLine}</p>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[var(--qf-text-faint)] transition-transform ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open && (
              <div className="border-t border-[var(--qf-border)]">
                <DiagramDetailPanel node={node} onClose={() => setOpenId(null)} variant={variant} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

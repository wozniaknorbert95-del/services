'use client';

import { ChevronRight } from 'lucide-react';
import {
  DIAGRAM_STORY_STEPS,
  STORY_NODE_BY_STEP,
  getNodeById,
  type DiagramNodeId,
} from '@/content/system-diagram';
import StatusBadge from '@/components/ui/StatusBadge';

interface DiagramStoryViewProps {
  selectedId: DiagramNodeId | null;
  onSelect: (id: DiagramNodeId) => void;
}

export default function DiagramStoryView({ selectedId, onSelect }: DiagramStoryViewProps) {
  return (
    <div className="space-y-3" aria-label="Customer journey through the Living Operating System">
      {DIAGRAM_STORY_STEPS.map((step, index) => {
        const nodeId = STORY_NODE_BY_STEP[step.step];
        const node = nodeId ? getNodeById(nodeId) : undefined;
        const selected = nodeId != null && selectedId === nodeId;
        const isLast = index === DIAGRAM_STORY_STEPS.length - 1;

        return (
          <div key={step.step} className="relative">
            <button
              type="button"
              onClick={() => nodeId && onSelect(nodeId)}
              className={`w-full rounded-[var(--qf-radius)] border p-5 text-left transition-colors ${
                selected
                  ? 'border-[var(--qf-accent)] bg-[var(--qf-accent)]/10'
                  : step.highlight
                    ? 'border-[var(--qf-accent)]/40 bg-[var(--qf-bg-raised)] hover:border-[var(--qf-accent)]'
                    : 'border-[var(--qf-border)] bg-[var(--qf-bg-raised)] hover:border-[var(--qf-accent)]/50'
              }`}
              aria-pressed={selected}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--qf-radius)] border border-[var(--qf-accent)]/50 bg-[var(--qf-bg)] font-mono text-sm font-bold text-[var(--qf-accent)]">
                    {step.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-[var(--qf-text)]">{step.title}</h3>
                      <StatusBadge status={step.status} />
                      {node && (
                        <span className="font-mono text-[10px] text-[var(--qf-text-faint)]">
                          {node.label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--qf-text-dim)]">{step.detail}</p>
                    {node?.capabilityChips && node.capabilityChips.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {node.capabilityChips
                          .filter((c) => c.status === 'LIVE')
                          .slice(0, 6)
                          .map((chip) => (
                            <span
                              key={chip.label}
                              className="rounded-[var(--qf-radius)] border border-[var(--qf-ok)]/30 bg-[var(--qf-ok)]/5 px-2 py-0.5 text-[10px] font-medium text-[var(--qf-ok)]"
                            >
                              {chip.label}
                            </span>
                          ))}
                      </div>
                    )}
                    {step.plannedNote && (
                      <p className="mt-2 text-xs text-[var(--qf-text-faint)]">
                        Roadmap: {step.plannedNote}
                      </p>
                    )}
                  </div>
                </div>
                <ChevronRight
                  className={`h-5 w-5 shrink-0 text-[var(--qf-text-faint)] ${selected ? 'text-[var(--qf-accent)]' : ''}`}
                />
              </div>
            </button>
            {!isLast && (
              <div className="ml-5 flex h-3 items-center border-l border-dashed border-[var(--qf-border)] pl-5 md:ml-9" />
            )}
          </div>
        );
      })}
      <p className="text-center text-xs text-[var(--qf-text-faint)]">
        Click any step for full AS-IS proof, live demos and module detail.
      </p>
    </div>
  );
}

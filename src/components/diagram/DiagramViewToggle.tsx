'use client';

import type { DiagramView } from '@/content/system-diagram';

interface DiagramViewToggleProps {
  view: DiagramView;
  onChange: (view: DiagramView) => void;
}

const OPTIONS: { id: DiagramView; label: string }[] = [
  { id: 'architecture', label: 'Architecture' },
  { id: 'smb_funnel', label: 'SMB Funnel' },
];

export default function DiagramViewToggle({ view, onChange }: DiagramViewToggleProps) {
  return (
    <div
      className="inline-flex rounded-full border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-1"
      role="tablist"
      aria-label="Diagram view"
    >
      {OPTIONS.map((opt) => {
        const selected = view === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(opt.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              selected
                ? 'bg-[var(--qf-accent)] text-black'
                : 'text-[var(--qf-text-dim)] hover:text-[var(--qf-text)]'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

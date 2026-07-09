export default function DiagramStatusLegend() {
  return (
    <div
      className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] px-4 py-2.5 text-xs font-mono"
      aria-label="Diagram status legend"
    >
      <span className="flex items-center gap-1.5 text-[var(--qf-text-dim)]">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--qf-ok)]" />
        LIVE — production verified
      </span>
      <span className="flex items-center gap-1.5 text-[var(--qf-text-dim)]">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--qf-accent)]" />
        PARTIAL — in progress
      </span>
      <span className="flex items-center gap-1.5 text-[var(--qf-text-faint)]">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--qf-text-faint)]" />
        PLANNED — roadmap
      </span>
      <span className="hidden sm:inline-block h-px w-6 bg-[var(--qf-border)]" />
      <span className="flex items-center gap-1.5 text-[var(--qf-text-faint)]">
        <span className="inline-block h-0.5 w-5 bg-[var(--qf-accent)]" />
        hero path
      </span>
      <span className="flex items-center gap-1.5 text-[var(--qf-text-faint)]">
        <span className="inline-block h-0.5 w-5 border-t border-dashed border-[var(--qf-text-faint)]" />
        planned integration
      </span>
    </div>
  );
}

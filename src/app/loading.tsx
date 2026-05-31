export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--qf-sp-6)]">
      <div className="mb-4 h-8 w-8 animate-pulse rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-accent)]" />
      <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-sm)]">Loading…</p>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-[var(--qf-sp-6)]">
      <div className="h-24 w-full max-w-md animate-pulse rounded-[var(--qf-radius)] bg-[var(--qf-bg-inset)]" />
      <div className="h-4 w-48 animate-pulse rounded bg-[var(--qf-bg-inset)]" />
      <p className="text-[var(--qf-text-faint)] text-[var(--qf-fs-sm)]">Loading…</p>
    </div>
  );
}

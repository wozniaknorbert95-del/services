import Link from 'next/link';

interface ProofEmptyStateProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  aspect?: 'screen' | 'video';
}

export default function ProofEmptyState({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  aspect = 'screen',
}: ProofEmptyStateProps) {
  const aspectClass = aspect === 'video' ? 'aspect-video' : 'aspect-[16/10]';

  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${aspectClass} rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-6 text-center`}
      role="status"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">{eyebrow}</p>
      <p className="mt-3 text-sm font-semibold text-[var(--qf-text)]">{title}</p>
      <p className="mt-2 max-w-sm text-sm text-[var(--qf-text-dim)]">{description}</p>
      {ctaLabel && ctaHref ? (
        <Link
          href={ctaHref}
          className="mt-4 text-sm font-semibold text-[var(--qf-accent)] hover:underline"
        >
          {ctaLabel} →
        </Link>
      ) : null}
    </div>
  );
}

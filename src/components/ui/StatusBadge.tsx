import type { FlowStepStatus } from '@/content/owner-ecosystem';
import type { ReadinessStatus } from '@/content/readiness';
import type { CaseStatusLabel } from '@/lib/case-studies';

type StatusBadgeVariant = FlowStepStatus | ReadinessStatus | CaseStatusLabel;

const STATUS_CLASS: Record<StatusBadgeVariant, string> = {
  LIVE: 'text-emerald-500 border-emerald-500/30',
  PARTIAL: 'text-amber-500 border-amber-500/30',
  PLANNED: 'text-[var(--qf-text-faint)] border-[var(--qf-border)]',
  PILOT: 'text-sky-400 border-sky-400/30',
  DEMO: 'text-violet-400 border-violet-400/30',
};

interface StatusBadgeProps {
  status: StatusBadgeVariant;
  className?: string;
}

/** Honest LIVE / PARTIAL / PLANNED label — owner ecosystem + readiness table */
export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${STATUS_CLASS[status]} ${className}`}
    >
      {status}
    </span>
  );
}

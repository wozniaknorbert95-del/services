import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  isActive?: boolean;
  className?: string;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  isActive = false,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'flex h-10 w-10 items-center justify-center text-sm font-bold',
            'rounded-[var(--qf-radius)] border',
            isActive
              ? 'border-[var(--qf-accent)] bg-[var(--qf-accent)] text-[var(--qf-bg)]'
              : 'border-[var(--qf-border)] bg-[var(--qf-bg-inset)] text-[var(--qf-accent)]'
          )}
        >
          {number}
        </span>
        <div className="mt-2 h-full w-px bg-[var(--qf-border)]" />
      </div>
      <div className="pb-8">
        <h3 className="mb-1 flex items-center gap-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
          {Icon && <Icon className="h-5 w-5 text-[var(--qf-accent)]" strokeWidth={1.5} />}
          {title}
        </h3>
        <p className="text-[var(--qf-text-dim)]">{description}</p>
      </div>
    </div>
  );
}

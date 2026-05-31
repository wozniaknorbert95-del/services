'use client';

import { cn } from '@/lib/utils';

interface Step {
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface ProcessStepHorizontalProps {
  steps: Step[];
  className?: string;
}

export default function ProcessStepHorizontal({
  steps,
  className,
}: ProcessStepHorizontalProps) {
  return (
    <div className={cn('flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0', className)}>
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-1 items-stretch">
          {/* Step card */}
          <div
            className={cn(
              'flex-1 rounded-[var(--qf-radius)] border p-5 md:p-4 transition-colors',
              step.highlight
                ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]'
                : 'border-[var(--qf-border)] bg-[var(--qf-bg-raised)]'
            )}
          >
            <span
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center text-sm font-bold rounded-[var(--qf-radius)] border mb-3',
                step.highlight
                  ? 'border-[var(--qf-accent)] bg-[var(--qf-accent)] text-[var(--qf-bg)]'
                  : 'border-[var(--qf-border)] bg-[var(--qf-bg-inset)] text-[var(--qf-accent)]'
              )}
            >
              {step.number}
            </span>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-1">
              {step.title}
            </h3>
            <p className="text-sm text-[var(--qf-text-dim)] leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Arrow connector — hidden on last step and on mobile */}
          {index < steps.length - 1 && (
            <div className="hidden md:flex items-center px-2">
              <span className="text-[var(--qf-text-faint)] text-lg">→</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

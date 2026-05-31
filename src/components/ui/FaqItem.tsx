'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export default function FaqItem({ question, answer, className }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] overflow-hidden',
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-4 text-left text-[var(--qf-text)] font-semibold"
        aria-expanded={open}
      >
        {question}
        <span className="ml-4 text-[var(--qf-accent)] text-lg transition-transform duration-[var(--qf-transition)]">
          {open ? '−' : '+'}
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-4 text-[var(--qf-text-dim)]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

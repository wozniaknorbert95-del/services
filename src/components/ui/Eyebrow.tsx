import { cn } from '@/lib/utils';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-block text-[var(--qf-fs-xs)] uppercase tracking-[0.18em] text-[var(--qf-accent)] mb-[var(--qf-sp-3)]',
        className
      )}
    >
      <span className="text-[var(--qf-text-faint)]">// </span>
      {children}
    </span>
  );
}

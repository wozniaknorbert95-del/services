import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono font-medium',
        'bg-[var(--color-accent-dim)] text-[var(--color-accent)]',
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export default function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 sm:p-8',
        variant === 'accent'
          ? 'border-[var(--color-accent)] bg-[var(--color-bg-surface)]'
          : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)]',
        className
      )}
    >
      {children}
    </div>
  );
}

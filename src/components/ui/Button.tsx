'use client';

import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  target,
  rel,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]';

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-glow)]',
    secondary:
      'border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
    ghost:
      'text-[var(--color-accent)] hover:text-[var(--color-accent-glow)]',
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

'use client';

import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'lg' | 'xl';
  withArrow?: boolean;
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
  withArrow = false,
  className,
  target,
  rel,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-[var(--qf-sp-2)] font-[family-name:var(--qf-mono)] font-semibold transition-all duration-[var(--qf-transition)] focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--qf-accent)] focus-visible:outline-offset-2';

  const variants = {
    primary:
      'border border-[var(--qf-accent)] bg-[var(--qf-accent)] text-[var(--qf-bg)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]',
    secondary:
      'border border-[var(--qf-border)] text-[var(--qf-text)] hover:border-[var(--qf-accent)] hover:text-[var(--qf-accent)]',
    ghost:
      'border border-transparent bg-transparent text-[var(--qf-accent)] hover:bg-[var(--qf-accent-glow)]',
    link:
      'border-transparent bg-transparent px-0 py-0 text-[var(--qf-text-dim)] hover:text-[var(--qf-text)] hover:bg-transparent',
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {withArrow && <span aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

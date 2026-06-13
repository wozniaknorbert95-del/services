'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'surface';
  padding?: 'default' | 'large';
}

export default function Section({
  children,
  className,
  id,
  background = 'default',
  padding = 'default',
}: SectionProps) {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <motion.section
      id={id}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      animate={prefersReduced ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'w-full',
        background === 'surface' ? 'bg-[var(--color-bg-surface)]' : 'bg-[var(--color-bg)]',
        padding === 'large' ? 'py-24 sm:py-32' : 'py-16 sm:py-24',
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
    </motion.section>
  );
}

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
  const sectionClass = cn(
    'w-full',
    background === 'surface' ? 'bg-[var(--color-bg-surface)]' : 'bg-[var(--color-bg)]',
    padding === 'large' ? 'py-24 sm:py-32' : 'py-16 sm:py-24',
    className
  );

  if (prefersReduced) {
    return (
      <section id={id} className={sectionClass}>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={sectionClass}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
    </motion.section>
  );
}

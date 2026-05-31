'use client';

import { motion } from 'framer-motion';
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
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
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

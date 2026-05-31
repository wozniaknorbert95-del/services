'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'KFA Finanse', initials: 'KFA' },
  { name: 'FlexGrafik', initials: 'FG' },
  { name: 'FitDiet', initials: 'FD' },
];

export default function TrustBar() {
  return (
    <div className="w-full border-b border-[var(--color-border)] bg-[var(--color-bg-surface)] py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <p className="mb-6 text-center text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
          Trusted by professionals who value their time
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group flex items-center gap-3 opacity-50 transition-opacity hover:opacity-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] font-mono text-xs font-bold text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]">
                {p.initials}
              </div>
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

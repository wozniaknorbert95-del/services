'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';
import { Mail, Monitor } from 'lucide-react';

const CASES = [
  {
    icon: Mail,
    title: 'From inbox chaos to control',
    before: 'hours a day lost to email.',
    after: 'a sorted inbox and drafted replies.',
    metric: '[X] hours saved per week',
  },
  {
    icon: Monitor,
    title: 'From a 2012 site to a 2026 system',
    before: 'a site that did nothing.',
    after: 'clear actions and tracked enquiries.',
    metric: '[X]% more enquiries',
  },
];

export default function ResultsTeaser() {
  return (
    <section className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.h2
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          What changes
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-6)] lg:grid-cols-2"
        >
          {CASES.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeIn}
              className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6"
            >
              <c.icon
                className="mb-4 h-6 w-6 text-[var(--qf-accent)]"
                strokeWidth={1.5}
              />
              <h3 className="mb-4 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {c.title}
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-[var(--qf-text-faint)]">
                  Before: {c.before}
                </p>
                <p className="text-[var(--qf-text-dim)]">
                  After: {c.after}
                </p>
                <p className="text-[var(--qf-accent)]">
                  ▸ {c.metric}{' '}
                  <span className="text-[var(--qf-text-faint)]">
                    (insert after first delivery)
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="mt-[var(--qf-sp-8)] text-center"
        >
          <a
            href={ROUTES.results}
            className="inline-flex items-center gap-[var(--qf-sp-2)] text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
          >
            See all results →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

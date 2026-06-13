'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';
import { Mail, Workflow } from 'lucide-react';

const CASES = [
  {
    icon: Mail,
    title: 'The self-running back-office',
    meta: 'Inbox Killer · live',
    summary:
      'An agent classifies mixed email, drafts replies, and queues everything for your approval.',
    measurement: 'Estimate ~ a few hours/week — confirmed per client.',
    caseHref: ROUTES.resultsInboxKiller,
  },
  {
    icon: Workflow,
    title: 'Self-service quote & onboarding',
    meta: 'Sales Funnel Engine',
    summary:
      'A 7-step configurator qualifies, quotes and books — without you typing the same reply again.',
    measurement: 'Fewer manual quote emails (to be quantified).',
    caseHref: ROUTES.resultsSalesFunnel,
  },
];

export default function ResultsTeaser() {
  return (
    <section
      aria-labelledby="results-teaser-title"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.h2
          id="results-teaser-title"
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
                aria-hidden="true"
              />
              <h3 className="mb-1 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {c.title}
              </h3>
              <p className="mb-4 font-mono text-xs text-[var(--qf-accent)]">{c.meta}</p>
          <p className="mb-4 text-sm text-[var(--qf-text-dim)]">{c.summary}</p>
          <p className="mb-4 font-mono text-xs text-[var(--qf-text-faint)]">
            Measurement: {c.measurement}
          </p>
          {c.caseHref && (
            <a
              href={c.caseHref}
              className="text-sm text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
            >
              Read case study →
            </a>
          )}
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

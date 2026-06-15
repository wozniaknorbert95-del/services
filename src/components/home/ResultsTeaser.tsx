'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ROUTES } from '@/lib/constants';
import { Building2, GitBranch, Mail, Workflow } from 'lucide-react';

import { caseMeasurements } from '@/content/proof';

const CASES = [
  {
    icon: Mail,
    title: 'The self-running back-office',
    meta: 'Inbox Killer · live',
    summary:
      'An agent deploys and manages systems directly via Telegram commands, editing code remotely with SSH.',
    measurementKey: 'inboxKiller' as const,
    caseHref: ROUTES.resultsInboxKiller,
  },
  {
    icon: GitBranch,
    title: 'A multi-agent orchestrator',
    meta: 'Agent engine · production',
    summary:
      'FastAPI + LangGraph on a VPS — single source of truth, agent cards and human approval gates.',
    measurementKey: 'agentOs' as const,
    caseHref: ROUTES.resultsAgentOrchestrator,
  },
  {
    icon: Workflow,
    title: 'Self-service quote & onboarding',
    meta: 'Sales Funnel Engine',
    summary:
      'A 7-step configurator qualifies, quotes and books — without you typing the same reply again.',
    measurementKey: 'salesFunnel' as const,
    caseHref: ROUTES.resultsSalesFunnel,
  },
  {
    icon: Building2,
    title: 'Modernisation + AI assistant for an advisory firm',
    meta: 'Web Upgrade + assistant · anonymised',
    summary:
      'Site upgrade + qualification-only assistant + human-approved content — AVG layer specified.',
    measurementKey: 'advisory' as const,
    caseHref: ROUTES.resultsAdvisoryModernisation,
  },
];

export default function ResultsTeaser() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      aria-labelledby="results-teaser-title"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.h2
          id="results-teaser-title"
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          What changes
        </motion.h2>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-6)] lg:grid-cols-2"
        >
          {CASES.map((c) => (
            <motion.div
              key={c.title}
              variants={motionCfg.childFade}
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
                Measurement: {caseMeasurements[c.measurementKey]?.value || '[FILL: measurement]'}
              </p>
              <a
                href={c.caseHref}
                className="text-sm text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
              >
                Read case study →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : 0.2 }).transition}
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

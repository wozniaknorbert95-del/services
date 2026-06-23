'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useMotion } from '@/lib/useMotion';
import { ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';
import { CASE_STUDIES } from '@/lib/case-studies';
import { caseMeasurements } from '@/content/proof';
import { getIntentMeta } from '@/content/ecosystem';
import { useHomeIntent, matchesHomeIntent } from '@/lib/home-intent';
import { intentHighlightClass, sortByIntentMatch } from '@/lib/intent-highlight';
import IntentBadges from '@/components/ui/IntentBadges';

const FEATURED_SLUGS = ['inbox-killer', 'agent-orchestrator', 'sales-funnel'] as const;

export default function ResultsTeaser() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const { activeIntent, isFiltering } = useHomeIntent();

  const featuredCaseStudies = useMemo(() => {
    const curated = CASE_STUDIES.filter((c) =>
      FEATURED_SLUGS.includes(c.slug as (typeof FEATURED_SLUGS)[number])
    );
    return sortByIntentMatch(curated, activeIntent);
  }, [activeIntent]);

  const filterLabel = activeIntent
    ? `Matched to "${getIntentMeta(activeIntent).label}"`
    : null;

  return (
    <section
      data-home-section="results-teaser"
      aria-labelledby="results-teaser-title"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          <span className="qf-eyebrow">// results</span>
          <h2 id="results-teaser-title" className="mt-[var(--qf-sp-4)]">
            What changes
          </h2>
          {filterLabel ? (
            <p className="mt-[var(--qf-sp-2)] font-mono text-xs text-[var(--qf-accent)]">
              // {filterLabel}
            </p>
          ) : null}
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-6)] lg:grid-cols-3"
        >
          {featuredCaseStudies.map((c) => {
            const measurement = caseMeasurements[c.manifestKey];
            const matches = matchesHomeIntent(c.intents, activeIntent);

            return (
              <motion.div
                key={c.slug}
                variants={motionCfg.childFade}
                className={`rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6 transition-opacity duration-[var(--qf-transition)] ${intentHighlightClass(matches, isFiltering)}`}
              >
                <div className="mb-3">
                  <IntentBadges intents={[...c.intents]} />
                </div>
                <h3 className="mb-1 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                  {c.title}
                </h3>
                <p className="mb-4 font-mono text-xs text-[var(--qf-accent)]">{c.meta}</p>
                <p className="mb-4 text-sm text-[var(--qf-text-dim)]">{c.system}</p>
                <p className="mb-4 font-mono text-xs text-[var(--qf-accent)]">
                  {measurement?.ready && measurement.value ? measurement.value : c.measurement}
                </p>
                <Link
                  href={c.detailHref}
                  className="text-sm text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
                >
                  Read case study →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : 0.2 }).transition}
          className="mt-[var(--qf-sp-8)] space-y-4 text-center"
        >
          <Link
            href={ROUTES.results}
            className="inline-flex items-center gap-[var(--qf-sp-2)] text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
          >
            See all results →
          </Link>
          <p>
            <Link
              href={ROUTES.bookDiscovery}
              className="text-sm font-semibold text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
            >
              Ready? {CTAS.bookAutomationMap} →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

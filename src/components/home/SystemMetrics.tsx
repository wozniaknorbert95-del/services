'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { METRIC_DISPLAY_CARDS, SYSTEM_METRICS_COPY, getMetricValue } from '@/content/metrics-display';
import { getIntentMeta } from '@/content/ecosystem';
import { useHomeIntent } from '@/lib/home-intent';
import { intentHighlightClass, itemMatchesIntent, sortByIntentMatch } from '@/lib/intent-highlight';

export default function SystemMetrics() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const { activeIntent, isFiltering } = useHomeIntent();

  const metricCards = useMemo(
    () => sortByIntentMatch(METRIC_DISPLAY_CARDS, activeIntent),
    [activeIntent]
  );

  return (
    <section
      data-home-section="system-metrics"
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
          <span className="qf-eyebrow">{SYSTEM_METRICS_COPY.eyebrow}</span>
          <h2 className="mt-[var(--qf-sp-4)]">The system, in numbers.</h2>
          <p className="qf-lead mt-[var(--qf-sp-4)] max-w-2xl">{SYSTEM_METRICS_COPY.lead}</p>
          <p className="qf-hint mt-[var(--qf-sp-3)]">{SYSTEM_METRICS_COPY.wizardFootnote}</p>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-[var(--qf-sp-4)] sm:grid-cols-2"
        >
          {metricCards.map((card) => {
            const intent = getIntentMeta(card.intent);
            const matches = itemMatchesIntent(card, activeIntent);

            return (
              <motion.div
                key={card.metricKey}
                variants={motionCfg.childFade}
                className={`flex flex-col rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-4)] transition-opacity duration-[var(--qf-transition)] ${intentHighlightClass(matches, isFiltering)}`}
              >
                <span className="mb-[var(--qf-sp-2)] text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                  {card.outcome}
                </span>
                <span className={`font-mono text-xs uppercase ${intent.textClass}`}>
                  {getMetricValue(card.metricKey)} · {card.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

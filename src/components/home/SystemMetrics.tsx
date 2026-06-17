'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { METRIC_DISPLAY_CARDS, SYSTEM_METRICS_COPY, getMetricValue } from '@/content/metrics-display';
import { getIntentMeta } from '@/content/ecosystem';

export default function SystemMetrics() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

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
          <p className="mt-[var(--qf-sp-4)] max-w-2xl text-[var(--qf-text-dim)]">
            {SYSTEM_METRICS_COPY.lead}
          </p>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-[var(--qf-sp-4)] sm:grid-cols-2 md:grid-cols-3"
        >
          {METRIC_DISPLAY_CARDS.map((card) => {
            const intent = getIntentMeta(card.intent);
            return (
              <motion.div
                key={card.metricKey}
                variants={motionCfg.childFade}
                className="flex flex-col rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-4)]"
              >
                <span className="mb-[var(--qf-sp-2)] font-mono text-[var(--qf-fs-2xl)] font-bold text-[var(--qf-text)]">
                  {getMetricValue(card.metricKey)}
                </span>
                <span className={`font-mono text-xs uppercase ${intent.textClass}`}>
                  {card.label}
                </span>
                <span className="mt-2 text-xs text-[var(--qf-text-dim)]">{card.outcome}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { metrics } from '@/content/proof';

export default function SystemMetrics() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  const metricCards = [
    { label: 'Repos / modules', value: metrics.repos },
    { label: 'Systems Live', value: metrics.systemsLive },
    { label: 'Wizard steps', value: metrics.wizardSteps },
    { label: 'Dynamic SKUs', value: metrics.skus },
    { label: 'Game levels', value: metrics.gameLevels },
    { label: 'Workflow steps', value: metrics.workflowSteps },
    { label: 'Agent nodes', value: metrics.agentNodes },
    { label: 'Inbox throughput', value: metrics.msgsPerScan },
    { label: 'Integrations', value: metrics.integrations },
    { label: 'Hosting', value: metrics.hosting },
    { label: 'Deployment', value: metrics.deployment },
  ];

  return (
    <section className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          <span className="qf-eyebrow">// The system, in numbers</span>
          <p className="mt-[var(--qf-sp-4)] max-w-2xl text-[var(--qf-text-dim)]">
            Eight production repos. One supervised ecosystem. Built from scratch — running a real business today, not a pitch deck.
          </p>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-[var(--qf-sp-4)] md:grid-cols-4"
        >
          {metricCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={motionCfg.childFade}
              className="flex flex-col rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-4)]"
            >
              <span className="mb-[var(--qf-sp-2)] text-[var(--qf-fs-2xl)] font-bold text-[var(--qf-text)]">
                {card.value !== null ? card.value : <span className="text-[var(--qf-text-faint)]">[FILL]</span>}
              </span>
              <span className="font-mono text-xs text-[var(--qf-accent)]">
                {card.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';

const FLOW_STEPS = [
  { label: 'Visitor', desc: 'Lands with a specific pain' },
  { label: 'Landing', desc: 'Recognises the outcome' },
  { label: 'Wizard', desc: 'Qualifies and scopes' },
  { label: 'AI Assistant', desc: 'Answers repeat questions' },
  { label: 'Lead Qualification', desc: 'Scores and routes' },
  { label: 'VCMS', desc: 'Command centre + data' },
  { label: 'Quote', desc: 'Fixed scope, clear price' },
  { label: 'Client', desc: 'System runs with you in the loop' },
] as const;

export default function SystemArchitecture() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn({ duration: 0.6 });

  return (
    <section
      id="system-architecture"
      data-home-section="system-architecture"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
      aria-labelledby="system-architecture-heading"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
        >
          <span className="qf-eyebrow">// System architecture</span>
          <h2 id="system-architecture-heading" className="mt-[var(--qf-sp-4)]">
            One pipeline from first visit to signed client.
          </h2>
          <p className="qf-lead mt-[var(--qf-sp-4)] max-w-2xl">
            The system connects acquisition, qualification, and delivery — not a pile of separate
            tools.
          </p>
        </motion.div>

        <motion.ol
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...fade.transition, delay: motionCfg.prefersReduced ? 0 : 0.1 }}
          className="mt-[var(--qf-sp-12)] flex flex-col gap-0 md:flex-row md:flex-wrap md:items-stretch"
        >
          {FLOW_STEPS.map((step, index) => (
            <li
              key={step.label}
              className="relative flex flex-1 min-w-[140px] flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-4)] md:border-r-0 md:last:border-r"
            >
              <span className="font-mono text-[var(--qf-fs-xs)] text-[var(--qf-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-1 font-semibold text-[var(--qf-text)]">{step.label}</span>
              <span className="mt-1 text-[var(--qf-fs-xs)] text-[var(--qf-text-dim)]">
                {step.desc}
              </span>
              {index < FLOW_STEPS.length - 1 && (
                <span
                  className="absolute -bottom-3 left-1/2 hidden -translate-x-1/2 text-[var(--qf-accent)] md:block md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </motion.ol>

        <p className="qf-hint mt-[var(--qf-sp-8)]">
          Same architecture deployed in my own ecosystem — running in production, not a slide deck.
        </p>
      </div>
    </section>
  );
}

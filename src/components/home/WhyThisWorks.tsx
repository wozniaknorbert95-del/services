'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { Server, Bot, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    icon: Server,
    title: 'Built on a live system, not a template.',
    description:
      'Every module is drawn from an ecosystem already running a real business — proven before it reaches you.',
  },
  {
    icon: Bot,
    title: 'Delivered by an AI workforce.',
    description:
      'The heavy lifting runs on systems I built, not billable hours. That\'s why delivery is faster, leaner, and priced for a business your size.',
  },
  {
    icon: ShieldCheck,
    title: 'You stay in control.',
    description:
      'Human-in-the-loop by design: nothing sends, publishes or deploys without your approval.',
  },
];

export default function WhyThisWorks() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.h2
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          Why this works
        </motion.h2>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-6)] lg:grid-cols-3"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={motionCfg.childFade}
              className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6"
            >
              <pillar.icon
                className="mb-4 h-6 w-6 text-[var(--qf-accent)]"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {pillar.title}
              </h3>
              <p className="text-[var(--qf-text-dim)] text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

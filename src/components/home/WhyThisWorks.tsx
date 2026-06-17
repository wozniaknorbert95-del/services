'use client';

import { motion } from 'framer-motion';
import { Server, Bot, ShieldCheck } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import { OBJECTIONS, WHY_THIS_WORKS_PILLARS } from '@/content/conversion-copy';

const PILLAR_ICONS = [Server, Bot, ShieldCheck] as const;

export default function WhyThisWorks() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section data-home-section="why-this-works" className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]">
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
          {WHY_THIS_WORKS_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index] ?? Server;
            return (
              <motion.div
                key={pillar.title}
                variants={motionCfg.childFade}
                className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6"
              >
                <Icon className="mb-4 h-6 w-6 text-[var(--qf-accent)]" strokeWidth={1.5} />
                <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                  {pillar.title}
                </h3>
                <p className="text-[var(--qf-text-dim)] text-sm">{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mt-[var(--qf-sp-12)] grid gap-[var(--qf-sp-4)] md:grid-cols-2"
        >
          {OBJECTIONS.map((item) => (
            <div
              key={item.objection}
              className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4"
            >
              <span className="font-mono text-xs uppercase text-[var(--qf-accent)]">
                {item.objection}
              </span>
              <p className="mt-2 text-sm text-[var(--qf-text-dim)]">{item.rebuttal}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

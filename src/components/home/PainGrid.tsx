'use client';

import { motion } from 'framer-motion';
import { Mail, Monitor, Quote, Users } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import { PAIN_GRID } from '@/content/ecosystem';
import { getIntentMeta } from '@/content/ecosystem';
import Eyebrow from '@/components/ui/Eyebrow';
import IntentBadges from '@/components/ui/IntentBadges';

const PAIN_ICONS = {
  'pain-inbox': Mail,
  'pain-site': Monitor,
  'pain-quotes': Quote,
  'pain-leads': Users,
} as const;

export default function PainGrid() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section data-home-section="pain-grid" className="py-[var(--qf-sp-16)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-8)]"
        >
          <Eyebrow>diagnostics</Eyebrow>
          <h2 className="mb-[var(--qf-sp-2)]">Where the leaks are.</h2>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {PAIN_GRID.map((pain) => {
            const Icon = PAIN_ICONS[pain.id as keyof typeof PAIN_ICONS] ?? Mail;
            const primaryIntent = pain.intents[0];
            const accent = getIntentMeta(primaryIntent);

            return (
              <motion.a
                key={pain.id}
                href={pain.href}
                variants={motionCfg.childFade}
                className="group block rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6 transition-colors duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)]"
                style={{ borderLeftWidth: '3px', borderLeftColor: accent.cssVar }}
              >
                <Icon
                  className="mb-4 h-6 w-6"
                  style={{ color: accent.cssVar }}
                  strokeWidth={1.5}
                />
                <div className="mb-3">
                  <IntentBadges intents={[...pain.intents]} />
                </div>
                <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                  {pain.title}
                </h3>
                <p className="mb-4 text-sm text-[var(--qf-text-dim)]">{pain.description}</p>
                <span
                  className="inline-flex items-center text-sm transition-colors"
                  style={{ color: accent.cssVar }}
                >
                  See the fix →
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

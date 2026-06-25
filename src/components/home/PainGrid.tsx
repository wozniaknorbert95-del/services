'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Monitor, Quote, Users } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import { PAIN_GRID, PAIN_GRID_HEADER, getIntentMeta } from '@/content/ecosystem';
import { useHomeIntent, matchesHomeIntent } from '@/lib/home-intent';
import { intentHighlightClass, sortByIntentMatch } from '@/lib/intent-highlight';
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
  const { activeIntent, isFiltering } = useHomeIntent();

  const pains = useMemo(
    () => sortByIntentMatch(PAIN_GRID, activeIntent),
    [activeIntent]
  );

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
          <Eyebrow>{PAIN_GRID_HEADER.eyebrow}</Eyebrow>
          <h2 className="mb-[var(--qf-sp-2)]">{PAIN_GRID_HEADER.title}</h2>
          <p className="qf-lead max-w-2xl">{PAIN_GRID_HEADER.lead}</p>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {pains.map((pain) => {
            const Icon = PAIN_ICONS[pain.id as keyof typeof PAIN_ICONS] ?? Mail;
            const primaryIntent = pain.intents[0];
            const accent = getIntentMeta(primaryIntent);
            const matches = matchesHomeIntent(pain.intents, activeIntent);

            return (
              <motion.a
                key={pain.id}
                href={pain.href}
                variants={motionCfg.childFade}
                className={`group block rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6 transition-opacity duration-[var(--qf-transition)] hover:border-[var(--qf-border-bright)] ${intentHighlightClass(matches, isFiltering)}`}
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

'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Monitor, Quote, Users } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import {
  PAIN_GRID,
  PAIN_GRID_HEADER,
  getIntentMeta,
} from '@/content/ecosystem';
import { useHomeIntent, matchesHomeIntent } from '@/lib/home-intent';
import { intentHighlightClass, sortByIntentMatch } from '@/lib/intent-highlight';
import Eyebrow from '@/components/ui/Eyebrow';
import IntentBadges from '@/components/ui/IntentBadges';
import IntentFilterChips from '@/components/home/IntentFilterChips';

const PAIN_ICONS = {
  'pain-inbox': Mail,
  'pain-site': Monitor,
  'pain-quotes': Quote,
  'pain-leads': Users,
} as const;

export default function PainGrid() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const { activeIntent, isFiltering, setActiveIntent } = useHomeIntent();

  const pains = useMemo(
    () => sortByIntentMatch(PAIN_GRID, activeIntent),
    [activeIntent]
  );

  const filterLabel = activeIntent
    ? `Highlighting pains matching "${getIntentMeta(activeIntent).label}" — all ${PAIN_GRID.length} visible`
    : `Showing all ${PAIN_GRID.length} pain points — filter by what matters most`;

  return (
    <section data-home-section="pain-grid" className="qf-pain-section">
      <div className="qf-pain-inner">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-pain-header"
        >
          <Eyebrow>{PAIN_GRID_HEADER.eyebrow}</Eyebrow>
          <h2 className="qf-pain-title">{PAIN_GRID_HEADER.title}</h2>
          <p className="qf-lead max-w-2xl">{PAIN_GRID_HEADER.lead}</p>
        </motion.div>

        <div className="qf-pain-filters">
          <IntentFilterChips />
          <p className="qf-pain-filter-label">{filterLabel}</p>
          {isFiltering ? (
            <p className="text-center">
              <button
                type="button"
                onClick={() => setActiveIntent(null)}
                className="text-sm text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
              >
                Clear filter
              </button>
            </p>
          ) : null}
        </div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="qf-pain-grid"
        >
          {pains.map((pain) => {
            const Icon = PAIN_ICONS[pain.id as keyof typeof PAIN_ICONS] ?? Mail;
            const primaryIntent = pain.intents[0];
            const accent = getIntentMeta(primaryIntent);
            const matches = matchesHomeIntent(pain.intents, activeIntent);
            const isLead = pain.id === 'pain-quotes' && !isFiltering;

            return (
              <motion.div key={pain.id} variants={motionCfg.childFade}>
                <Link
                  href={pain.href}
                  className={`qf-pain-card ${isLead ? 'qf-pain-card--lead' : ''} ${intentHighlightClass(matches, isFiltering)}`}
                  style={{ borderLeftColor: accent.cssVar }}
                >
                  {isLead ? <span className="qf-pain-card-badge">Quote first</span> : null}
                  <Icon
                    className="qf-pain-card-icon"
                    style={{ color: accent.cssVar }}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div className="qf-pain-card-badges">
                    <IntentBadges intents={[...pain.intents]} />
                  </div>
                  <h3 className="qf-pain-card-title">{pain.title}</h3>
                  <p className="qf-pain-cost">{pain.costLine}</p>
                  <p className="qf-pain-card-body">{pain.description}</p>
                  <span className="qf-pain-card-cta" style={{ color: accent.cssVar }}>
                    See the fix →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

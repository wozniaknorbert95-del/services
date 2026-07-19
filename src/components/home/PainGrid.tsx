'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Mail,
  Monitor,
  Quote,
  Users,
  EyeOff,
  GitBranch,
  CalendarCheck,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import {
  PAIN_GRID,
  PAIN_GRID_HEADER,
  getIntentMeta,
} from '@/content/ecosystem';
import { useHomeIntent } from '@/lib/home-intent';
import { filterByIntentMatch } from '@/lib/intent-highlight';
import Eyebrow from '@/components/ui/Eyebrow';
import IntentBadges from '@/components/ui/IntentBadges';
import IntentFilterChips from '@/components/home/IntentFilterChips';

const PAIN_ICONS = {
  'pain-inbox': Mail,
  'pain-site': Monitor,
  'pain-quotes': Quote,
  'pain-leads': Users,
  'pain-ops-blind': EyeOff,
  'pain-ops-brief': CalendarCheck,
  'pain-publish': ShieldCheck,
  'pain-drift': GitBranch,
  'pain-agent-queue': Workflow,
} as const;

/** Pain router — site-map §3 v5.2: chips + leaks; hide non-matching; mobile compact. */
export default function PainGrid() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const { activeIntent, isFiltering, setActiveIntent } = useHomeIntent();

  const pains = useMemo(
    () => filterByIntentMatch(PAIN_GRID, activeIntent),
    [activeIntent]
  );

  const filterLabel = activeIntent
    ? pains.length > 0
      ? PAIN_GRID_HEADER.filterActive(getIntentMeta(activeIntent).label, pains.length)
      : PAIN_GRID_HEADER.filterEmpty(getIntentMeta(activeIntent).label)
    : PAIN_GRID_HEADER.filterAll(PAIN_GRID.length);

  return (
    <section data-home-section="pain-grid" className="qf-pain-section" aria-labelledby="pain-grid-title">
      <div className="qf-pain-inner">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-pain-header"
        >
          <Eyebrow>{PAIN_GRID_HEADER.eyebrow}</Eyebrow>
          <h2 id="pain-grid-title" className="qf-pain-title">
            {PAIN_GRID_HEADER.title}
          </h2>
          <p className="qf-lead max-w-2xl">{PAIN_GRID_HEADER.lead}</p>
        </motion.div>

        <div className="qf-pain-filters">
          <IntentFilterChips />
          <p className="qf-pain-filter-label" aria-live="polite">
            {filterLabel}
          </p>
        </div>

        {pains.length === 0 && activeIntent ? (
          <p className="qf-pain-empty">
            <button
              type="button"
              className="qf-pain-empty-clear"
              onClick={() => setActiveIntent(null)}
            >
              {PAIN_GRID_HEADER.clearFilter}
            </button>
          </p>
        ) : (
          <motion.div
            layout
            className={`qf-pain-grid${isFiltering ? ' qf-pain-grid--filtered' : ''}`}
          >
            <AnimatePresence mode="popLayout">
              {pains.map((pain) => {
                const Icon = PAIN_ICONS[pain.id as keyof typeof PAIN_ICONS] ?? Mail;
                const primaryIntent = pain.intents[0];
                const isLead = pain.id === 'pain-quotes' && !isFiltering;

                return (
                  <motion.div
                    key={pain.id}
                    layout
                    initial={motionCfg.prefersReduced ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={motionCfg.prefersReduced ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: motionCfg.prefersReduced ? 0 : 0.2 }}
                    className="qf-pain-card-shell"
                  >
                    <Link
                      href={pain.href}
                      prefetch
                      data-intent={activeIntent ?? primaryIntent}
                      data-filter-intent={activeIntent ?? undefined}
                      className={`qf-pain-card${isLead ? ' qf-pain-card--lead' : ''}`}
                    >
                      {isLead ? <span className="qf-pain-card-badge">Quote first</span> : null}
                      <Icon className="qf-pain-card-icon" strokeWidth={1.5} aria-hidden />
                      {!isFiltering ? (
                        <div className="qf-pain-card-badges">
                          <IntentBadges intents={[...pain.intents]} />
                        </div>
                      ) : null}
                      <h3 className="qf-pain-card-title">{pain.title}</h3>
                      <p className="qf-pain-cost">
                        <span className="qf-pain-kicker">{PAIN_GRID_HEADER.losingLabel}</span>
                        {pain.costLine}
                      </p>
                      <p className="qf-pain-card-body">{pain.description}</p>
                      <p className="qf-pain-fix">
                        <span className="qf-pain-kicker">{PAIN_GRID_HEADER.fixLabel}</span>
                        <span className="qf-pain-module">{pain.moduleLabel}</span>
                        {pain.fixLine}
                      </p>
                      <span className="qf-pain-card-cta">See how it works →</span>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}

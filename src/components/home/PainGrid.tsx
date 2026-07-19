'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Monitor, Quote, Users, EyeOff, GitBranch } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import { PAIN_GRID, PAIN_GRID_HEADER } from '@/content/ecosystem';
import { useHomeIntent, matchesHomeIntent } from '@/lib/home-intent';
import { intentHighlightClass, sortByIntentMatch } from '@/lib/intent-highlight';
import Eyebrow from '@/components/ui/Eyebrow';
import IntentBadges from '@/components/ui/IntentBadges';

const PAIN_ICONS = {
  'pain-inbox': Mail,
  'pain-site': Monitor,
  'pain-quotes': Quote,
  'pain-leads': Users,
  'pain-ops-blind': EyeOff,
  'pain-drift': GitBranch,
} as const;

/** Pain router — site-map §3 v5.0 #2. Six cards; highlight via IntentRouter filter; no chips. */
export default function PainGrid() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const { activeIntent, isFiltering } = useHomeIntent();

  const pains = useMemo(
    () => sortByIntentMatch(PAIN_GRID, activeIntent),
    [activeIntent]
  );

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
            const isLead = pain.id === 'pain-quotes' && !isFiltering;
            const matches = matchesHomeIntent(pain.intents, activeIntent);

            return (
              <motion.div key={pain.id} variants={motionCfg.childFade}>
                <Link
                  href={pain.href}
                  data-intent={primaryIntent}
                  className={`qf-pain-card ${isLead ? 'qf-pain-card--lead' : ''} ${intentHighlightClass(matches, isFiltering)}`}
                >
                  {isLead ? <span className="qf-pain-card-badge">Quote first</span> : null}
                  <Icon className="qf-pain-card-icon" strokeWidth={1.5} aria-hidden />
                  <div className="qf-pain-card-badges">
                    <IntentBadges intents={[...pain.intents]} />
                  </div>
                  <h3 className="qf-pain-card-title">{pain.title}</h3>
                  <p className="qf-pain-cost">{pain.costLine}</p>
                  <p className="qf-pain-card-body">{pain.description}</p>
                  <span className="qf-pain-card-cta">See the fix →</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

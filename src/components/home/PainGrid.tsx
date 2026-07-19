'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Monitor, Quote, Users } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import { PAIN_GRID, PAIN_GRID_HEADER } from '@/content/ecosystem';
import Eyebrow from '@/components/ui/Eyebrow';
import IntentBadges from '@/components/ui/IntentBadges';

const PAIN_ICONS = {
  'pain-inbox': Mail,
  'pain-site': Monitor,
  'pain-quotes': Quote,
  'pain-leads': Users,
} as const;

/** Pain router — site-map.md §3 v4.0 #2. Only home branch; no intent filter chips. */
export default function PainGrid() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

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
          {PAIN_GRID.map((pain) => {
            const Icon = PAIN_ICONS[pain.id as keyof typeof PAIN_ICONS] ?? Mail;
            const primaryIntent = pain.intents[0];
            const isLead = pain.id === 'pain-quotes';

            return (
              <motion.div key={pain.id} variants={motionCfg.childFade}>
                <Link
                  href={pain.href}
                  data-intent={primaryIntent}
                  className={`qf-pain-card ${isLead ? 'qf-pain-card--lead' : ''}`}
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

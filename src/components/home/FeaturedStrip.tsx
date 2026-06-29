'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { FEATURED_STRIP } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';
import Eyebrow from '@/components/ui/Eyebrow';

export default function FeaturedStrip() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      data-home-section="featured-strip"
      className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-inset)] py-[var(--qf-sp-16)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-8)]"
        >
          <Eyebrow>{FEATURED_STRIP.eyebrow}</Eyebrow>
          <h2 className="mb-[var(--qf-sp-2)]">{FEATURED_STRIP.headline}</h2>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="qf-grid-3"
        >
          {FEATURED_STRIP.cards.map((card, index) => (
            <motion.div key={card.id} variants={motionCfg.childFade}>
              <Link
                href={card.href}
                onClick={() =>
                  trackEvent(card.analyticsEvent, { location: card.analyticsLocation })
                }
                className={`qf-featured-card${index === 0 ? ' qf-featured-card--primary' : ''}`}
              >
                <h3 className="qf-featured-card-title">{card.title}</h3>
                <p className="qf-featured-card-desc">{card.description}</p>
                <span className="qf-featured-card-cta">
                  Open path <span aria-hidden="true">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

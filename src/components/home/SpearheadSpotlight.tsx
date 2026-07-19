'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useMotion } from '@/lib/useMotion';
import { SPEARHEAD } from '@/content/conversion-copy';
import { METRIC_DISPLAY_CARDS, getMetricValue } from '@/content/metrics-display';
import { getIntentMeta } from '@/content/ecosystem';
import { trackEvent } from '@/lib/analytics';
import Eyebrow from '@/components/ui/Eyebrow';
import StatusBadge from '@/components/ui/StatusBadge';

const METRICS_STRIP = METRIC_DISPLAY_CARDS.slice(0, 4);

/**
 * Spearhead spotlight — Wizard Cash Engine as primary live proof.
 * Metrics strip embedded (site-map.md §3 v4.0 #3) — no separate SystemMetrics H2.
 */
export default function SpearheadSpotlight() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const slide = motionCfg.slideFromRight();

  return (
    <section data-home-section="spearhead" className="qf-spearhead" aria-labelledby="spearhead-title">
      <div className="qf-home-inner">
        <div className="qf-spearhead-layout">
          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
          >
            <Eyebrow>{SPEARHEAD.eyebrow}</Eyebrow>
            <div className="qf-spearhead-status-row">
              <StatusBadge status="LIVE" />
              <span className="qf-spearhead-status-label">Wizard Cash Engine</span>
            </div>
            <h2 id="spearhead-title" className="mb-[var(--qf-sp-4)]">
              {SPEARHEAD.headline}
            </h2>
            <p className="qf-spearhead-body">{SPEARHEAD.body}</p>
            <ul className="qf-spearhead-bullets">
              {SPEARHEAD.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="qf-spearhead-actions">
              <a
                href={SPEARHEAD.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('wizard_demo_click', { location: 'spearhead' })}
                className="qf-btn-fill"
              >
                {SPEARHEAD.primaryCta} <span aria-hidden="true">→</span>
              </a>
              <Link href={SPEARHEAD.secondaryHref} className="qf-btn-ghost">
                {SPEARHEAD.secondaryCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={slide.initial}
            whileInView={slide.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={slide.transition}
          >
            <div className="qf-spearhead-card">
              <div className="qf-spearhead-card-head">
                <ShoppingCart className="h-8 w-8 text-[var(--qf-accent)]" strokeWidth={1.5} aria-hidden />
                <span className="qf-spearhead-card-kicker">Live proof #1</span>
              </div>
              <p className="qf-spearhead-card-copy">Wizard Cash Engine — production checkout.</p>
              <div className="qf-spearhead-card-shot">
                <Image
                  src={SPEARHEAD.screenshot.src}
                  alt={SPEARHEAD.screenshot.alt}
                  width={480}
                  height={300}
                  loading="lazy"
                />
              </div>
              <p className="qf-spearhead-card-caption">{SPEARHEAD.screenshot.caption}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="qf-spearhead-metrics"
          aria-label="Verified proof numbers"
        >
          {METRICS_STRIP.map((card) => {
            const intent = getIntentMeta(card.intent);
            return (
              <motion.div key={card.metricKey} variants={motionCfg.childFade} className="qf-spearhead-metric">
                <span className={`qf-spearhead-metric-value ${intent.textClass}`}>
                  {getMetricValue(card.metricKey)}
                </span>
                <span className="qf-spearhead-metric-label">{card.label}</span>
                <span className="qf-spearhead-metric-outcome">{card.outcome}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

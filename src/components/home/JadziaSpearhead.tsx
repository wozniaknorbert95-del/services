'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { JADZIA_SPEARHEAD, CTAS } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';
import Eyebrow from '@/components/ui/Eyebrow';
import StatusBadge from '@/components/ui/StatusBadge';

/** Live proof #1 — Operations Command Layer (site-map §3 v5.0). */
export default function JadziaSpearhead() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const slide = motionCfg.slideFromRight();

  return (
    <section
      data-home-section="jadzia-spearhead"
      className="qf-spearhead"
      aria-labelledby="jadzia-spearhead-title"
    >
      <div className="qf-home-inner">
        <div className="qf-spearhead-layout">
          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
          >
            <Eyebrow>{JADZIA_SPEARHEAD.eyebrow}</Eyebrow>
            <div className="qf-spearhead-status-row">
              <StatusBadge status="LIVE" />
              <span className="qf-spearhead-status-label">{JADZIA_SPEARHEAD.statusMeta}</span>
            </div>
            <h2 id="jadzia-spearhead-title" className="mb-[var(--qf-sp-4)]">
              {JADZIA_SPEARHEAD.headline}
            </h2>
            <p className="qf-spearhead-body">{JADZIA_SPEARHEAD.body}</p>
            <ul className="qf-spearhead-bullets">
              {JADZIA_SPEARHEAD.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="qf-spearhead-actions">
              <Link
                href={JADZIA_SPEARHEAD.primaryHref}
                onClick={() => trackEvent('cta_jadzia_proof_click', { location: 'jadzia_spearhead' })}
                className="qf-btn-fill"
              >
                {JADZIA_SPEARHEAD.primaryCta} <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={JADZIA_SPEARHEAD.secondaryHref}
                onClick={() => trackEvent('cta_book_map_click', { location: 'jadzia_spearhead' })}
                className="qf-btn-ghost"
              >
                {CTAS.bookAutomationMap}
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
              <p className="qf-spearhead-card-kicker">Live proof #1 · Ops Command</p>
              <div className="qf-spearhead-card-shot">
                <Image
                  src={JADZIA_SPEARHEAD.screenshot.src}
                  alt={JADZIA_SPEARHEAD.screenshot.alt}
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </div>
              <p className="qf-spearhead-card-caption">{JADZIA_SPEARHEAD.screenshot.caption}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

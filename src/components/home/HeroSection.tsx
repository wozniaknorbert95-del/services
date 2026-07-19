'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMotion } from '@/lib/useMotion';
import { ROUTES, WHATSAPP } from '@/lib/constants';
import { HERO } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';
import StatusBadge from '@/components/ui/StatusBadge';
import BrandWatermark from '@/components/ui/BrandWatermark';

export default function HeroSection() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn({ duration: 0.6 });
  const slide = motionCfg.slideFromRight({
    delay: motionCfg.prefersReduced ? 0 : 0.2,
    duration: 0.6,
  });

  return (
    <section data-home-section="hero" className="qf-hero">
      <BrandWatermark />
      <div className="qf-hero-inner">
        <div className="qf-hero-grid">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={fade.transition}
          >
            <p className="qf-hero-eyebrow">{HERO.eyebrow}</p>
            <h1 className="qf-hero-headline">{HERO.headline}</h1>
            <p className="qf-hero-subline">{HERO.subline}</p>
            <p className="qf-hero-dual">{HERO.dualBrandLine}</p>

            <div className="qf-hero-cta-band">
              <Link
                href={ROUTES.bookDiscovery}
                onClick={() => trackEvent('cta_book_map_click', { location: 'hero_primary' })}
                className="qf-hero-cta-primary"
              >
                <span className="qf-hero-cta-primary-label">
                  {HERO.primaryCta} <span aria-hidden="true">→</span>
                </span>
                <span className="qf-hero-cta-primary-meta">{HERO.primaryCtaMeta}</span>
              </Link>
              <div className="qf-hero-cta-secondary-row">
                <Link href={HERO.secondaryHref} className="qf-hero-cta-secondary">
                  {HERO.secondaryCta}
                </Link>
                <a
                  href={WHATSAPP.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cta_whatsapp_click', { location: 'hero_whatsapp' })}
                  className="qf-hero-cta-whatsapp"
                >
                  {HERO.whatsappCta}
                </a>
              </div>
            </div>

            <p className="qf-hero-proof-strip">{HERO.proofStrip}</p>

            <ul className="qf-hero-beats">
              {Object.values(HERO.beats).map((beat) => (
                <li key={beat.label} className="qf-hero-beat">
                  <span className="qf-hero-beat-label">{beat.label}</span>
                  <span className="qf-hero-beat-text">{beat.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={slide.initial}
            animate={slide.animate}
            transition={slide.transition}
            className="qf-hero-visual-wrap"
          >
            <div className="qf-hero-proof-visual">
              <div className="qf-hero-proof-visual-header">
                <StatusBadge status="LIVE" />
                <span className="qf-hero-proof-visual-caption">{HERO.proofVisual.caption}</span>
              </div>
              <Image
                src={HERO.proofVisual.src}
                alt={HERO.proofVisual.alt}
                width={994}
                height={909}
                className="qf-hero-proof-visual-img"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

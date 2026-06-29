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
    <section data-home-section="hero" className="relative py-[var(--qf-sp-24)]">
      <BrandWatermark />
      <div className="relative z-[1] mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <div className="grid items-center gap-[var(--qf-sp-12)] lg:grid-cols-2">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={fade.transition}
          >
            <p className="mb-[var(--qf-sp-2)] font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
              {HERO.eyebrow}
            </p>
            <h1 className="mb-[var(--qf-sp-4)]">{HERO.headline}</h1>
            <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">{HERO.subline}</p>

            <ul className="qf-hero-beats mt-[var(--qf-sp-6)]">
              {Object.values(HERO.beats).map((beat) => (
                <li key={beat.label} className="qf-hero-beat">
                  <span className="qf-hero-beat-label">{beat.label}</span>
                  <span className="qf-hero-beat-text">{beat.text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-[var(--qf-sp-4)] font-mono text-xs text-[var(--qf-text-dim)]">
              {HERO.proofStrip}
            </p>
            <div className="mt-[var(--qf-sp-6)] flex flex-wrap items-center gap-[var(--qf-sp-3)]">
              <Link
                href={ROUTES.bookDiscovery}
                onClick={() => trackEvent('cta_book_map_click', { location: 'hero_primary' })}
                className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:border-[var(--qf-accent-soft)] hover:bg-[var(--qf-accent-soft)]"
              >
                {HERO.primaryCta} <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={HERO.secondaryHref}
                className="inline-flex items-center border border-[var(--qf-border)] px-6 py-3 text-sm font-semibold text-[var(--qf-text)] transition-colors hover:border-[var(--qf-accent)] hover:text-[var(--qf-accent)]"
              >
                {HERO.secondaryCta}
              </Link>
              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('cta_whatsapp_click', { location: 'hero_whatsapp' })}
                className="text-sm font-semibold text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-accent)]"
              >
                {HERO.whatsappCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={slide.initial}
            animate={slide.animate}
            transition={slide.transition}
          >
            <div className="qf-hero-proof-visual">
              <div className="qf-hero-proof-visual-header">
                <StatusBadge status="LIVE" />
                <span className="qf-hero-proof-visual-caption">{HERO.proofVisual.caption}</span>
              </div>
              <Image
                src={HERO.proofVisual.src}
                alt={HERO.proofVisual.alt}
                width={1200}
                height={750}
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

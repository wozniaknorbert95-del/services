'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMotion } from '@/lib/useMotion';
import { SPEARHEAD } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';
import Eyebrow from '@/components/ui/Eyebrow';
import StatusBadge from '@/components/ui/StatusBadge';
import { ShoppingCart } from 'lucide-react';

/**
 * Spearhead spotlight — Wizard Cash Engine as primary live proof.
 * Used in: src/app/page.tsx (home) — sekcja 5 per site-map.md §3 v3.0
 */
export default function SpearheadSpotlight() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const slide = motionCfg.slideFromRight();

  return (
    <section data-home-section="spearhead" className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <div className="grid items-center gap-[var(--qf-sp-12)] lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3"
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
          >
            <Eyebrow>{SPEARHEAD.eyebrow}</Eyebrow>
            <div className="mb-[var(--qf-sp-3)] flex flex-wrap items-center gap-[var(--qf-sp-3)]">
              <StatusBadge status="LIVE" />
              <span className="font-mono text-xs text-[var(--qf-text-faint)]">Wizard Cash Engine</span>
            </div>
            <h2 className="mb-[var(--qf-sp-4)]">{SPEARHEAD.headline}</h2>
            <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">{SPEARHEAD.body}</p>
            <ul className="mt-[var(--qf-sp-6)] space-y-3">
              {SPEARHEAD.bullets.map((item) => (
                <li key={item} className="relative pl-6 text-[var(--qf-text-dim)]">
                  <span className="absolute left-0 text-[var(--qf-ok)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-[var(--qf-sp-6)] flex flex-wrap gap-[var(--qf-sp-3)]">
              <a
                href={SPEARHEAD.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('wizard_demo_click', { location: 'spearhead' })}
                className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:border-[var(--qf-accent-soft)] hover:bg-[var(--qf-accent-soft)]"
              >
                {SPEARHEAD.primaryCta} <span aria-hidden="true">→</span>
              </a>
              <Link
                href={SPEARHEAD.secondaryHref}
                className="inline-flex items-center border border-[var(--qf-border)] px-6 py-3 text-sm font-semibold text-[var(--qf-text)] transition-colors hover:border-[var(--qf-accent)] hover:text-[var(--qf-accent)]"
              >
                {SPEARHEAD.secondaryCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={slide.initial}
            whileInView={slide.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={slide.transition}
          >
            <div className="qf-spearhead-card rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-6)]">
              <div className="mb-4 flex items-center gap-[var(--qf-sp-3)]">
                <ShoppingCart className="h-8 w-8 text-[var(--qf-accent)]" strokeWidth={1.5} />
                <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)]">
                  Live proof #1
                </span>
              </div>
              <p className="mb-4 text-[var(--qf-text)]">Wizard Cash Engine — production checkout.</p>
              <div className="overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
                <Image
                  src={SPEARHEAD.screenshot.src}
                  alt={SPEARHEAD.screenshot.alt}
                  width={480}
                  height={300}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 font-mono text-xs text-[var(--qf-text-faint)]">
                {SPEARHEAD.screenshot.caption}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMotion } from '@/lib/useMotion';
import { HERO, POSITIONING } from '@/content/conversion-copy';
import { metrics } from '@/content/proof';
import { ROUTES, WHATSAPP } from '@/lib/constants';

export default function HeroSection() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn({ duration: 0.6 });
  const slide = motionCfg.slideFromRight({
    delay: motionCfg.prefersReduced ? 0 : 0.2,
    duration: 0.6,
  });

  return (
    <section data-home-section="hero" className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <div className="grid items-center gap-[var(--qf-sp-12)] lg:grid-cols-2">
          <motion.div
            initial={fade.initial}
            animate={fade.animate}
            transition={fade.transition}
          >
            <p className="mb-[var(--qf-sp-3)] text-[var(--qf-fs-sm)] text-[var(--qf-text-faint)]">
              {POSITIONING.antiPositioning}
            </p>
            <p className="mb-[var(--qf-sp-2)] font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
              {POSITIONING.label}
            </p>
            <h1 className="mb-[var(--qf-sp-4)]">{HERO.headline}</h1>
            <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">{HERO.subline}</p>
            <div className="mt-[var(--qf-sp-6)] flex flex-wrap items-center gap-[var(--qf-sp-3)]">
              <Link
                href={ROUTES.bookDiscovery}
                className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:border-[var(--qf-accent-soft)] hover:bg-[var(--qf-accent-soft)]"
              >
                {HERO.primaryCta} <span aria-hidden="true">→</span>
              </Link>
              <a
                href={WHATSAPP.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[var(--qf-border)] px-6 py-3 text-sm font-semibold text-[var(--qf-text)] transition-colors hover:border-[var(--qf-accent)] hover:text-[var(--qf-accent)]"
              >
                {HERO.whatsappCta}
              </a>
            </div>
            <p className="mt-[var(--qf-sp-4)] text-[var(--qf-fs-sm)] text-[var(--qf-text-dim)]">
              <span className="text-[var(--qf-accent)]">→ </span>
              {HERO.proofLine}
            </p>
            <p className="mt-[var(--qf-sp-2)] text-[var(--qf-fs-sm)] text-[var(--qf-text-faint)]">
              {HERO.microTrust}
            </p>
          </motion.div>

          <motion.div
            initial={slide.initial}
            animate={slide.animate}
            transition={slide.transition}
          >
            <div className="overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)]">
              <div className="flex items-center gap-[var(--qf-sp-2)] border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-[var(--qf-sp-4)] py-[var(--qf-sp-2)] text-[var(--qf-fs-xs)] text-[var(--qf-text-dim)]">
                <span className="h-2 w-2 rounded-full bg-[var(--qf-accent)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--qf-border-bright)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--qf-border-bright)]" />
                <span className="ml-auto">conversion-pipeline · live</span>
              </div>
              <div className="p-[var(--qf-sp-6)]">
                <pre className="overflow-x-auto whitespace-pre font-[family-name:var(--qf-mono)] text-[var(--qf-fs-sm)] text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-accent)]">$</span> lead.qualify --wizard zzpackage
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> {metrics.wizardSteps} steps ·{' '}
                  {metrics.skus} SKUs
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> scored → hot(3) warm(8) nurture(11)
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> brief ready ·{' '}
                  <span className="text-[var(--qf-accent)]">awaiting your approval</span>
                  {'\n'}<span className="text-[var(--qf-accent)]">$</span> _
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="qf-statusbar mt-[var(--qf-sp-12)] flex flex-wrap items-center gap-[var(--qf-sp-4)] border-t border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-[var(--qf-sp-6)] py-[var(--qf-sp-2)] text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">
          <span className="inline-flex items-center gap-1.5 text-[var(--qf-accent)]">
            <span className="text-[0.6em]">●</span> {metrics.repos} repos
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[0.6em] text-[var(--qf-border-bright)]">●</span>{' '}
            {metrics.systemsLive} systems live
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[0.6em] text-[var(--qf-border-bright)]">●</span> human-in-the-loop
          </span>
          <Link
            href={HERO.secondaryHref}
            className="inline-flex items-center gap-1.5 text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-accent)]"
          >
            {HERO.secondaryCta} →
          </Link>
          <a
            href={HERO.wizardHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-accent)]"
          >
            {HERO.wizardCta} →
          </a>
          <span className="ml-auto inline-flex items-center gap-1.5">
            <span className="text-[0.6em] text-[var(--qf-border-bright)]">●</span> EU-hosted
          </span>
        </div>
      </div>
    </section>
  );
}

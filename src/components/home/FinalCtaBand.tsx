'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';

export default function FinalCtaBand() {
  const fade = useMotion().fadeIn();

  return (
    <section data-home-section="final-cta" className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw-narrow)] px-[var(--qf-sp-6)] text-center">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
        >
          <h2 className="mb-[var(--qf-sp-4)]">
            Start with clarity, not a sales pitch.
          </h2>
          <p className="mx-auto mb-[var(--qf-sp-4)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
            Book a paid Automation Map. In 60–90 minutes we find your two or
            three biggest time-and-money leaks, show the ROI, and recommend the
            right first step. The fee is credited toward your project — and if
            there&apos;s nothing worth automating, you owe nothing further and keep
            the document.
          </p>
          <p className="mx-auto mb-[var(--qf-sp-6)] max-w-[var(--qf-maxw-narrow)] text-sm text-[var(--qf-text-faint)]">
            <Link
              href={ARTEFACTS.automationMapSample}
              download
              onClick={() => trackEvent('sample_map_download', { location: 'final_cta' })}
              className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
            >
              See a sample Automation Map ↓
            </Link>
          </p>
          <a
            href={ROUTES.bookDiscovery}
            onClick={() => trackEvent('cta_book_map_click', { location: 'final_cta' })}
            className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-8 py-4 text-base font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
          >
            {CTAS.bookAutomationMap} <span aria-hidden="true">→</span>
          </a>
          <p className="mt-[var(--qf-sp-6)] font-mono text-xs text-[var(--qf-text-faint)]">
            Want the full picture first?{' '}
            <Link
              href={ROUTES.resultsOwnerEcosystem}
              className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
            >
              See full architecture →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

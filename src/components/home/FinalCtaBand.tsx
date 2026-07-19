'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { CTAS, FINAL_CTA } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';

export default function FinalCtaBand() {
  const fade = useMotion().fadeIn();

  return (
    <section data-home-section="final-cta" className="qf-final-cta" aria-labelledby="final-cta-title">
      <div className="qf-final-cta-inner">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
        >
          <h2 id="final-cta-title" className="mb-[var(--qf-sp-4)]">
            {FINAL_CTA.title}
          </h2>
          <p className="qf-final-cta-lead">{FINAL_CTA.lead}</p>
          <p className="qf-final-cta-sample">
            <Link
              href={ARTEFACTS.automationMapSample}
              download
              onClick={() => trackEvent('sample_map_download', { location: 'final_cta' })}
            >
              {FINAL_CTA.sampleLabel}
            </Link>
          </p>
          <a
            href={ROUTES.bookDiscovery}
            onClick={() => trackEvent('cta_book_map_click', { location: 'final_cta' })}
            className="qf-btn-fill"
          >
            {CTAS.bookAutomationMap} <span aria-hidden="true">→</span>
          </a>
          <p className="qf-final-cta-hint">
            {FINAL_CTA.architectureHint}{' '}
            <Link href={ROUTES.resultsOwnerEcosystem}>{FINAL_CTA.architectureCta}</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

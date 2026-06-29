'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { DUAL_BRAND } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';
import Eyebrow from '@/components/ui/Eyebrow';

export default function DualBrandBand() {
  const fade = useMotion().fadeIn();

  return (
    <section
      data-home-section="dual-brand"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-16)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-8)]"
        >
          <Eyebrow>{DUAL_BRAND.eyebrow}</Eyebrow>
          <h2 className="mb-[var(--qf-sp-2)]">{DUAL_BRAND.headline}</h2>
          <p className="qf-lead max-w-2xl">{DUAL_BRAND.lead}</p>
        </motion.div>

        <div className="qf-grid-2">
          <motion.article
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...fade.transition, delay: 0.05 }}
            className="qf-dual-brand-panel qf-dual-brand-panel--sell"
          >
            <p className="qf-dual-brand-label">{DUAL_BRAND.quietforge.brand}</p>
            <p className="qf-dual-brand-role">{DUAL_BRAND.quietforge.role}</p>
            <p className="mb-[var(--qf-sp-4)] text-sm text-[var(--qf-text-dim)]">
              {DUAL_BRAND.quietforge.body}
            </p>
            <Link
              href={DUAL_BRAND.quietforge.href}
              onClick={() =>
                trackEvent('cta_book_map_click', { location: 'dual_brand_qf' })
              }
              className="qf-dual-brand-link"
            >
              {DUAL_BRAND.quietforge.cta} <span aria-hidden="true">→</span>
            </Link>
          </motion.article>

          <motion.article
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="qf-dual-brand-panel qf-dual-brand-panel--proof"
          >
            <p className="qf-dual-brand-label">{DUAL_BRAND.flexgrafik.brand}</p>
            <p className="qf-dual-brand-role">{DUAL_BRAND.flexgrafik.role}</p>
            <p className="mb-[var(--qf-sp-4)] text-sm text-[var(--qf-text-dim)]">
              {DUAL_BRAND.flexgrafik.body}
            </p>
            <Link
              href={DUAL_BRAND.flexgrafik.href}
              onClick={() =>
                trackEvent('cta_results_click', { location: 'dual_brand_fg' })
              }
              className="qf-dual-brand-link qf-dual-brand-link--proof"
            >
              {DUAL_BRAND.flexgrafik.cta} <span aria-hidden="true">→</span>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

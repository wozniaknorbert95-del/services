'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';

export default function FinalCtaBand() {
  return (
    <section className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw-narrow)] px-[var(--qf-sp-6)] text-center">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
        >
          <h2 className="mb-[var(--qf-sp-4)]">
            Start with clarity, not a sales pitch.
          </h2>
          <p className="mx-auto mb-[var(--qf-sp-6)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
            Book a paid Automation Map. In 60–90 minutes we find your two or
            three biggest time-and-money leaks, show the ROI, and recommend the
            right first step. The fee is credited toward your project — and if
            there&apos;s nothing worth automating, you owe nothing further and keep
            the document.
          </p>
          <a
            href={ROUTES.bookDiscovery}
            className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-8 py-4 text-base font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
          >
            Book your Automation Map <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

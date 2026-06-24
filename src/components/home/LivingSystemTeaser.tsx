'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { LOS_LAYERS, LOS_TEASER } from '@/content/los-copy';

/**
 * Living Operating System teaser — investor bridge with 5 LOS layers.
 * Used in: src/app/page.tsx (home, after SystemArchitecture)
 */
export default function LivingSystemTeaser() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      data-home-section="los-teaser"
      className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] py-[var(--qf-sp-24)]"
      aria-labelledby="los-teaser-heading"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)]"
        >
          <span className="qf-eyebrow">{LOS_TEASER.eyebrow}</span>
          <h2 id="los-teaser-heading" className="mt-[var(--qf-sp-4)]">
            {LOS_TEASER.title}
          </h2>
          <p className="qf-lead mt-[var(--qf-sp-4)] max-w-2xl">{LOS_TEASER.lead}</p>
          <p className="qf-hint mt-[var(--qf-sp-3)]">{LOS_TEASER.governanceLine}</p>
        </motion.div>

        <motion.ol
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-5"
        >
          {LOS_LAYERS.map((layer, index) => (
            <motion.li
              key={layer.id}
              variants={motionCfg.childFade}
              className="qf-los-layer flex flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-[var(--qf-sp-4)]"
            >
              <span className="mb-1 font-mono text-xs text-[var(--qf-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-1 font-bold text-[var(--qf-text)]">{layer.name}</h3>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--qf-text-faint)]">
                {layer.systems}
              </p>
              <p className="text-sm text-[var(--qf-text-dim)]">{layer.detail}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mt-[var(--qf-sp-8)] flex flex-wrap gap-[var(--qf-sp-4)]"
        >
          <Link
            href={LOS_TEASER.ctaHref}
            className="text-sm font-semibold text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
          >
            {LOS_TEASER.ctaLabel} →
          </Link>
          <Link
            href={LOS_TEASER.ecosystemCtaHref}
            className="text-sm text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-accent)]"
          >
            {LOS_TEASER.ecosystemCtaLabel} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

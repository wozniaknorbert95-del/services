'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { GRATKA } from '@/lib/gratka';
import GratkaDiagram from '@/components/ui/GratkaDiagram';
import { getIntentMeta } from '@/content/ecosystem';
import {
  LOS_LAYERS,
  LOS_TEASER,
  LOS_DEFINITION,
  LOS_LIFE_LOOP,
  LOS_THREE_BRAINS,
  LOS_META_NOTE,
  LOS_ENTERPRISE_PATTERN,
} from '@/content/los-copy';

/**
 * Living Operating System — full canon section (6 layers, life loop, three brains).
 * Used in: src/app/page.tsx (home §2)
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
          <p className="qf-hint mt-[var(--qf-sp-3)]">{LOS_DEFINITION.living}</p>
          <p className="qf-hint mt-[var(--qf-sp-2)]">{LOS_TEASER.governanceLine}</p>
        </motion.div>

        <div className="qf-los-diagram mb-[var(--qf-sp-12)] overflow-x-auto border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-2">
          <GratkaDiagram
            src={GRATKA.losArchitectureSvg}
            alt="FlexGrafik Living Operating System — six layers and eight repositories"
            width={1200}
            height={720}
            className="h-auto w-full min-w-[320px]"
            priority
          />
        </div>

        <p className="qf-hint mb-[var(--qf-sp-8)] text-center font-mono text-xs">
          {LOS_ENTERPRISE_PATTERN.applications} · {LOS_ENTERPRISE_PATTERN.governance} ·{' '}
          {LOS_ENTERPRISE_PATTERN.aiServices}
        </p>

        <motion.ol
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {LOS_LAYERS.map((layer, index) => {
            const intent = getIntentMeta(layer.intent);
            return (
              <motion.li
                key={layer.id}
                variants={motionCfg.childFade}
                className="qf-los-layer flex flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-[var(--qf-sp-4)]"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[var(--qf-accent)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`font-mono text-[10px] uppercase ${intent.textClass}`}>
                    {intent.legend}
                  </span>
                </div>
                <h3 className="mb-1 font-bold text-[var(--qf-text)]">{layer.name}</h3>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--qf-text-faint)]">
                  {layer.systems}
                </p>
                <p className="text-sm text-[var(--qf-text-dim)]">{layer.detail}</p>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-los-life-loop mt-[var(--qf-sp-12)]"
        >
          <p className="qf-eyebrow mb-[var(--qf-sp-4)]">// life_loop</p>
          <ol className="qf-los-life-loop-track flex gap-[var(--qf-sp-2)] overflow-x-auto pb-2">
            {LOS_LIFE_LOOP.map((phase, index) => (
              <li
                key={phase.id}
                className="qf-los-life-loop-step shrink-0 border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-[var(--qf-sp-3)]"
              >
                <span className="font-mono text-[10px] text-[var(--qf-text-faint)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-1 font-bold text-sm text-[var(--qf-text)]">{phase.name}</p>
                <p className="mt-1 text-xs text-[var(--qf-text-dim)]">{phase.detail}</p>
                {phase.hitl ? (
                  <span className="qf-los-hitl-badge mt-2 inline-block font-mono text-[10px] uppercase text-[var(--qf-accent)]">
                    HITL
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-[var(--qf-sp-12)] grid gap-[var(--qf-sp-4)] md:grid-cols-3"
        >
          <p className="qf-eyebrow md:col-span-3">// three_brains</p>
          {LOS_THREE_BRAINS.map((brain) => (
            <motion.div
              key={brain.id}
              variants={motionCfg.childFade}
              className="flex flex-col border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-[var(--qf-sp-4)]"
            >
              <h3 className="font-bold text-[var(--qf-text)]">{brain.name}</h3>
              <p className="mt-1 text-sm italic text-[var(--qf-text-dim)]">{brain.question}</p>
              <p className="mt-2 font-mono text-[10px] uppercase text-[var(--qf-accent)]">
                {brain.layers}
              </p>
              <Link
                href={brain.href}
                className="mt-auto pt-4 text-sm font-semibold text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
              >
                See proof →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="qf-hint mt-[var(--qf-sp-6)] text-center text-xs">{LOS_META_NOTE}</p>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mt-[var(--qf-sp-8)] flex flex-wrap justify-center gap-[var(--qf-sp-4)]"
        >
          <Link
            href={LOS_TEASER.repoRouterCtaHref}
            className="text-sm font-semibold text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
          >
            {LOS_TEASER.repoRouterCtaLabel} →
          </Link>
          <Link
            href={LOS_TEASER.ctaHref}
            className="text-sm text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-accent)]"
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

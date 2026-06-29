'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ROUTES } from '@/lib/constants';
import { OBJECTIONS } from '@/content/conversion-copy';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';

const SAFETY_CARDS = [
  {
    title: 'Human-in-the-loop by design',
    description:
      'Nothing sends, publishes or deploys without your approval. The system proposes; you decide.',
  },
  {
    title: 'EU data, scoped access',
    description:
      'Hosting and data stay in the EU. Access is limited to you and me, revoked cleanly after handover.',
  },
  {
    title: 'Logged & auditable',
    description:
      'Who did what, when. Logs available on request so any review or audit is straightforward.',
  },
] as const;

export default function TrustAndObjections() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      id="trust-safety"
      data-home-section="trust-safety"
      aria-labelledby="trust-safety-title"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mx-auto mb-[var(--qf-sp-10)] max-w-2xl text-center"
        >
          <Eyebrow>safety</Eyebrow>
          <h2 id="trust-safety-title" className="mt-[var(--qf-sp-4)] mb-[var(--qf-sp-3)]">
            Safe enough to hand your inbox to.
          </h2>
          <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
            Every system is built to survive a small business owner&apos;s worst week — and a
            regulator&apos;s question.
          </p>
        </motion.div>

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-4)] sm:grid-cols-3"
        >
          {SAFETY_CARDS.map((card) => (
            <motion.div key={card.title} variants={motionCfg.childFade}>
              <Card hover className="h-full">
                <h3 className="mb-2 text-[var(--qf-fs-base)] font-bold text-[var(--qf-text)]">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--qf-text-dim)]">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          data-home-section="why-this-works"
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mt-[var(--qf-sp-8)]"
        >
          <div className="mx-auto max-w-3xl space-y-2 rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-[var(--qf-sp-5)] font-mono text-sm">
            {OBJECTIONS.map((item) => (
              <p key={item.objection} className="m-0 max-w-none text-[var(--qf-text-dim)]">
                <span className="text-[var(--qf-accent)]">{item.objection.toLowerCase()}:</span>{' '}
                {item.rebuttal}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : 0.15 }).transition}
          className="mt-[var(--qf-sp-6)] text-center"
        >
          <Link
            href={ROUTES.trust}
            className="inline-flex items-center gap-[var(--qf-sp-2)] text-sm text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
          >
            See full Trust &amp; Safety details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

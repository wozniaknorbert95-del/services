'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { OBJECTIONS } from '@/content/conversion-copy';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';

interface Phase {
  number: string;
  title: string;
  tags?: string[];
  description: string;
  deliverable: string;
  artefactHref?: string;
  artefactLabel?: string;
}

const PHASES: Phase[] = [
  {
    number: '01',
    title: 'Map',
    tags: ['paid first step'],
    description:
      'We find your two or three biggest time-and-money leaks, score the ROI, and agree the first system to build. You keep the document either way.',
    deliverable: 'Automation Map + prioritised plan.',
    artefactHref: ARTEFACTS.automationMapSample,
    artefactLabel: 'Download sample',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'I draw the target architecture: which agent does what, where data flows, where the human approves, what gets logged — plain language plus a diagram you could hand to anyone.',
    deliverable: 'architecture diagram + spec.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'The system is assembled through a fixed, supervised workflow — faster and leaner than billable hours, with approval gates built in.',
    deliverable: 'working system in a test environment.',
  },
  {
    number: '04',
    title: 'Verify',
    tags: ['human-in-the-loop'],
    description:
      "Nothing goes live until it's tested on real scenarios and you've signed off. Approval gates are built into the system itself, not bolted on.",
    deliverable: 'tested system + sign-off.',
  },
  {
    number: '05',
    title: 'Hand over & maintain',
    tags: ['no lock-in'],
    description:
      'Every system ships with a README and a short walkthrough. Take it in-house, or keep me on a light monthly plan — your choice, no dependency by design.',
    deliverable: 'README + handover + optional maintenance.',
    artefactHref: ARTEFACTS.maintenanceHandover,
    artefactLabel: 'Handover policy',
  },
];

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

/**
 * Why / How it works — site-map.md §3 v4.0 #5.
 * Merges former HowIWork + TrustAndObjections into one H2 chapter.
 */
export default function WhyItWorks() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      id="why-it-works"
      data-home-section="why-it-works"
      aria-labelledby="why-it-works-title"
      className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
        >
          <Eyebrow>why it works</Eyebrow>
          <h2 id="why-it-works-title" className="mb-[var(--qf-sp-4)]">
            A method, not a magic trick.
          </h2>
          <p className="mb-[var(--qf-sp-12)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
            Every project runs through the same workflow I use for my own business — clarity first,
            safety by design, no lock-in. You always know what&apos;s happening, what comes next,
            and where your approval is required.
          </p>
        </motion.div>

        <ol className="m-0 grid list-none gap-[var(--qf-sp-4)] p-0">
          {PHASES.map((phase, index) => (
            <motion.li
              key={phase.number}
              initial={fade.initial}
              whileInView={fade.animate}
              viewport={{ once: true, margin: '-80px' }}
              transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : index * 0.05 }).transition}
            >
              <Card className="flex flex-col gap-[var(--qf-sp-4)] sm:flex-row sm:items-start overflow-hidden">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-xl font-bold text-[var(--qf-accent)] sm:pt-1"
                >
                  {phase.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                    {phase.title}
                    {phase.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="ml-1 font-mono text-xs font-normal uppercase tracking-wider text-[var(--qf-text-dim)]"
                      >
                        · {tag}
                      </span>
                    ))}
                  </h3>
                  <p className="mb-2 max-w-none text-sm text-[var(--qf-text-dim)]">
                    {phase.description}
                  </p>
                  <p className="max-w-none font-mono text-sm text-[var(--qf-accent)]">
                    Deliverable: {phase.deliverable}
                    {phase.artefactHref && phase.artefactLabel && (
                      <>
                        {' '}
                        ·{' '}
                        <Link
                          href={phase.artefactHref}
                          download
                          className="text-[var(--qf-info)] hover:text-[var(--qf-text)]"
                        >
                          {phase.artefactLabel} ↓
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </Card>
            </motion.li>
          ))}
        </ol>

        <motion.p
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : 0.2 }).transition}
          className="mt-[var(--qf-sp-8)] max-w-none border-l-2 border-[var(--qf-border)] pl-4 text-sm text-[var(--qf-text-dim)]"
        >
          The same workflow runs my own business in production — not a process invented for the
          brochure. You see how it behaves before you commit to a build.
        </motion.p>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mt-[var(--qf-sp-16)]"
        >
          <h3 className="mb-[var(--qf-sp-3)] text-center text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
            Safe enough to hand your inbox to.
          </h3>
          <p className="mx-auto mb-[var(--qf-sp-8)] max-w-2xl text-center text-[var(--qf-text-dim)]">
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

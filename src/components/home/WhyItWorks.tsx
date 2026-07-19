'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { OBJECTIONS, WHY_IT_WORKS } from '@/content/conversion-copy';
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
      className="qf-why"
    >
      <div className="qf-home-inner">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-home-header"
        >
          <Eyebrow>{WHY_IT_WORKS.eyebrow}</Eyebrow>
          <h2 id="why-it-works-title">{WHY_IT_WORKS.title}</h2>
          <p className="qf-lead max-w-[var(--qf-maxw-narrow)]">{WHY_IT_WORKS.lead}</p>
        </motion.div>

        <ol className="qf-why-phases">
          {PHASES.map((phase, index) => (
            <motion.li
              key={phase.number}
              initial={fade.initial}
              whileInView={fade.animate}
              viewport={{ once: true, margin: '-80px' }}
              transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : index * 0.05 }).transition}
            >
              <Card className="qf-why-phase">
                <span aria-hidden="true" className="qf-why-phase-num">
                  {phase.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="qf-why-phase-title">
                    {phase.title}
                    {phase.tags?.map((tag) => (
                      <span key={tag} className="qf-why-phase-tag">
                        · {tag}
                      </span>
                    ))}
                  </h3>
                  <p className="qf-why-phase-body">{phase.description}</p>
                  <p className="qf-why-phase-deliverable">
                    Deliverable: {phase.deliverable}
                    {phase.artefactHref && phase.artefactLabel ? (
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
                    ) : null}
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
          className="qf-why-note"
        >
          {WHY_IT_WORKS.dogfoodNote}
        </motion.p>

        <div className="qf-why-safety">
          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
          >
            <p className="qf-why-safety-title">{WHY_IT_WORKS.safetyTitle}</p>
            <p className="qf-why-safety-lead">{WHY_IT_WORKS.safetyLead}</p>
          </motion.div>

          <motion.div
            variants={motionCfg.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="qf-why-safety-grid"
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
            className="qf-why-objections"
          >
            {OBJECTIONS.map((item) => (
              <p key={item.objection}>
                <span className="qf-why-objections-key">{item.objection.toLowerCase()}:</span>{' '}
                {item.rebuttal}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={motionCfg.fadeIn({ delay: motionCfg.prefersReduced ? 0 : 0.15 }).transition}
            className="qf-why-trust-link"
          >
            <Link href={ROUTES.trust}>{WHY_IT_WORKS.trustCta}</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

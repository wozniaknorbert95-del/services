'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { ARTEFACTS } from '@/lib/constants';
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
    title: 'Build with an AI workforce',
    description:
      'The system is assembled by AI agents I orchestrate — planner → coder → tester → review — against fixed rules. That\'s why it\'s faster and leaner than billable hours.',
    deliverable: 'working system in a test environment.',
  },
  {
    number: '04',
    title: 'Verify',
    tags: ['human-in-the-loop'],
    description:
      'Nothing goes live until it\'s tested on real scenarios and you\'ve signed off. Approval gates are built into the system itself, not bolted on.',
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

export default function HowIWork() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      id="how-i-work"
      data-home-section="how-i-work"
      aria-labelledby="how-i-work-title"
      className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
        >
          <Eyebrow>workflow</Eyebrow>
          <h2 id="how-i-work-title" className="mb-[var(--qf-sp-4)]">
            A method, not a magic trick.
          </h2>
          <p className="mb-[var(--qf-sp-12)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
            Every project runs through the same workflow my own systems use internally — the same
            one that runs a live multi-agent business. You always know what&apos;s happening, what
            comes next, and where your approval is required.
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
          This is the same workflow — single source of truth, agent cards, fixed rules — that
          runs my own production ecosystem. Not a process invented for the brochure.
        </motion.p>
      </div>
    </section>
  );
}

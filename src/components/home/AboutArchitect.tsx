'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const CAPABILITIES = [
  {
    number: '01',
    title: 'See the whole system',
    description:
      'I map how your work really flows before touching anything, so automation fits the business instead of fighting it.',
  },
  {
    number: '02',
    title: 'Own the risk',
    description:
      'I look for what can break, leak or drift, and design guardrails around it. Safety is part of the architecture, not an afterthought.',
  },
  {
    number: '03',
    title: 'Design for AI agents',
    description:
      'I build the rules, context and review gates that let AI do the heavy lifting reliably — not a demo that falls over in week two.',
  },
] as const;

interface Principle {
  label: string;
  detail: string;
  artefactHref?: string;
  artefactLabel?: string;
}

const PRINCIPLES: Principle[] = [
  {
    label: 'Minimal disruption',
    detail: 'build alongside your mess first, replace only when proven.',
  },
  {
    label: 'No lock-in',
    detail: 'tools you already trust (Workspace, Notion, Make/Zapier, a VPS).',
  },
  {
    label: 'Transparent architecture',
    detail: 'every project ships a diagram + plain-language description.',
    artefactHref: ARTEFACTS.automationMapSample,
    artefactLabel: 'See sample',
  },
  {
    label: 'Human in the loop',
    detail: 'nothing sends, publishes or deploys without your approval.',
  },
];

export default function AboutArchitect() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
        >
          <Eyebrow>Who&apos;s behind Quietforge</Eyebrow>
          <h2 id="about-title" className="mb-[var(--qf-sp-4)]">
            I design systems that code, check and maintain themselves.
          </h2>
          <p className="mb-[var(--qf-sp-12)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
            I&apos;m <strong className="text-[var(--qf-text)]">Norbert</strong> — an{' '}
            <strong className="text-[var(--qf-text)]">AI Systems Architect</strong>. My edge
            isn&apos;t writing code by hand all day; it&apos;s designing intelligent systems that
            build, verify and keep themselves running, with a human in the loop so nothing ever
            breaks your business. I see the whole system, spot the risks and the hidden debt,
            design the workflow your AI agents follow — and turn chaos into something that
            actually runs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-[var(--qf-sp-12)] grid gap-[var(--qf-sp-6)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((item) => (
            <motion.div key={item.title} variants={fadeIn}>
              <Card hover className="h-full">
                <span className="mb-3 block font-mono text-sm text-[var(--qf-info)]">
                  {item.number}
                </span>
                <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--qf-text-dim)]">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
          className="grid gap-[var(--qf-sp-8)] lg:grid-cols-[1.3fr_1fr]"
        >
          <div>
            <h3 className="mb-[var(--qf-sp-4)] text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
              Background &amp; approach
            </h3>
            <p className="max-w-none text-[var(--qf-text-dim)] leading-relaxed">
              I came up through practice, not theory — a dozen real jobs across different
              industries before this. That&apos;s why I can talk to a plumber and a lawyer in the
              same afternoon and design a system that fits how they actually work. For the last
              few years I&apos;ve built production systems that combine AI, automation and human
              review — including a live multi-agent ecosystem that runs a real business end to
              end. Quietforge is that same engine, packaged for businesses your size.
            </p>
          </div>
          <ul className="m-0 grid list-none gap-[var(--qf-sp-3)] p-0">
            {PRINCIPLES.map((principle) => (
              <li key={principle.label}>
                <Card className="p-4">
                  <span className="text-sm text-[var(--qf-text-dim)]">
                    <strong className="text-[var(--qf-text)]">{principle.label}</strong> —{' '}
                    {principle.detail}
                    {principle.artefactHref && principle.artefactLabel && (
                      <>
                        {' '}
                        <Link
                          href={principle.artefactHref}
                          download
                          className="text-[var(--qf-info)] hover:text-[var(--qf-text)]"
                        >
                          ({principle.artefactLabel} ↓)
                        </Link>
                      </>
                    )}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="mt-[var(--qf-sp-12)]"
        >
          <Button href={ROUTES.bookDiscovery} withArrow size="lg">
            Book your Automation Map
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

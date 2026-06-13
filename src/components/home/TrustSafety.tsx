'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { ARTEFACTS } from '@/lib/constants';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';

const SAFETY_CARDS = [
  {
    title: 'Human-in-the-loop by design',
    description:
      'Nothing sends, publishes or deploys without your approval. The system proposes; you decide.',
  },
  {
    title: 'Service accounts, not your passwords',
    description:
      'Access goes through dedicated accounts with scoped permissions. No passwords over WhatsApp, ever.',
  },
  {
    title: 'Start on a test inbox',
    description:
      'We can run first on a separate test address (e.g. test@yourdomain.nl) before touching anything live.',
  },
  {
    title: 'EU data, scoped access',
    description:
      'Hosting and data stay in the EU. Access is limited to you and me, and revoked cleanly after handover.',
  },
  {
    title: 'Logged & auditable',
    description:
      'Who did what, when. Logs are available on request so any review or audit is straightforward.',
  },
  {
    title: 'No lock-in',
    description:
      'Built on tools you already own. You get the README and can hand it to any developer — this is never a trap.',
  },
] as const;

export default function TrustSafety() {
  return (
    <section
      id="trust-safety"
      aria-labelledby="trust-safety-title"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fadeIn.transition}
        >
          <Eyebrow>Risk &amp; safety</Eyebrow>
          <h2 id="trust-safety-title" className="mb-[var(--qf-sp-4)]">
            Built to be safe for a small business.
          </h2>
          <p className="mb-[var(--qf-sp-4)] max-w-[var(--qf-maxw-narrow)] text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
            AI in your business should reduce risk, not add it. Safety isn&apos;t a feature I bolt
            on at the end — it&apos;s part of the architecture from day one.
          </p>
          <p className="mb-[var(--qf-sp-12)] font-mono text-sm text-[var(--qf-info)]">
            For ZZP &amp; small businesses in NL — services, e-commerce, advisory.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-6)] sm:grid-cols-2 lg:grid-cols-3"
        >
          {SAFETY_CARDS.map((card) => (
            <motion.div key={card.title} variants={fadeIn}>
              <Card hover className="h-full">
                <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--qf-text-dim)]">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...fadeIn.transition, delay: 0.15 }}
          className="mt-[var(--qf-sp-8)] max-w-none border-l-2 border-[var(--qf-border)] pl-4 text-sm text-[var(--qf-text-dim)]"
        >
          Want the detail?{' '}
          <Link
            href={ARTEFACTS.dataSafetyPlaybook}
            download
            className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
          >
            Download the one-page &ldquo;How we keep your data safe&rdquo; playbook
          </Link>{' '}
          — yours to forward to anyone, no strings.
        </motion.p>
      </div>
    </section>
  );
}

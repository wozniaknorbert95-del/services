'use client';

import { motion } from 'framer-motion';
import { Shield, Check, Lock, UserCheck } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const guarantees = [
  {
    icon: Lock,
    title: 'No lock-in',
    desc: 'Cancel anytime. You own your data. We export everything on request.',
  },
  {
    icon: UserCheck,
    title: 'Human approval at every step',
    desc: 'Zasada 11: nothing goes live without your explicit sign-off. No black boxes.',
  },
  {
    icon: Shield,
    title: '48-hour delivery promise',
    desc: 'Standard deployment is 48 hours. If scope creeps, we tell you upfront.',
  },
];

export default function RiskReversal() {
  return (
    <Section id="guarantees" background="default">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Built on trust, not hype
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          We run a print and design business in Rotterdam. The same discipline governs every deployment.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {guarantees.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="h-full text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-dim)]">
                <g.icon className="h-6 w-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">{g.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{g.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 text-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          &ldquo;I built these systems to automate my own operations. Now I use them to help other
          small businesses modernize — because you deserve tools that big companies pay six figures
          for.&rdquo;
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--color-text-primary)]">
          — Norbert Wozniak, FlexGrafik
        </p>
      </div>
    </Section>
  );
}

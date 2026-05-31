'use client';

import { motion } from 'framer-motion';
import { ScanLine, Phone, Wrench, ShieldCheck, Rocket } from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';

const steps = [
  {
    num: '01',
    title: 'Free inbox scan',
    desc: 'We connect to your email and audit your inbox in real time. You see exactly how much noise is hiding your leads.',
    icon: ScanLine,
  },
  {
    num: '02',
    title: 'Strategy call (20 min)',
    desc: 'No pitch. We walk you through the scan results, diagnose your workflow, and confirm the fix fits your business.',
    icon: Phone,
  },
  {
    num: '03',
    title: 'Build & test (48h)',
    desc: 'We deploy the Inbox Killer using production-hardened AI systems. You see progress in real time.',
    icon: Wrench,
  },
  {
    num: '04',
    title: 'You approve everything',
    desc: 'Nothing goes live without your sign-off. Zasada 11: AI executes, human decides. No black boxes.',
    icon: ShieldCheck,
  },
  {
    num: '05',
    title: 'Launch + 15-min training',
    desc: 'System goes live. We train you in 15 minutes. Monthly optimization and tuning begins automatically.',
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="surface">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>Process</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          From chaos to clarity in 5 steps
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Transparent, fast, and human-gated at every critical step.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 sm:gap-6 sm:p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-dim)] sm:h-12 sm:w-12">
              <step.icon className="h-5 w-5 text-[var(--color-accent)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[var(--color-accent)]">
                  {step.num}
                </span>
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] sm:text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

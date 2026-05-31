'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const features = [
  'Auto-classifies every email by intent (lead, support, noise)',
  'Hot lead queue with priority scoring',
  'AI-generated reply drafts tailored to your tone',
  'Daily summary email — what needs your attention',
  'Archives newsletters, spam, and cold outreach automatically',
  'Improves every week as it learns your business',
];

export default function Solution() {
  return (
    <Section id="solution" background="surface">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>The Solution</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Inbox Killer
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          A digital assistant that reads your inbox, surfaces the leads that matter,
          and clears the rest. At a fraction of a VA&apos;s cost.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-12 max-w-3xl"
      >
        <Card variant="accent" className="text-left">
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-[var(--color-text-primary)]">€497</span>
            <span className="text-[var(--color-text-muted)]">setup</span>
            <span className="mx-2 text-[var(--color-text-muted)]">+</span>
            <span className="text-4xl font-bold text-[var(--color-text-primary)]">€147</span>
            <span className="text-[var(--color-text-muted)]">/mo</span>
          </div>

          <p className="mb-6 text-sm text-[var(--color-amber)]">
            First 5 clients: month 1 free. No lock-in. Cancel anytime.
          </p>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]" />
                <span className="text-[var(--color-text-secondary)]">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href="https://calendly.com/flexgrafik/20min"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book Free Demo
            </Button>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

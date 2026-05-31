'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Mail } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const caseStudies = [
  {
    client: 'KFA Finanse',
    industry: 'Accounting & Financial Services',
    before: { metric: '12h/week', label: 'Lost to email admin' },
    after: { metric: '3x', label: 'More qualified leads surfaced' },
    quote:
      'The system classified 200+ emails in the first 48 hours. I found 3 client requests I would have missed.',
    icon: Mail,
  },
  {
    client: 'FitDiet',
    industry: 'Health & Nutrition Consulting',
    before: { metric: '80%', label: 'Inbox noise' },
    after: { metric: 'Zero', label: 'Missed opportunity since deployment' },
    quote: 'Be our next case study. First 5 demos are free.',
    icon: TrendingUp,
    cta: true,
  },
];

export default function CaseStudies() {
  return (
    <Section id="case-studies" background="default">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>Proof</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Real results, real businesses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Before and after metrics from businesses using the Inbox Killer system.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <Card className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-dim)]">
                  <cs.icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    {cs.client}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{cs.industry}</p>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--color-red)]">Before</p>
                  <p className="mt-1 text-2xl font-bold text-[var(--color-text-primary)]">
                    {cs.before.metric}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{cs.before.label}</p>
                </div>
                <div className="rounded-lg border border-[var(--color-green)] bg-[var(--color-bg)] p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--color-green)]">After</p>
                  <p className="mt-1 text-2xl font-bold text-[var(--color-text-primary)]">
                    {cs.after.metric}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{cs.after.label}</p>
                </div>
              </div>

              <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 text-sm italic text-[var(--color-text-secondary)]">
                &ldquo;{cs.quote}&rdquo;
              </blockquote>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

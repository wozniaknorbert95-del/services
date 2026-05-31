'use client';

import { motion } from 'framer-motion';
import { Clock, Mail, TrendingDown } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const pains = [
  {
    icon: Clock,
    stat: '12h',
    label: 'per week',
    title: 'Average SMB owner loses 12 hours/week to email admin',
    desc: 'Sorting, replying, archiving. Time you could spend on clients, strategy, or rest.',
  },
  {
    icon: TrendingDown,
    stat: '1 in 3',
    label: 'hot leads',
    title: 'One in three hot leads gets buried in noise',
    desc: 'Urgent client requests, partnership opportunities, sales inquiries — lost in newsletters and spam.',
  },
  {
    icon: Mail,
    stat: '€800',
    label: '– 1,500/mo',
    title: 'Hiring a VA costs €800–1,500 per month',
    desc: 'Plus training, management, turnover. And they still miss things when they are sick or on holiday.',
  },
];

export default function PainPoints() {
  return (
    <Section id="pain" background="default">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>The Problem</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Your inbox is costing you more than you think
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Three hard facts about email overwhelm — backed by what we see in every client audit.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {pains.map((pain, i) => (
          <motion.div
            key={pain.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <Card className="h-full text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-red-dim)]">
                <pain.icon className="h-6 w-6 text-[var(--color-red)]" />
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold text-[var(--color-text-primary)]">
                  {pain.stat}
                </span>
                <span className="ml-1 text-sm text-[var(--color-text-muted)]">{pain.label}</span>
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">{pain.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{pain.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

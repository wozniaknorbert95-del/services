'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, ShoppingBag } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const projects = [
  {
    name: 'Client Engagement Engine',
    description:
      'Browser-based advergame built to capture leads. Custom Canvas engine. Playwright-tested. Deployed for FlexGrafik branding clients.',
    url: 'https://app.flexgrafik.nl',
    icon: Gamepad2,
    label: 'Lead Capture',
  },
  {
    name: 'Self-Service Order Wizard',
    description:
      'Headless WooCommerce wizard. Clients configure orders autonomously. Zero back-and-forth. 199 EUR minimum checkout.',
    url: 'https://zzpackage.flexgrafik.nl',
    icon: ShoppingBag,
    label: 'E-Commerce Automation',
  },
];

export default function ProjectShowcase() {
  return (
    <Section id="projects" background="surface">
      <div className="mx-auto max-w-4xl text-center">
        <Badge>What We Build</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Production systems, not promises
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Real tools running in production. Built with the same systems we deploy for clients.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group block no-underline"
          >
            <Card className="h-full transition-colors group-hover:border-[var(--color-accent)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-dim)]">
                    <p.icon className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">
                      {p.name}
                    </h3>
                    <span className="text-xs text-[var(--color-text-muted)]">{p.label}</span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]" />
              </div>

              <div className="mb-4 aspect-video rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]" />

              <p className="text-sm text-[var(--color-text-secondary)]">{p.description}</p>
            </Card>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

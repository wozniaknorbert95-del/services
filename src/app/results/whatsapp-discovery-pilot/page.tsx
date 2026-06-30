import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  whatsappPilotCaseMeta,
  whatsappPilotCta,
  whatsappPilotHero,
  whatsappPilotVideoPlaceholder,
  whatsappPilotBeforeItems,
  whatsappPilotAfterItems,
  whatsappPilotFlowSteps,
  whatsappPilotStack,
  whatsappPilotMeasurement,
} from '@/content/whatsapp-discovery-pilot-case-study';

export const metadata: Metadata = {
  title: whatsappPilotCaseMeta.title,
  description: whatsappPilotCaseMeta.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: whatsappPilotCaseMeta.openGraphTitle,
    description: whatsappPilotCaseMeta.openGraphDescription,
    images: [{ url: '/og/results.svg', width: 1200, height: 630, alt: whatsappPilotCaseMeta.ogAlt }],
  },
};

export default function WhatsappDiscoveryPilotPage() {
  return (
    <>
      <Section padding="large">
        <Eyebrow>{whatsappPilotHero.eyebrow}</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight mb-6 max-w-3xl">
          {whatsappPilotHero.headline}
        </h1>
        <p className="text-[var(--qf-text-dim)] text-lg max-w-2xl mb-8">{whatsappPilotHero.lead}</p>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold mb-6">Before → After</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">Before</p>
            <ul className="space-y-3">
              {whatsappPilotBeforeItems.map((item) => (
                <li key={item.label}>
                  <p className="text-sm font-semibold text-[var(--qf-text)]">{item.label}</p>
                  <p className="text-xs text-[var(--qf-text-dim)]">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">After</p>
            <ul className="space-y-3">
              {whatsappPilotAfterItems.map((item) => (
                <li key={item.label}>
                  <p className="text-sm font-semibold text-[var(--qf-text)]">{item.label}</p>
                  <p className="text-xs text-[var(--qf-text-dim)]">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold mb-6">The Flow</h2>
        <ol className="space-y-4">
          {whatsappPilotFlowSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="shrink-0 font-mono text-xl font-bold text-[var(--qf-accent)]">{i + 1}</span>
              <div>
                <p className="text-sm font-semibold text-[var(--qf-text)]">{step.title}</p>
                <p className="text-xs text-[var(--qf-text-dim)]">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold mb-6">{whatsappPilotVideoPlaceholder.title}</h2>
        <div className="aspect-video max-w-3xl overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <p className="font-mono text-sm text-[var(--qf-text-dim)]">{whatsappPilotVideoPlaceholder.body}</p>
            <p className="mt-2 text-xs text-[var(--qf-text-faint)]">{whatsappPilotVideoPlaceholder.statusNote}</p>
          </div>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold mb-6">Stack</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whatsappPilotStack.map((item) => (
            <Card key={item.label} className="p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--qf-text)]">{item.value}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="surface" padding="large">
        <Card className="max-w-2xl p-6">
          <Eyebrow>{whatsappPilotMeasurement.eyebrow}</Eyebrow>
          <p className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">{whatsappPilotMeasurement.value}</p>
          <p className="text-xs text-[var(--qf-text-faint)]">{whatsappPilotMeasurement.note}</p>
        </Card>
      </Section>

      <Section padding="large">
        <div className="flex flex-wrap gap-4">
          <Button href={whatsappPilotCta.href} withArrow size="lg" target="_blank" rel="noopener noreferrer">
            {whatsappPilotCta.label}
          </Button>
          <Link href={whatsappPilotCta.backHref} className="text-sm text-[var(--qf-accent)] hover:underline">
            {whatsappPilotCta.backLabel}
          </Link>
        </div>
      </Section>
    </>
  );
}

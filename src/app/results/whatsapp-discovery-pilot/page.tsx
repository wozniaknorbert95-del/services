import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ROUTES, WHATSAPP } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'WhatsApp Discovery Pilot — Production Systems',
  description:
    'Screen walkthrough of async WhatsApp qualification: 6–8 questions, lead scoring, brief output — same path Norbert uses for discovery.',
  openGraph: {
    title: 'WhatsApp Discovery Pilot | Quietforge',
    description: 'Async chat qualification with scored brief output.',
    images: [{ url: '/og/results.svg', width: 1200, height: 630, alt: 'WhatsApp discovery pilot' }],
  },
};

export default function WhatsappDiscoveryPilotPage() {
  return (
    <>
      <Section padding="large">
        <Eyebrow>Case study · Pilot</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight mb-6 max-w-3xl">
          WhatsApp discovery — qualify leads without a cold call.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-lg max-w-2xl mb-8">
          Deployed in my own stack: a chat agent asks 6–8 questions, scores the fit, and delivers a
          brief I can act on — same architecture I deploy for clients.
        </p>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold mb-4">Video walkthrough</h2>
        <div className="aspect-video max-w-3xl overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <p className="font-mono text-sm text-[var(--qf-text-dim)]">
              60–90s screen recording — agent leads through 4 qualification questions → brief PDF.
            </p>
            <p className="mt-2 text-xs text-[var(--qf-text-faint)]">Poster: terminal mock until Loom is recorded.</p>
          </div>
        </div>
      </Section>

      <Section padding="large">
        <div className="flex flex-wrap gap-4">
        <Button href={WHATSAPP.url} withArrow size="lg" target="_blank" rel="noopener noreferrer">
            {WHATSAPP.label}
          </Button>
          <Link href={ROUTES.results} className="text-sm text-[var(--qf-accent)] hover:underline">
            ← All case studies
          </Link>
        </div>
      </Section>
    </>
  );
}

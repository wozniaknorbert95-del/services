import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES } from '@/lib/constants';

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'Results — what changes | Quietforge',
  description:
    'Real systems already running: inbox automation, multi-agent orchestration, self-service quoting, and advisory firm modernisation. Process-proof case studies.',
  openGraph: {
    title: 'Results — what changes | Quietforge',
    description:
      'Real systems already running inside a live business ecosystem. Names withheld; architecture is real.',
    url: 'https://services.flexgrafik.nl/results',
    images: [
      {
        url: '/og/results.svg',
        width: 1200,
        height: 630,
        alt: 'Results — what changes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Results — what changes | Quietforge',
    description: 'Real systems, already running — process-proof case studies.',
    images: ['/og/results.svg'],
  },
};

/* ── data ── */
interface CaseStudy {
  number: string;
  title: string;
  meta: string;
  context: string;
  system: string;
  real: string;
  measurement: string;
}

const CASES: CaseStudy[] = [
  {
    number: '01',
    title: 'The self-running back-office',
    meta: 'Inbox Killer · live',
    context:
      'A small NL service business drowning in mixed email — leads, invoices, noise in one pile.',
    system:
      'An agent that reads the inbox, classifies (lead / client / invoice / noise) and drafts replies. classify → plan → diff → approve. Nothing sends without approval.',
    real: 'Live mailbox, 100+ messages/scan, human-in-the-loop on every send.',
    measurement: 'Estimate ~ a few hours/week — confirmed per client.',
  },
  {
    number: '02',
    title: 'A multi-agent orchestrator',
    meta: 'Agent engine · production',
    context:
      'Coordinating a whole business — orders, content, CRM — without spreadsheets everywhere.',
    system:
      'A FastAPI + LangGraph engine on a VPS, governed by a single source of truth, agent cards and fixed rules (planner → coder → tester → review).',
    real: 'Production engine, SSoT architecture, guardrails, 12-step workflow.',
    measurement: 'Process proof — architecture diagram on request.',
  },
  {
    number: '03',
    title: 'Self-service quote & onboarding',
    meta: 'Sales Funnel Engine',
    context: 'The same "what do you charge?" questions answered by hand, all day.',
    system:
      'A 7-step configurator with open pricing and payment — qualifies, quotes and books without a phone call.',
    real: 'Working funnel — pick options → upload logo → see price → pay.',
    measurement: 'Fewer manual quote emails (to be quantified).',
  },
  {
    number: '04',
    title: 'Modernisation + AI assistant for an advisory firm',
    meta: 'Web Upgrade + assistant · anonymised',
    context:
      'A Rotterdam accounting office with a strong offer but an outdated site and no lead capture.',
    system:
      'Site modernisation + a lead-qualifying AI assistant (qualification only, no tax advice) + a human-approved content engine, with a signed data-processing agreement.',
    real: 'Full scope designed, security & AVG layer specified, staged delivery.',
    measurement: 'In delivery — outcomes reported once live.',
  },
];

/* ── page ── */
export default function ResultsPage() {
  return (
    <>
      <Section padding="large">
        <Eyebrow>Proof</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Real systems, already running.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          These aren&apos;t slides — they&apos;re systems built and operating inside a live business
          ecosystem. Names are withheld; the architecture is real. As client engagements report hard
          numbers, they&apos;ll appear here in place of the estimates.
        </p>
      </Section>

      <Section background="surface" padding="large">
        <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-2">
          {CASES.map((c) => (
            <Card key={c.number} className="h-full p-6 md:p-8">
              <span className="mb-2 block font-mono text-sm text-[var(--qf-info)]">
                {c.number}
              </span>
              <h2 className="mb-1 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {c.title}
              </h2>
              <p className="mb-4 font-mono text-xs text-[var(--qf-accent)]">{c.meta}</p>
              <p className="mb-3 max-w-none text-sm text-[var(--qf-text-dim)]">
                <strong className="text-[var(--qf-text)]">Context:</strong> {c.context}
              </p>
              <p className="mb-3 max-w-none text-sm text-[var(--qf-text-dim)]">
                <strong className="text-[var(--qf-text)]">System:</strong> {c.system}
              </p>
              <p className="mb-3 max-w-none border-l-2 border-[var(--qf-accent)] pl-3 text-sm text-[var(--qf-text)]">
                <strong>Real:</strong> {c.real}
              </p>
              <p className="max-w-none font-mono text-xs text-[var(--qf-text-faint)]">
                Measurement: {c.measurement}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Let&apos;s find what&apos;s worth automating in your business.
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. In 60–90 minutes we&apos;ll pinpoint your biggest leaks
          and show you the ROI — before you commit to anything bigger.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { CASE_STUDIES } from '@/lib/case-studies';

interface CaseGratkaLink {
  label: string;
  href: string;
}

interface CaseExtras {
  detailHref: string;
  gratkaLinks: CaseGratkaLink[];
}

const CASE_EXTRAS: Partial<Record<string, CaseExtras>> = {
  'inbox-killer': {
    detailHref: ROUTES.resultsInboxKiller,
    gratkaLinks: [
      { label: 'Download flow diagram (SVG)', href: GRATKA.inboxKillerFlowSvg },
      { label: 'Download before/after (PDF)', href: GRATKA.inboxKillerBeforeAfterPdf },
    ],
  },
  'agent-orchestrator': {
    detailHref: ROUTES.resultsAgentOrchestrator,
    gratkaLinks: [
      { label: 'Architecture diagram (SVG)', href: GRATKA.orchestratorArchitectureSvg },
      { label: 'Agent card sample (PDF)', href: GRATKA.orchestratorAgentCardPdf },
      { label: 'Workflow map (PDF)', href: GRATKA.orchestratorWorkflowMapPdf },
    ],
  },
  'sales-funnel': {
    detailHref: ROUTES.resultsSalesFunnel,
    gratkaLinks: [
      { label: 'Configurator journey (SVG)', href: GRATKA.salesFunnelJourneySvg },
      { label: 'Journey map (PDF)', href: GRATKA.salesFunnelJourneyPdf },
      { label: 'ROI framing sheet (PDF)', href: GRATKA.salesFunnelRoiPdf },
    ],
  },
  'advisory-modernisation': {
    detailHref: ROUTES.resultsAdvisoryModernisation,
    gratkaLinks: [
      { label: 'Scope summary (PDF)', href: GRATKA.advisoryScopeSummaryPdf },
      { label: 'AVG / data layer (PDF)', href: GRATKA.advisoryAvgLayerPdf },
      { label: 'Delivery timeline (SVG)', href: GRATKA.advisoryDeliveryTimelineSvg },
      { label: 'Delivery timeline (PDF)', href: GRATKA.advisoryDeliveryTimelinePdf },
    ],
  },
};

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
        alt: 'Results — Real systems, already running',
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
          {CASE_STUDIES.map((c) => {
            const extras = c.slug ? CASE_EXTRAS[c.slug] : undefined;

            return (
              <Card key={c.number} className="flex h-full flex-col p-6 md:p-8">
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
                <p className="mb-6 max-w-none font-mono text-xs text-[var(--qf-text-faint)]">
                  Measurement: {c.measurement}
                </p>

                {extras && (
                  <div className="mt-auto space-y-2 border-t border-[var(--qf-border)] pt-4 text-sm">
                    <Link
                      href={extras.detailHref}
                      className="block text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
                    >
                      Read full case study →
                    </Link>
                    {extras.gratkaLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        download
                        className="block text-[var(--qf-info)] hover:text-[var(--qf-text)]"
                      >
                        {link.label} ↓
                      </Link>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
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

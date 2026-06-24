import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import GratkaDiagram from '@/components/ui/GratkaDiagram';
import { ROUTES, SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { CASE_STUDIES } from '@/lib/case-studies';
import FieldReports from '@/components/results/FieldReports';
import SystemMetrics from '@/components/home/SystemMetrics';
import IntentBadges from '@/components/ui/IntentBadges';

interface CaseGratkaLink {
  label: string;
  href: string;
}

interface CaseExtras {
  diagramSrc: string;
  diagramAlt: string;
  gratkaLinks: CaseGratkaLink[];
}

const CASE_EXTRAS: Partial<Record<string, CaseExtras>> = {
  'inbox-killer': {
    diagramSrc: GRATKA.inboxKillerFlowSvg,
    diagramAlt:
      'Inbox Killer flow diagram: read, classify, sort into lanes, draft reply, human approval gate, then send',
    gratkaLinks: [
      { label: 'Download flow diagram (SVG)', href: GRATKA.inboxKillerFlowSvg },
      { label: 'Download before/after (PDF)', href: GRATKA.inboxKillerBeforeAfterPdf },
    ],
  },
  'agent-orchestrator': {
    diagramSrc: GRATKA.orchestratorArchitectureSvg,
    diagramAlt:
      'Agent OS 2.0 hybrid architecture: VPS control plane, 5-node LangGraph pipeline, local runner and human approval gate',
    gratkaLinks: [
      { label: 'Architecture diagram (SVG)', href: GRATKA.orchestratorArchitectureSvg },
      { label: 'Agent card sample (PDF)', href: GRATKA.orchestratorAgentCardPdf },
      { label: 'Workflow map (PDF)', href: GRATKA.orchestratorWorkflowMapPdf },
    ],
  },
  'sales-funnel': {
    diagramSrc: GRATKA.salesFunnelJourneySvg,
    diagramAlt:
      'Self-service configurator journey: welcome, seven configuration steps, then checkout',
    gratkaLinks: [
      { label: 'Configurator journey (SVG)', href: GRATKA.salesFunnelJourneySvg },
      { label: 'Journey map (PDF)', href: GRATKA.salesFunnelJourneyPdf },
      { label: 'ROI framing sheet (PDF)', href: GRATKA.salesFunnelRoiPdf },
    ],
  },
  'advisory-modernisation': {
    diagramSrc: GRATKA.advisoryDeliveryTimelineSvg,
    diagramAlt:
      'Staged delivery timeline: six phases with sign-off gates for advisory firm modernisation',
    gratkaLinks: [
      { label: 'Scope summary (PDF)', href: GRATKA.advisoryScopeSummaryPdf },
      { label: 'AVG / data layer (PDF)', href: GRATKA.advisoryAvgLayerPdf },
      { label: 'Delivery timeline (SVG)', href: GRATKA.advisoryDeliveryTimelineSvg },
      { label: 'Delivery timeline (PDF)', href: GRATKA.advisoryDeliveryTimelinePdf },
    ],
  },
  'lead-magnet': {
    diagramSrc: '/gratka/lead-magnet.png',
    diagramAlt: 'Lead magnet gameplay with email capture and leaderboard',
    gratkaLinks: [],
  },
  'owner-ecosystem': {
    diagramSrc: GRATKA.ownerEcosystemMapSvg,
    diagramAlt: 'Owner ecosystem diagram: eight repos, one supervised system',
    gratkaLinks: [
      { label: 'Download ecosystem map (PDF)', href: GRATKA.ownerEcosystemMapPdf },
    ],
  },
};

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'Results — what changes',
  description:
    'Real systems already running: inbox automation, multi-agent orchestration, self-service quoting, and advisory firm modernisation. Process-proof case studies.',
  openGraph: {
    title: 'Results — what changes',
    description:
      'Real systems already running inside a live business ecosystem. Names withheld; architecture is real.',
    url: `${SITE_URL}/results`,
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
    title: 'Results — what changes',
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
          Deployed in production in my own ecosystem (2+ years running). Same architecture I deploy
          for clients — not theory. Names are withheld where anonymised; the stack is real.
        </p>
      </Section>

      <Section background="surface" padding="large">
        <Card className="border-[var(--qf-accent)] p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            Owner ecosystem
          </p>
          <h2 className="mb-3 text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
            8 repos, 1 supervised system
          </h2>
          <p className="mb-6 max-w-none text-sm text-[var(--qf-text-dim)]">
            All six case studies connect to modules in a live stack — VCMS supervision, Agent OS
            execution, wizard commerce, portal assistant and inbox automation. See how they cooperate.
          </p>
          <div className="mb-6 overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-3">
            <GratkaDiagram
              src={GRATKA.ownerEcosystemMapSvg}
              alt="Owner ecosystem diagram: governance, VCMS, applications, Agent OS, Quietforge and Inbox Killer"
              width={1200}
              height={1100}
              className="h-auto w-full min-w-[480px]"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={ROUTES.resultsOwnerEcosystem}
              className="text-sm font-semibold text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
            >
              Full ecosystem map →
            </Link>
            <Link
              href={GRATKA.ownerEcosystemMapPdf}
              download
              className="text-sm text-[var(--qf-info)] hover:text-[var(--qf-text)]"
            >
              Download PDF ↓
            </Link>
          </div>
        </Card>
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
                <div className="mb-4">
                  <IntentBadges intents={[...c.intents]} />
                </div>
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
                  <>
                    <div className="mb-4 overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-2">
                      <GratkaDiagram
                        src={extras.diagramSrc}
                        alt={extras.diagramAlt}
                        width={1200}
                        height={720}
                        className="h-auto w-full min-w-[280px]"
                      />
                    </div>
                    <div className="mt-auto space-y-2 border-t border-[var(--qf-border)] pt-4 text-sm">
                    <Link
                      href={c.detailHref}
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
                  </>
                )}
              </Card>
            );
          })}
        </div>
      </Section>

      <FieldReports />

      <SystemMetrics />

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

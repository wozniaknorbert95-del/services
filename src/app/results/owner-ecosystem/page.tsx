import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import GratkaDiagram from '@/components/ui/GratkaDiagram';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';

const FLOW_STEPS = [
  { step: '01', title: 'Entry', detail: 'flexgrafik.nl — portal + chat assistant routes visitors to the right path.' },
  { step: '02', title: 'Revenue', detail: 'zzpackage wizard — 7 steps, open pricing, calm order form or designer handoff.' },
  { step: '03', title: 'Leads', detail: 'app.flexgrafik.nl game — coupons and contacts funnel into the wizard.' },
  { step: '04', title: 'Operations', detail: 'jadzia-core — orders, automation, jadzia.db. Modules refined in agent loop.' },
  { step: '05', title: 'Execution', detail: 'Agent OS — planner → coder → tester → review. Human gate before deploy.', highlight: true },
  { step: '06', title: 'Supervision', detail: 'Flex-VCMS — scan all repos, detect conflicts, enforce SSoT. Governance layer.', highlight: true },
];

const CASE_MAP = [
  { case: '01 Inbox Killer', maps: 'Back-office — live email, HITL on every send' },
  { case: '02 Orchestrator', maps: 'Agent OS + jadzia + VCMS supervision' },
  { case: '03 Sales Funnel', maps: 'zzpackage wizard & order form pattern' },
  { case: '04 Advisory', maps: 'Client engagement layer (anonymised, in delivery)' },
];

interface EcosystemModule {
  layer: string;
  name: string;
  detail: string;
  highlight?: boolean;
}

const MODULES: EcosystemModule[] = [
  { layer: 'Governance', name: 'flexgrafik-meta', detail: 'Constitution — rules, agents, master plan' },
  { layer: 'Governance', name: 'WorkFlow', detail: 'Program office — backlog & daily ops' },
  { layer: 'Products', name: 'zzpackage', detail: 'Wizard + order form — configure or delegate' },
  { layer: 'Supervision', name: 'Flex-VCMS', detail: 'Scan · conflicts · SSoT sync · LLM gateway', highlight: true },
  { layer: 'Applications', name: 'flexgrafik.nl', detail: 'Portal + chat assistant — entry point' },
  { layer: 'Applications', name: 'app.flexgrafik.nl', detail: 'Lead magnet game → wizard' },
  { layer: 'Applications', name: 'jadzia-core', detail: 'AI backend · orders · module loop' },
  { layer: 'Execution', name: 'Agent OS', detail: 'Planner → coder → tester → review', highlight: true },
  { layer: 'Client', name: 'services.flexgrafik.nl', detail: 'Quietforge B2B — this site' },
  { layer: 'Back-office', name: 'Inbox Killer', detail: 'Live email agent — HITL on every send' },
];

export const metadata: Metadata = {
  title: 'Owner ecosystem — 8 repos, 1 system',
  description:
    'The live multi-repo stack behind Quietforge: VCMS supervision, Agent OS execution, wizard commerce, portal assistant and Inbox Killer. Process-proof architecture map.',
  openGraph: {
    title: 'Owner ecosystem — 8 repos, 1 system',
    description:
      'Governance · VCMS · jadzia · Agent OS · wizard · portal — the system the architect runs before selling automation.',
    url: 'https://services.flexgrafik.nl/results/owner-ecosystem',
    images: [
      {
        url: '/og/results-owner-ecosystem.svg',
        width: 1200,
        height: 630,
        alt: 'Owner ecosystem — 8 repos one system',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owner ecosystem — 8 repos, 1 system',
    description: 'Live stack behind the AI Systems Architect — forward internally.',
    images: ['/og/results-owner-ecosystem.svg'],
  },
};

export default function OwnerEcosystemPage() {
  return (
    <>
      <Section padding="large">
        <Link
          href={ROUTES.results}
          className="mb-6 inline-block text-sm text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)]"
        >
          ← All results
        </Link>
        <Eyebrow>Owner ecosystem · live proof</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4 max-w-3xl">
          The system behind the architect
        </h1>
        <p className="mb-2 font-mono text-sm text-[var(--qf-accent)]">
          8 repos · 1 supervised system · process proof
        </p>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Before I sell automation to SMB clients, I run it on my own business. This map shows how
          governance, commerce, AI execution and supervision connect — patterns you can get scaled to
          your operation, not a ZZP product catalog.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={GRATKA.ownerEcosystemMapSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
            Ecosystem diagram (SVG) ↓
          </Button>
          <Button href={GRATKA.ownerEcosystemMapPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            Ecosystem map (PDF) ↓
          </Button>
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Full architecture map
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          Adapted from the portfolio ecosystem diagram — Quietforge tokens, B2B framing. Forward to
          a developer, partner or accountant.
        </p>
        <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4">
          <GratkaDiagram
            src={GRATKA.ownerEcosystemMapSvg}
            alt="Full owner ecosystem architecture with governance, Flex-VCMS, applications, Agent OS, services and Inbox Killer"
            width={1200}
            height={1100}
          />
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Modules at a glance
        </h2>
        <div className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2">
          {MODULES.map((mod) => (
            <Card
              key={mod.name}
              className={mod.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)] p-5' : 'p-5'}
            >
              <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[var(--qf-info)]">
                {mod.layer}
              </p>
              <h3 className="mb-1 font-bold text-[var(--qf-text)]">{mod.name}</h3>
              <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{mod.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          How it flows
        </h2>
        <div className="grid gap-[var(--qf-sp-4)]">
          {FLOW_STEPS.map((step) => (
            <Card
              key={step.step}
              className={step.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]' : ''}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <span className="shrink-0 font-mono text-lg font-bold text-[var(--qf-accent)]">
                  {step.step}
                </span>
                <div>
                  <h3 className="mb-1 font-bold text-[var(--qf-text)]">{step.title}</h3>
                  <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{step.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Maps to case studies
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--qf-border)]">
                <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Case study
                </th>
                <th className="py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Ecosystem layer
                </th>
              </tr>
            </thead>
            <tbody>
              {CASE_MAP.map((row) => (
                <tr key={row.case} className="border-b border-[var(--qf-border)]">
                  <td className="py-3 pr-4 font-semibold text-[var(--qf-text)]">{row.case}</td>
                  <td className="py-3 text-[var(--qf-text-dim)]">{row.maps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-8 flex flex-wrap gap-4 text-sm">
          <li>
            <Link href={ROUTES.resultsInboxKiller} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]">
              Case 01 →
            </Link>
          </li>
          <li>
            <Link href={ROUTES.resultsAgentOrchestrator} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]">
              Case 02 →
            </Link>
          </li>
          <li>
            <Link href={ROUTES.resultsSalesFunnel} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]">
              Case 03 →
            </Link>
          </li>
          <li>
            <Link href={ROUTES.resultsAdvisoryModernisation} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]">
              Case 04 →
            </Link>
          </li>
        </ul>
      </Section>

      <Section background="surface" padding="large">
        <Card className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            Honest framing
          </p>
          <p className="max-w-none text-[var(--qf-text-dim)]">
            No fabricated MRR or uptime percentages. Module status varies by repo — this map shows
            architecture and process proof, not a promise that every node is flawless. VCMS target:
            conflicts: 0 on every scan.
          </p>
        </Card>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Want this level of structure?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          You rarely need the full stack on day one. Start with a paid Automation Map — we score
          which layers matter for your business first.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

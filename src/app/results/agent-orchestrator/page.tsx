import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';

const SLUG = 'agent-orchestrator';

const BEFORE_ITEMS = [
  'Orders, content and CRM scattered across spreadsheets',
  'Same questions answered in five different tools',
  'No single place for rules — everyone improvises',
  'Deploys feel risky because nothing is documented',
];

const AFTER_ITEMS = [
  'One orchestrator coordinates work across the business',
  'Agents run in fixed roles with clear contracts',
  'Single source of truth for schemas and rules',
  'Human approval before anything hits production',
];

const LAYERS = [
  {
    label: 'Directive',
    title: 'Strategist',
    detail: 'Decides what to build and why — aligned with scope, margin and guardrails.',
  },
  {
    label: 'Orchestration',
    title: 'Planner',
    detail: 'Breaks strategy into tasks and context packets. Least privilege per agent.',
  },
  {
    label: 'Execution',
    title: 'Specialist nodes',
    detail: 'Planner → coder → tester → review pipeline. One module per session.',
  },
];

const WORKFLOW_PHASES = [
  { number: '01', title: 'Map', detail: 'Find leaks, score ROI, agree first system. Deliverable: Automation Map.' },
  { number: '02', title: 'Architect', detail: 'Target diagram + spec — who does what, where data flows.' },
  { number: '03', title: 'Build', detail: 'AI workforce assembles against fixed rules in test environment.' },
  { number: '04', title: 'Verify', detail: 'Real scenarios + your sign-off. Gates built into the system.' },
  { number: '05', title: 'Hand over', detail: 'README, walkthrough, optional care. No lock-in.', highlight: true },
];

const AGENT_CARDS = [
  { role: 'Planner', scope: 'SSoT read, task list', output: 'Implementation plan' },
  { role: 'Coder', scope: 'Target module only', output: 'Diff ready for review' },
  { role: 'Tester', scope: 'Tests + logs', output: 'Pass/fail report' },
  { role: 'Review', scope: 'Human gate', output: 'Approve or block deploy' },
];

export const metadata: Metadata = {
  title: 'Case study — Multi-agent orchestrator | Quietforge',
  description:
    'How a FastAPI + LangGraph engine on a VPS coordinates a business with single source of truth, agent cards and human approval gates.',
  openGraph: {
    title: 'Case study — Multi-agent orchestrator | Quietforge',
    description:
      'Production agent engine — planner → coder → tester → review. Process-proof architecture.',
    url: 'https://services.flexgrafik.nl/results/agent-orchestrator',
    images: [
      {
        url: '/og/results-agent-orchestrator.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Multi-agent orchestrator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Multi-agent orchestrator | Quietforge',
    description: 'SSoT + agent cards + 12-step workflow. Architecture diagram on request.',
    images: ['/og/results-agent-orchestrator.svg'],
  },
};

export default function AgentOrchestratorCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  return (
    <>
      <Section padding="large">
        <Link
          href={ROUTES.results}
          className="mb-6 inline-block text-sm text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)]"
        >
          ← All results
        </Link>
        <Eyebrow>Case study {study.number} · production</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4 max-w-3xl">
          {study.title}
        </h1>
        <p className="mb-2 font-mono text-sm text-[var(--qf-accent)]">{study.meta}</p>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          {study.context} This is the engine behind a live business ecosystem — described
          generically here so you can forward the downloads without exposing client names.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={GRATKA.orchestratorArchitectureSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
            Architecture diagram (SVG) ↓
          </Button>
          <Button href={GRATKA.orchestratorAgentCardPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            Agent card sample (PDF) ↓
          </Button>
          <Button href={GRATKA.orchestratorWorkflowMapPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            Workflow map (PDF) ↓
          </Button>
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Before vs after
        </h2>
        <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-2">
          <Card className="border-[var(--qf-warn)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
              Before — spreadsheet chaos
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-warn)]">✕</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-[var(--qf-ok)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-ok)]">
              After — orchestrated system
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-ok)]">✓</span> {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Architecture — three layers
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          {study.system}
        </p>
        <div className="mb-8 overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4">
          <Image
            src={GRATKA.orchestratorArchitectureSvg}
            alt="Multi-agent orchestrator architecture: single source of truth, directive orchestration and execution layers on VPS with human approval gate"
            width={1200}
            height={800}
            className="h-auto w-full min-w-[640px]"
          />
        </div>
        <div className="grid gap-[var(--qf-sp-4)] md:grid-cols-3">
          {LAYERS.map((layer) => (
            <Card key={layer.label} className="p-5">
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                {layer.label}
              </p>
              <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {layer.title}
              </h3>
              <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{layer.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Agent cards — sample contracts
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          Each execution agent has a fixed role. No mega-agent, no scope creep — least privilege
          by design.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--qf-border)]">
                <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">Agent</th>
                <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">Scope</th>
                <th className="py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">Output</th>
              </tr>
            </thead>
            <tbody>
              {AGENT_CARDS.map((row) => (
                <tr key={row.role} className="border-b border-[var(--qf-border)]">
                  <td className="py-3 pr-4 font-semibold text-[var(--qf-text)]">{row.role}</td>
                  <td className="py-3 pr-4 text-[var(--qf-text-dim)]">{row.scope}</td>
                  <td className="py-3 text-[var(--qf-text-dim)]">{row.output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Workflow — 12 steps, 5 client phases
        </h2>
        <div className="grid gap-[var(--qf-sp-4)]">
          {WORKFLOW_PHASES.map((phase) => (
            <Card
              key={phase.number}
              className={phase.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]' : ''}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="shrink-0 font-mono text-lg font-bold text-[var(--qf-accent)]">
                  {phase.number}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                    {phase.title}
                  </h3>
                  <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{phase.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-none text-sm text-[var(--qf-text-dim)]">
          Same five phases on the{' '}
          <Link href="/#how-i-work" className="text-[var(--qf-accent)]">
            home page
          </Link>
          — this engine runs them internally on every project.
        </p>
      </Section>

      <Section background="surface" padding="large">
        <Card className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            What&apos;s real
          </p>
          <p className="mb-4 max-w-none text-[var(--qf-text)]">{study.real}</p>
          <p className="max-w-none font-mono text-sm text-[var(--qf-text-faint)]">
            Measurement: {study.measurement}
          </p>
        </Card>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Need this level of structure in your business?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. We&apos;ll identify whether orchestration is the right
          first step — or a simpler system gets you there faster.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

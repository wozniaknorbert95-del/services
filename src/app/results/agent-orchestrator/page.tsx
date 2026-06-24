import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProofScreenImage from '@/components/ui/ProofScreenImage';
import ProofScreenSlot from '@/components/ui/ProofScreenSlot';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import {
  agentOsFeatureStatus,
  agentOsNarrative,
  agentOsPublicUrls,
  agentOsVerifiedMetrics,
  screens,
  type AgentOsClaimLabel,
} from '@/content/proof';

const SLUG = 'agent-orchestrator';

const BEFORE_ITEMS = [
  'Orders, content and CRM scattered across spreadsheets',
  'Same questions answered in five different tools',
  'No single place for rules — everyone improvises',
  'Deploys feel risky because nothing is documented',
];

const AFTER_ITEMS = [
  'One orchestrator coordinates work across the business — LIVE on VPS',
  'Agents run in fixed roles with clear contracts (5-node LangGraph)',
  'Single source of truth for schemas and rules',
  'Human approval before anything hits production — no auto-deploy',
];

const WORKFLOW_PHASES = [
  { step: '01', title: 'Map', detail: 'Find leaks, score ROI, agree first system. Deliverable: Automation Map.' },
  { step: '02', title: 'Architect', detail: 'Target diagram + spec — who does what, where data flows.' },
  { step: '03', title: 'Build', detail: 'AI workforce assembles against fixed rules in test environment.' },
  { step: '04', title: 'Verify', detail: 'Real scenarios + your sign-off. Gates built into the system.' },
  { step: '05', title: 'Hand over', detail: 'README, walkthrough, optional care. No lock-in.', highlight: true },
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
    detail: 'Planner → coder → tester → reviewer → summarizer. One module per session.',
  },
];

const AGENT_CARDS = [
  { role: 'Planner', scope: 'SSoT read, task list', output: 'Implementation plan' },
  { role: 'Coder', scope: 'Target module only', output: 'Diff ready for review' },
  { role: 'Tester', scope: 'Tests + logs', output: 'Pass/fail report' },
  { role: 'Reviewer', scope: 'Human gate (HITL)', output: 'Approve or block' },
  { role: 'Summarizer', scope: 'Handoff + session closure', output: 'Handoff markdown on disk' },
];

function agentOsStatusClass(status: AgentOsClaimLabel): string {
  if (status === 'LIVE') return 'text-emerald-500';
  if (status === 'LOCAL-ONLY') return 'text-amber-500';
  return 'text-[var(--qf-text-faint)]';
}

export const metadata: Metadata = {
  title: 'Case study — Multi-agent orchestrator',
  description:
    'How a hybrid FastAPI + LangGraph control plane on a VPS coordinates multi-repo work with agent cards, Langfuse observability and human approval gates.',
  openGraph: {
    title: 'Case study — Multi-agent orchestrator',
    description:
      'Production agent engine — planner → coder → tester → reviewer → summarizer. Hybrid VPS + local runner. Process-proof architecture.',
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
    title: 'Case study — Multi-agent orchestrator',
    description: 'SSoT + 5-node LangGraph + HITL gates. Architecture diagram and live Mission Control proof.',
    images: ['/og/results-agent-orchestrator.svg'],
  },
};

export default function AgentOrchestratorCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  const downloadButtons = (
    <>
      <Button href={GRATKA.orchestratorArchitectureSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
        Architecture diagram (SVG) ↓
      </Button>
      <Button href={GRATKA.orchestratorAgentCardPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        Agent card sample (PDF) ↓
      </Button>
      <Button href={GRATKA.orchestratorWorkflowMapPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        Workflow map (PDF) ↓
      </Button>
      <Button href={ROUTES.resultsOwnerEcosystem} variant="ghost">
        Full owner ecosystem map →
      </Button>
    </>
  );

  return (
    <CaseStudyLayout
      study={study}
      problemBefore={BEFORE_ITEMS}
      problemAfter={AFTER_ITEMS}
      architectureDiagramSvgUrl={GRATKA.orchestratorArchitectureSvg}
      architectureDiagramAlt="Multi-agent orchestrator architecture: single source of truth, directive orchestration and execution layers on VPS with human approval gate"
      architectureDescription={
        <>
          <p className="mb-4">{study.system}</p>
          <p className="mb-4 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)] italic">
            {agentOsNarrative.framing}
          </p>
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
        </>
      }
      buildModules={WORKFLOW_PHASES}
      buildDescription={
        <p>
          Workflow — 12 steps, 5 client phases. Same five phases on the{' '}
          <Link href="/#how-i-work" className="text-[var(--qf-accent)]">
            home page
          </Link>
          — this engine runs them internally on every project.
        </p>
      }
      stack={['FastAPI', 'LangGraph', 'PostgreSQL', 'Mission Control', 'EU VPS']}
      manifestKey="agentOs"
      videoKey="agentOs"
      screenKey="agentCards"
      downloadButtons={downloadButtons}
    >
      {screens.workflowMap.ready && screens.workflowMap.src && (
        <>
          <h2 className="mt-8 text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
            Workflow map
          </h2>
          <p className="mb-6 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
            Planner → coder → tester → review — each step has a contract before anything ships.
          </p>
          <Card className="mb-10 max-w-3xl overflow-hidden p-0">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--qf-bg-inset)]">
              <ProofScreenImage
                src={screens.workflowMap.src}
                alt={screens.workflowMap.alt}
                width={960}
                height={600}
              />
            </div>
            <p className="p-4 font-mono text-xs text-[var(--qf-accent)]">
              {screens.workflowMap.caption}
            </p>
          </Card>
        </>
      )}
      <h2 className="mt-8 text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
        What is LIVE today
      </h2>
      <p className="mb-6 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
        Guided agency demo — not a public SaaS. Hybrid control plane on VPS; code execution stays on a
        supervised local runner.
      </p>
      <ul className="mb-6 flex flex-wrap gap-2">
        {Object.values(agentOsFeatureStatus).map((f) => (
          <li
            key={f.label}
            className="rounded-full border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--qf-text-dim)]"
          >
            {f.label}{' '}
            <span className={agentOsStatusClass(f.status)}>{f.status}</span>
          </li>
        ))}
      </ul>
      <div className="mb-10 flex flex-wrap gap-3">
        {agentOsVerifiedMetrics.map((m) => (
          <span
            key={m.label}
            className="rounded-full border border-[var(--qf-border)] bg-[var(--qf-bg)] px-4 py-1.5 font-mono text-sm text-[var(--qf-text-dim)]"
          >
            {m.label}: <span className="text-[var(--qf-text)]">{m.value}</span>
          </span>
        ))}
      </div>
      <h2 className="mt-8 text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
        Mission Control
      </h2>
      <p className="mb-6 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
        Tasks, queue, history and cost tabs — observability layer for the orchestrator. Login required
        for live UI; screenshot from prod smoke.
      </p>
      <div className="mb-6 max-w-3xl">
        <ProofScreenSlot screen={screens.adminDashboard} screenKey="adminDashboard" />
      </div>
      <div className="mb-10 flex flex-wrap gap-4 text-sm">
        <a
          href={agentOsPublicUrls.missionControl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
        >
          Mission Control (os.flexgrafik.nl) ↗
        </a>
        <a
          href={agentOsPublicUrls.apiHealth}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
        >
          API health ↗
        </a>
        <Link href={ROUTES.trust} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]">
          Trust & observability page →
        </Link>
      </div>
      <h2 className="mt-8 text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
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
    </CaseStudyLayout>
  );
}

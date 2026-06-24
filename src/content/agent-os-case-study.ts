// Agent OS case study copy — sync with agent-os/docs/portfolio/AGENT-OS-PORTFOLIO-PACK.yaml v1.1

export const AGENT_OS_SLUG = 'agent-orchestrator' as const;

export const agentOsDisplayName = 'Agent OS — supervised agent workforce';

export const agentOsCaseMeta = {
  title: 'Case study — Agent OS',
  description:
    'How a hybrid FastAPI + LangGraph control plane on a VPS coordinates multi-repo work with agent cards, Langfuse observability and human approval gates.',
  openGraphTitle: 'Case study — Agent OS',
  openGraphDescription:
    'Agent OS 2.0 — Planner → Coder → Tester → Reviewer → Summarizer. Hybrid VPS + local runner. Process-proof architecture.',
  twitterDescription:
    '5-node LangGraph + HITL gates. Architecture diagram and live Mission Control proof.',
  ogAlt: 'Case study — Agent OS',
} as const;

export const agentOsBeforeItems = [
  'Orders, content and CRM scattered across spreadsheets',
  'Same questions answered in five different tools',
  'No single place for rules — everyone improvises',
  'Deploys feel risky because nothing is documented',
] as const;

export const agentOsAfterItems = [
  'Orchestration and HITL run 24/7 on VPS — queue, approve, reject, cancel',
  'Agents run in fixed roles with clear contracts (5-node LangGraph)',
  'Code and git work on a supervised local runner — not 24/7 without your PC',
  'Human approval before anything hits production — no auto-deploy',
] as const;

export const agentOsSupervisionNote =
  'VCMS governs repos and SSoT — outside the LangGraph pipeline, not a graph node.';

export type AgentOsPipelineNode = {
  role: string;
  detail: string;
  scope: string;
  output: string;
};

export const agentOsPipelineNodes: readonly AgentOsPipelineNode[] = [
  {
    role: 'Planner',
    detail: 'Reads SSoT, breaks work into tasks and context packets.',
    scope: 'SSoT read, task list',
    output: 'Implementation plan',
  },
  {
    role: 'Coder',
    detail: 'Implements one module per session — least privilege.',
    scope: 'Target module only',
    output: 'Diff ready for review',
  },
  {
    role: 'Tester',
    detail: 'Runs tests and collects logs before review.',
    scope: 'Tests + logs',
    output: 'Pass/fail report',
  },
  {
    role: 'Reviewer',
    detail: 'Human gate — LangGraph pauses at REVIEWING.',
    scope: 'Human gate (HITL)',
    output: 'Approve or block',
  },
  {
    role: 'Summarizer',
    detail: 'Closes the session with handoff markdown on disk.',
    scope: 'Handoff + session closure',
    output: 'Handoff markdown on disk',
  },
];

export const agentOsDeliveryPhases = [
  {
    step: '01',
    title: 'Map',
    detail: 'Find leaks, score ROI, agree first system. Deliverable: Automation Map.',
  },
  {
    step: '02',
    title: 'Architect',
    detail: 'Target diagram + spec — who does what, where data flows.',
  },
  {
    step: '03',
    title: 'Build',
    detail: 'AI workforce assembles against fixed rules in test environment.',
  },
  {
    step: '04',
    title: 'Verify',
    detail: 'Real scenarios + your sign-off. Gates built into the system.',
  },
  {
    step: '05',
    title: 'Hand over',
    detail: 'README, walkthrough, optional care. No lock-in.',
    highlight: true as const,
  },
] as const;

export const agentOsStack = [
  'FastAPI',
  'LangGraph',
  'PostgreSQL',
  'Mission Control',
  'EU VPS',
] as const;

export const agentOsArchitectureAlt =
  'Agent OS 2.0 hybrid architecture: VPS control plane, 5-node LangGraph pipeline, local runner and human approval gate';

export const agentOsWorkflowMapIntro =
  'Planner → Coder → Tester → Reviewer → Summarizer — each step has a contract before anything ships.';

export const agentOsPipelineLine =
  'Planner → Coder → Tester → Reviewer → Summarizer';

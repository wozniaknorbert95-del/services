// ============================================================================
// JADZIA COI CASE STUDY — copy for /results/jadzia-coi/
// Source: flexgrafik-meta/docs/core/modules/module-jadzia-core.md
// ============================================================================

export const JADZIA_COI_SLUG = 'jadzia-coi' as const;

export const jadziaCoiDisplayName = 'Jadzia COI — Operations Command Layer';

export const jadziaCoiCaseMeta = {
  title: 'Case study — Jadzia COI',
  description:
    'How an Operations Command Layer combines a Commander cockpit, operational spine and weekly owner brief — with human approval for consequential actions.',
  openGraphTitle: 'Case study — Jadzia COI',
  openGraphDescription:
    'Operations Command Layer — LIVE ops spine, Marketing Brain shadow (F0–F3), Commander cockpit, weekly brief and HITL publish.',
  twitterDescription:
    'Jadzia COI — ops cockpit + Marketing Brain shadow with human approval before Act.',
  ogAlt: 'Case study — Jadzia COI',
} as const;

export const jadziaCoiBeforeItems = [
  'Orders in WooCommerce, leads in the game, chat in the wizard — three silos',
  'WordPress edits via FTP and memory — no rollback story',
  'Sales questions answered manually across portal and wizard',
  'No weekly synthesis — strategy lived in scattered notes and inbox',
] as const;

export const jadziaCoiAfterItems = [
  'One operational spine for orders, leads and analytics (INT-002 and INT-009 LIVE)',
  'Commander cockpit for owner visibility, approval queues and next actions',
  'Weekly owner brief prepared as an HITL draft for decision support',
  'Facebook content flow: prepare → approve → publish (INT-011 LIVE)',
] as const;

export const jadziaCoiArchitectureAlt =
  'Jadzia Operations Command Layer: Commander cockpit and operational spine connecting orders, leads, analytics, content approvals and owner briefs';

export const jadziaCoiLoopIntro =
  'Jadzia is the operations layer in the Living Operating System: signals enter the spine, the Commander cockpit proposes the next move, and a human approves consequential action. Marketing Brain runs in shadow — Act and auto ad spend are not offered.';

export type CoiLoopNode = {
  phase: string;
  title: string;
  detail: string;
};

export const jadziaCoiLoopNodes: readonly CoiLoopNode[] = [
  {
    phase: 'Sense',
    title: 'Signals in',
    detail:
      'Orders, leads, margin facts and marketing ingest land in Data Truth — not raw vanity dashboards.',
  },
  {
    phase: 'Think',
    title: 'Commander review',
    detail:
      'Commander and Marketing Brain propose priorities and a weekly brief — propose only, never auto-decide.',
  },
  {
    phase: 'Act',
    title: 'Bounded execution',
    detail:
      'Order ingest (INT-002) and supervised content publish (INT-011) run inside permissions. External Act stays blocked in shadow.',
  },
  {
    phase: 'Guard',
    title: 'HITL + breakers',
    detail:
      'Telegram approve/deny, circuit breakers (CB_SHADOW) and rollback — Dowódca owns every consequential action.',
  },
];

/** Interactive Proof workflow — SSoT for JadziaWorkflowDiagram (not Architecture cards). */
export const jadziaCoiInteractiveWorkflow = {
  eyebrow: '// Workflow',
  title: 'How Jadzia moves work — with you at the gate',
  honestyLine:
    'Interactive workflow — screen recording when the cockpit is final. Humans approve every consequential action.',
  defaultPhaseId: 'think',
  defaultPipelineId: 'brief',
  phases: [
    {
      id: 'sense',
      phase: 'Sense',
      title: 'Signals in',
      detail:
        'Wizard checkouts, leads, GA4 snapshots and marketing facts feed Data Truth. The cockpit reads facts — not noisy raw APIs.',
      surface: 'Commander · Analityka (Data Health)',
    },
    {
      id: 'think',
      phase: 'Think',
      title: 'Commander review',
      detail:
        'Priorities and Marketing Brain shadow proposals surface for review. The system suggests — it does not decide alone.',
      surface: 'Commander · Start',
    },
    {
      id: 'act',
      phase: 'Act',
      title: 'Bounded execution',
      detail:
        'Approved paths run: order ledger sync and supervised content publish. Ads create and autonomous Act stay off until Commander GO.',
      surface: 'Commander · Marketing / Telegram',
    },
    {
      id: 'guard',
      phase: 'Guard',
      title: 'HITL + breakers',
      detail:
        'Telegram HITL, CB_SHADOW and ecosystem breakers pause risky scale when data is stale or the stack is degraded.',
      surface: 'Telegram · circuit breakers',
    },
  ],
  pipelines: [
    {
      id: 'brief',
      title: 'Weekly owner brief',
      steps: [
        'Orders, leads and analytics enter the operational spine',
        'Commander prepares a weekly synthesis draft',
        'Owner reviews, edits or rejects in HITL',
        'Approved notes become bounded follow-ups — not silent automations',
      ],
    },
    {
      id: 'content',
      title: 'Content publish',
      steps: [
        'Post is prepared from an approved operational context',
        'Owner reviews text, photo or video in the Marketing queue',
        'Approval gates the publish action',
        'Facebook send only after HITL (INT-011 LIVE)',
      ],
    },
    {
      id: 'marketing-brain-shadow',
      title: 'Marketing Brain (shadow)',
      steps: [
        'Data Truth Layer refreshes margin and engagement facts (F0)',
        'Decision engine logs a shadow proposal — no side effects (F1)',
        'Telegram /mb_eval or HITL scores the proposal',
        'Act and Meta Ads create stay blocked until explicit Commander GO',
      ],
    },
  ],
} as const;

/** @deprecated Prefer jadziaCoiInteractiveWorkflow.pipelines — kept for any legacy imports */
export const jadziaCoiWorkflowPipelines = jadziaCoiInteractiveWorkflow.pipelines.filter(
  (p) => p.id === 'brief' || p.id === 'content'
);

export const jadziaCoiIntegrations = [
  {
    system: 'zzpackage Wizard',
    direction: 'In / Out',
    detail: 'Order webhook → operational spine LIVE (INT-002)',
  },
  { system: 'app.flexgrafik.nl', direction: 'In', detail: 'Lead sync · coupon attribution' },
  { system: 'flexgrafik.nl', direction: 'In', detail: 'Generic supervised chat LIVE · qualification UX PARTIAL (INT-012 API LIVE)' },
  { system: 'Facebook', direction: 'Out', detail: 'Supervised text, photo and video publishing LIVE (INT-011)' },
  { system: 'Agent OS', direction: 'Sibling', detail: 'Engineering pipeline — Jadzia does not commit product code' },
] as const;

export type JadziaCoiMetricStatus = 'LIVE' | 'PARTIAL' | 'PLANNED' | 'INFO';

export type JadziaCoiVerifiedMetric = {
  label: string;
  value: string;
  status?: JadziaCoiMetricStatus;
};

export const jadziaCoiVerifiedMetrics: readonly JadziaCoiVerifiedMetric[] = [
  { label: 'Operational spine', value: '~93% LIVE', status: 'LIVE' },
  { label: 'Marketing Brain', value: 'Shadow F0–F3 LIVE · HITL', status: 'LIVE' },
  { label: 'MB Act / Ads create', value: 'Blocked (shadow)', status: 'PARTIAL' },
  { label: 'API', value: 'FastAPI :8000 EU VPS', status: 'INFO' },
  { label: 'Commander cockpit', value: 'LIVE', status: 'LIVE' },
  { label: 'Order sync', value: 'LIVE (INT-002)', status: 'LIVE' },
  { label: 'GA4 snapshot', value: 'LIVE (INT-009)', status: 'LIVE' },
  { label: 'Weekly owner brief', value: 'LIVE (HITL drafts)', status: 'LIVE' },
  { label: 'Content publish', value: 'LIVE (INT-011, HITL)', status: 'LIVE' },
  { label: 'Portal qualification', value: 'PARTIAL (INT-012 API LIVE)', status: 'PARTIAL' },
] as const;

export function jadziaCoiMetricStatusClass(status: JadziaCoiMetricStatus | undefined): string {
  if (status === 'LIVE') return 'text-emerald-500';
  if (status === 'PARTIAL' || status === 'PLANNED') return 'text-amber-500';
  return 'text-[var(--qf-text)]';
}

export const jadziaCoiStack = [
  'Python 3.11 · FastAPI · Uvicorn',
  'Claude Haiku/Sonnet · Gemini fallback',
  'jadzia.db · SQLite operational store',
  'Paramiko SSH · Telegram webhook',
  'JWT worker queue · systemd deploy',
] as const;

export const jadziaCoiSupervisionNote =
  'Agent OS handles the separate engineering execution workflow. Jadzia handles business operations: the Commander cockpit, orders, leads, analytics, weekly briefs, supervised content publishing, and Marketing Brain in shadow (propose only — no Act, no Meta Ads create). It does not run on LangGraph, does not commit product code, and does not act as a fully autonomous business system. VCMS governs both from outside the runtime.';

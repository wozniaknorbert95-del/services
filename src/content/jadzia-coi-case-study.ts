// ============================================================================
// JADZIA COI CASE STUDY — copy for /results/jadzia-coi/
// Source: flexgrafik-meta/docs/core/modules/module-jadzia-core.md
// ============================================================================

export const JADZIA_COI_SLUG = 'jadzia-coi' as const;

export const jadziaCoiDisplayName = 'Jadzia COI — Chief Operating Intelligence';

export const jadziaCoiCaseMeta = {
  title: 'Case study — Jadzia COI',
  description:
    'How a FastAPI Chief Operating Intelligence layer unifies leads, orders, analytics and sales chat — with Telegram HITL and jadzia.db as the operational brain. WC order webhook INT-002 LIVE (prod order #3149).',
  openGraphTitle: 'Case study — Jadzia COI',
  openGraphDescription:
    'Chief Operating Intelligence for a live 8-repo stack — orders, leads, GA4 snapshot, content calendar Phase B LIVE · INT-002 E2E verified.',
  twitterDescription:
    'Jadzia COI — business brain with HITL gates. Phase A+B spine LIVE: orders, leads, analytics, content suggestions from orders.',
  ogAlt: 'Case study — Jadzia COI',
} as const;

export const jadziaCoiBeforeItems = [
  'Orders in WooCommerce, leads in the game, chat in the wizard — three silos',
  'WordPress edits via FTP and memory — no rollback story',
  'Sales questions answered manually across portal and wizard',
  'No weekly synthesis — strategy lived in scattered notes and inbox',
] as const;

export const jadziaCoiAfterItems = [
  'One COI layer — jadzia.db holds orders, leads and operational state (INT-002 LIVE)',
  'WP SSH agent: diff → HITL approve → write → rollback on Telegram',
  'customer_agent on wizard and portal — scored leads, hot alerts to Telegram',
  'Phase B: order → content calendar case-study suggestions (order #3149 E2E)',
] as const;

export const jadziaCoiArchitectureAlt =
  'Jadzia COI architecture: central jadzia.db hub connecting wizard checkouts, game leads, portal chat, WordPress SSH agent and Telegram HITL';

export const jadziaCoiLoopIntro =
  'Jadzia is the Think layer in the Living Operating System — Sense signals enter, COI proposes, humans approve, then Act executes within bounded permissions.';

export type CoiLoopNode = {
  phase: string;
  title: string;
  detail: string;
};

export const jadziaCoiLoopNodes: readonly CoiLoopNode[] = [
  {
    phase: 'Sense',
    title: 'Signals in',
    detail: 'Wizard checkouts, game registrations, portal visits and operational events feed the COI loop.',
  },
  {
    phase: 'Think',
    title: 'Jadzia Strategist',
    detail: 'Interpret context, score leads, plan WP changes and synthesise the weekly brief — propose, never auto-ship.',
  },
  {
    phase: 'Act',
    title: 'Bounded execution',
    detail: 'SSH writes, chat replies, order ingestion and worker tasks — scoped permissions. WC webhook INT-002 LIVE.',
  },
  {
    phase: 'Guard',
    title: 'HITL + Kaizen',
    detail: 'Telegram approval, rollback path and Kaizen guard — Dowódca approves every consequential action.',
  },
];

export const jadziaCoiWorkflowPipelines = [
  {
    id: 'wp',
    title: 'WordPress SSH pipeline',
    steps: [
      'Task arrives via Telegram or worker queue',
      'Jadzia routes intent and generates file diff',
      'HITL approval — edit, approve or reject',
      'Paramiko SSH write to theme · rollback on failure',
    ],
  },
  {
    id: 'widget',
    title: 'Sales chat widget',
    steps: [
      'Visitor opens chat on wizard or portal',
      'POST /api/v1/widget/chat → Jadzia COI',
      'Claude Haiku reply + lead scoring',
      'Hot lead alert → Telegram · session TTL cache',
    ],
  },
] as const;

export const jadziaCoiIntegrations = [
  {
    system: 'zzpackage Wizard',
    direction: 'In / Out',
    detail: 'Widget chat LIVE · order webhook → jadzia.db LIVE (INT-002)',
  },
  { system: 'app.flexgrafik.nl', direction: 'In', detail: 'Lead sync · coupon attribution' },
  { system: 'flexgrafik.nl', direction: 'In', detail: 'Shared customer_agent chat endpoint' },
  { system: 'Telegram', direction: 'In / Out', detail: 'Ops commands · HITL · hot lead alerts' },
  { system: 'Agent OS', direction: 'Sibling', detail: 'Engineering pipeline — Jadzia does not commit product code' },
] as const;

export type JadziaCoiMetricStatus = 'LIVE' | 'PLANNED' | 'INFO';

export type JadziaCoiVerifiedMetric = {
  label: string;
  value: string;
  status?: JadziaCoiMetricStatus;
};

export const jadziaCoiVerifiedMetrics: readonly JadziaCoiVerifiedMetric[] = [
  { label: 'API', value: 'FastAPI :8000 EU VPS', status: 'INFO' },
  { label: 'Widget endpoint', value: 'LIVE (INT-001)', status: 'LIVE' },
  { label: 'Order sync', value: 'LIVE (INT-002, order #3149)', status: 'LIVE' },
  { label: 'GA4 snapshot', value: 'LIVE (INT-009)', status: 'LIVE' },
  { label: 'Content calendar', value: 'LIVE (Phase B)', status: 'LIVE' },
  { label: 'WP SSH agent', value: 'LIVE', status: 'LIVE' },
  { label: 'Worker HITL', value: 'LIVE', status: 'LIVE' },
] as const;

export function jadziaCoiMetricStatusClass(status: JadziaCoiMetricStatus | undefined): string {
  if (status === 'LIVE') return 'text-emerald-500';
  if (status === 'PLANNED') return 'text-amber-500';
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
  'Agent OS handles code commits across repos. Jadzia COI handles business operations — orders, leads, analytics, content calendar, WP SSH, sales chat — not the engineering task queue. WC order webhook INT-002 LIVE on EU VPS. VCMS governs both from outside the runtime.';

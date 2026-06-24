// ============================================================================
// JADZIA COI CASE STUDY — copy for /results/jadzia-coi/
// Source: flexgrafik-meta/docs/core/modules/module-jadzia-core.md
// ============================================================================

export const JADZIA_COI_SLUG = 'jadzia-coi' as const;

export const jadziaCoiDisplayName = 'Jadzia COI — Chief Operating Intelligence';

export const jadziaCoiCaseMeta = {
  title: 'Case study — Jadzia COI',
  description:
    'How a FastAPI Chief Operating Intelligence layer unifies orders, leads, WordPress operations and sales chat — with Telegram HITL and jadzia.db as the operational brain.',
  openGraphTitle: 'Case study — Jadzia COI',
  openGraphDescription:
    'Chief Operating Intelligence for a live 8-repo stack — orders, leads, analytics, WP SSH agent and wizard chat in one governed loop.',
  twitterDescription:
    'Jadzia COI — business brain with HITL gates. Architecture diagram and live integration proof.',
  ogAlt: 'Case study — Jadzia COI',
} as const;

export const jadziaCoiBeforeItems = [
  'Orders in WooCommerce, leads in the game, chat in the wizard — three silos',
  'WordPress edits via FTP and memory — no rollback story',
  'Sales questions answered manually across portal and wizard',
  'No weekly synthesis — strategy lived in scattered notes and inbox',
] as const;

export const jadziaCoiAfterItems = [
  'One COI layer — jadzia.db holds orders, leads and operational state',
  'WP SSH agent: diff → HITL approve → write → rollback on Telegram',
  'customer_agent on wizard and portal — scored leads, hot alerts to Telegram',
  'Worker queue with JWT tasks, cost tracking and weekly strategy brief',
] as const;

export const jadziaCoiArchitectureAlt =
  'Jadzia COI architecture: central jadzia.db hub connecting wizard orders, game leads, portal chat, WordPress SSH agent and Telegram HITL';

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
    detail: 'SSH writes, chat replies, order state updates and worker tasks — scoped permissions only.',
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
  { system: 'zzpackage Wizard', direction: 'In / Out', detail: 'Widget chat · order webhook → jadzia.db' },
  { system: 'app.flexgrafik.nl', direction: 'In', detail: 'Lead sync · coupon attribution' },
  { system: 'flexgrafik.nl', direction: 'In', detail: 'Shared customer_agent chat endpoint' },
  { system: 'Telegram', direction: 'In / Out', detail: 'Ops commands · HITL · hot lead alerts' },
  { system: 'Agent OS', direction: 'Sibling', detail: 'Engineering pipeline — Jadzia does not commit product code' },
] as const;

export const jadziaCoiVerifiedMetrics = [
  { label: 'API', value: 'FastAPI :8000 EU VPS' },
  { label: 'Widget endpoint', value: 'LIVE' },
  { label: 'WP SSH agent', value: 'LIVE' },
  { label: 'Worker HITL', value: 'LIVE' },
] as const;

export const jadziaCoiStack = [
  'Python 3.11 · FastAPI · Uvicorn',
  'Claude Haiku/Sonnet · Gemini fallback',
  'jadzia.db · SQLite operational store',
  'Paramiko SSH · Telegram webhook',
  'JWT worker queue · systemd deploy',
] as const;

export const jadziaCoiSupervisionNote =
  'Agent OS handles code commits across repos. Jadzia COI handles business operations — orders, leads, chat and WP. VCMS governs both from outside the runtime.';

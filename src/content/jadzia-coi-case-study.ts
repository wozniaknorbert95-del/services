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
  'Jadzia is the operations layer in the Living Operating System: signals enter the spine, the Commander cockpit prepares a decision, and a human approves consequential action. It is not a fully autonomous COI.';

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
    title: 'Commander review',
    detail: 'Turn operational context into approval-ready actions and a weekly owner brief — propose, never auto-act.',
  },
  {
    phase: 'Act',
    title: 'Bounded execution',
    detail: 'Order ingestion and supervised content publishing run within bounded permissions. INT-002 and INT-011 are LIVE.',
  },
  {
    phase: 'Guard',
    title: 'HITL + Kaizen',
    detail: 'Telegram approval, rollback path and Kaizen guard — Dowódca approves every consequential action.',
  },
];

export const jadziaCoiWorkflowPipelines = [
  {
    id: 'brief',
    title: 'Weekly owner brief',
    steps: [
      'Orders, leads and analytics enter the operational spine',
      'Commander cockpit prepares the weekly operational synthesis',
      'Owner reviews, edits or rejects the HITL draft',
      'Approved decisions become bounded follow-up actions',
    ],
  },
  {
    id: 'content',
    title: 'Supervised content publishing',
    steps: [
      'Content is prepared from an approved operational context',
      'Owner reviews the text, photo or video post',
      'Approval gates the publishing action',
      'Facebook content is published only after HITL approval (INT-011 LIVE)',
    ],
  },
] as const;

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

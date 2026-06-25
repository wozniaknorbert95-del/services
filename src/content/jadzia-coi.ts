// ============================================================================
// JADZIA COI — portfolio presentation (governed operating intelligence).
// Source: flexgrafik-meta/docs/core/modules/module-jadzia-core.md
// Portfolio framing: full COI layer — Sense → Think → Act for the FlexGrafik stack.
// ============================================================================

import { ROUTES } from '@/lib/constants';

export const JADZIA_COI_ANCHOR = 'jadzia-coi';

export const JADZIA_COI_ROUTE = ROUTES.resultsJadziaCoi;

export const JADZIA_COI = {
  name: 'Jadzia COI',
  fullName: 'Chief Operating Intelligence',
  tagline: 'The business brain — not a chatbot.',
  summary:
    'Jadzia is the Chief Operating Intelligence layer for FlexGrafik: leads, analytics, WordPress operations and sales chat in one governed loop — with human approval on every consequential action. WC order sync to jadzia.db: PLANNED.',
  oneLiner:
    'Chief Operating Intelligence for the whole stack — leads, analytics, WP automation and wizard chat LIVE under HITL gates · order ingestion PLANNED.',
} as const;

export type JadziaCoiCapabilityStatus = 'LIVE' | 'PARTIAL' | 'PLANNED';

export type JadziaCoiCapability = {
  id: string;
  title: string;
  detail: string;
  status: JadziaCoiCapabilityStatus;
};

function capabilityStatusClass(status: JadziaCoiCapabilityStatus): string {
  if (status === 'LIVE') return 'text-emerald-500';
  if (status === 'PARTIAL') return 'text-amber-500';
  return 'text-[var(--qf-text-faint)]';
}

export { capabilityStatusClass as jadziaCoiCapabilityStatusClass };

/** COI capability pillars — portfolio presentation */
export const JADZIA_COI_CAPABILITIES: readonly JadziaCoiCapability[] = [
  {
    id: 'orders',
    title: 'Order intelligence (planned)',
    detail:
      'Planned: WooCommerce order webhook → jadzia.db operational state and status sync for production fulfilment. Checkout on zzpackage is LIVE separately.',
    status: 'PLANNED',
  },
  {
    id: 'leads',
    title: 'Lead unification',
    detail: 'Game, wizard and portal leads in one operational store — scored, attributed, routed to the right next step.',
    status: 'LIVE',
  },
  {
    id: 'chat',
    title: 'Sales chat widget',
    detail: 'customer_agent on wizard and portal — Haiku-powered replies, hot-lead Telegram alerts, session TTL.',
    status: 'LIVE',
  },
  {
    id: 'wp',
    title: 'WordPress SSH agent',
    detail: 'Supervised theme edits via Paramiko — diff, HITL approve, write, rollback on Telegram or worker queue.',
    status: 'LIVE',
  },
  {
    id: 'worker',
    title: 'Worker queue + HITL',
    detail: 'JWT worker tasks, dashboard metrics, token/cost tracking — nothing ships without Dowódca approval.',
    status: 'LIVE',
  },
  {
    id: 'strategy',
    title: 'Weekly strategy brief',
    detail: 'COI synthesis across repos — Kaizen guard filters AI proposals before they reach your inbox.',
    status: 'LIVE',
  },
] as const;

export const JADZIA_COI_STACK = {
  api: 'FastAPI · Uvicorn · EU VPS :8000',
  llm: 'Claude Haiku/Sonnet · Gemini fallback',
  ops: 'Telegram webhook · SSH rollback · systemd',
  data: 'jadzia.db · agent state · session cache',
} as const;

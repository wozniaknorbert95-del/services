// ============================================================================
// JADZIA COI — portfolio presentation (governed operating intelligence).
// Source: flexgrafik-meta/docs/core/modules/module-jadzia-core.md
// Portfolio framing: full COI layer — Sense → Think → Act for the FlexGrafik stack.
// ============================================================================

import { ROUTES } from '@/lib/constants';

export const JADZIA_COI_ANCHOR = 'jadzia-coi';

export const JADZIA_COI_ROUTE = `${ROUTES.resultsOwnerEcosystem}#${JADZIA_COI_ANCHOR}`;

export const JADZIA_COI = {
  name: 'Jadzia COI',
  fullName: 'Chief Operating Intelligence',
  tagline: 'The business brain — not a chatbot.',
  summary:
    'Jadzia is the Chief Operating Intelligence layer for FlexGrafik: orders, leads, analytics, WordPress operations and sales chat in one governed loop — with human approval on every consequential action.',
  oneLiner:
    'Chief Operating Intelligence for the whole stack — orders, leads, analytics, WP automation and wizard chat unified under HITL gates.',
} as const;

/** COI capability pillars — portfolio presentation */
export const JADZIA_COI_CAPABILITIES: readonly {
  id: string;
  title: string;
  detail: string;
}[] = [
  {
    id: 'orders',
    title: 'Order intelligence',
    detail: 'WooCommerce order ingestion, operational state in jadzia.db, status sync for production fulfilment.',
  },
  {
    id: 'leads',
    title: 'Lead unification',
    detail: 'Game, wizard and portal leads in one operational store — scored, attributed, routed to the right next step.',
  },
  {
    id: 'chat',
    title: 'Sales chat widget',
    detail: 'customer_agent on wizard and portal — Haiku-powered replies, hot-lead Telegram alerts, session TTL.',
  },
  {
    id: 'wp',
    title: 'WordPress SSH agent',
    detail: 'Supervised theme edits via Paramiko — diff, HITL approve, write, rollback on Telegram or worker queue.',
  },
  {
    id: 'worker',
    title: 'Worker queue + HITL',
    detail: 'JWT worker tasks, dashboard metrics, token/cost tracking — nothing ships without Dowódca approval.',
  },
  {
    id: 'strategy',
    title: 'Weekly strategy brief',
    detail: 'COI synthesis across repos — Kaizen guard filters AI proposals before they reach your inbox.',
  },
] as const;

export const JADZIA_COI_STACK = {
  api: 'FastAPI · Uvicorn · EU VPS :8000',
  llm: 'Claude Haiku/Sonnet · Gemini fallback',
  ops: 'Telegram webhook · SSH rollback · systemd',
  data: 'jadzia.db · agent state · session cache',
} as const;

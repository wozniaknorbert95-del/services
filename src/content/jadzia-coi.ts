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
    'Jadzia is the Chief Operating Intelligence layer for FlexGrafik: orders, leads, analytics, WordPress operations and sales chat in one governed loop — with human approval on every consequential action. WC order webhook INT-002 LIVE (E2E verified).',
  oneLiner:
    'Chief Operating Intelligence for the whole stack — Phase A+B LIVE: orders INT-002, leads, GA4 snapshot, content calendar, WP automation and wizard chat under HITL gates.',
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
    title: 'Order intelligence',
    detail:
      'WooCommerce order webhook → jadzia.db operational state and status sync (INT-002 LIVE, prod order #3149 E2E). Checkout on zzpackage is LIVE separately.',
    status: 'LIVE',
  },
  {
    id: 'leads',
    title: 'Lead unification',
    detail: 'Game, wizard and portal leads in one operational store — scored, attributed, routed to the right next step.',
    status: 'LIVE',
  },
  {
    id: 'analytics',
    title: 'GA4 snapshot',
    detail: 'Quietforge property analytics pull into COI loop for weekly ops review (INT-009 LIVE).',
    status: 'LIVE',
  },
  {
    id: 'content',
    title: 'Content calendar (Phase B)',
    detail: 'Order → case-study content suggestions in operational calendar — verified E2E on prod order #3149.',
    status: 'LIVE',
  },
  {
    id: 'chat',
    title: 'Sales chat widget',
    detail: 'customer_agent on wizard and portal — Haiku-powered replies, hot-lead Telegram alerts, session TTL (INT-001 LIVE).',
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
    id: 'procurement',
    title: 'Procurement Brain (Phase C)',
    detail: 'Supplier and print-production intelligence layer — on the roadmap after order spine is stable.',
    status: 'PLANNED',
  },
] as const;

export const JADZIA_COI_STACK = {
  api: 'FastAPI · Uvicorn · EU VPS :8000',
  llm: 'Claude Haiku/Sonnet · Gemini fallback',
  ops: 'Telegram webhook · SSH rollback · systemd',
  data: 'jadzia.db · agent state · session cache',
} as const;

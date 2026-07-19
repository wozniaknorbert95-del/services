// ============================================================================
// JADZIA COI — portfolio presentation (governed operating intelligence).
// Portfolio framing: Operations Command Layer — cockpit, operational spine and weekly brief.
// ============================================================================

import { ROUTES } from '@/lib/constants';

export const JADZIA_COI_ANCHOR = 'jadzia-coi';

export const JADZIA_COI_ROUTE = ROUTES.resultsJadziaCoi;

export const JADZIA_COI = {
  name: 'Jadzia COI',
  fullName: 'Chief Operating Intelligence',
  packageName: 'Operations Command Layer',
  tagline: 'The operations cockpit — not a chatbot.',
  summary:
    'Jadzia is FlexGrafik’s Operations Command Layer: a Commander cockpit, lead/order/analytics spine, weekly owner brief, and Marketing Brain in shadow (F0–F3). Consequential actions stay behind human approval — Act and auto ad spend are not offered.',
  oneLiner:
    'Operations Command Layer — LIVE ops spine plus Marketing Brain shadow with Telegram HITL; humans approve before Act or publish.',
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
      'WooCommerce order webhook → operational ledger (INT-002 LIVE). Checkout on zzpackage is a separate live surface.',
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
    title: 'Supervised content operations',
    detail: 'Prepare → approve → publish flow for Facebook text, photo and video posts (INT-011 LIVE with a human publish gate).',
    status: 'LIVE',
  },
  {
    id: 'cockpit',
    title: 'Commander cockpit',
    detail: 'A live owner-facing view for the operational spine, approvals and next actions.',
    status: 'LIVE',
  },
  {
    id: 'brief',
    title: 'Weekly owner brief',
    detail: 'A weekly operational synthesis prepared as a HITL draft for owner review and decisions.',
    status: 'LIVE',
  },
  {
    id: 'portal-qualification',
    title: 'Portal qualification path',
    detail: 'INT-012 API is LIVE, while the portal experience remains a generic supervised chat rather than an end-to-end qualification agent.',
    status: 'PARTIAL',
  },
  {
    id: 'worker',
    title: 'Approval queue + HITL',
    detail: 'Operational actions remain visible and approval-gated; Jadzia is not a fully autonomous business system.',
    status: 'LIVE',
  },
  {
    id: 'marketing-brain',
    title: 'Marketing Brain (shadow)',
    detail:
      'Data Truth, shadow decisions, circuit breakers and Brain Bus (F0–F3 LIVE). Proposals only — MB_MODE=shadow; Act and Meta Ads create remain blocked until Commander GO.',
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

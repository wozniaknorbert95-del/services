// ============================================================================
// OWNER ECOSYSTEM — flow steps with status labels.
// Binding: flexgrafik-meta/docs/core/modules/ + jadzia-coi.ts
// ============================================================================

import { metrics } from '@/content/proof';
import { JADZIA_COI } from '@/content/jadzia-coi';

export type FlowStepStatus = 'LIVE' | 'PARTIAL' | 'PLANNED';

export interface OwnerFlowStep {
  step: string;
  title: string;
  detail: string;
  status: FlowStepStatus;
  plannedNote?: string;
  highlight?: boolean;
}

export const FLOW_STEP_STATUS_LABELS: Record<FlowStepStatus, string> = {
  LIVE: 'LIVE',
  PARTIAL: 'PARTIAL',
  PLANNED: 'PLANNED',
} as const;

/** Six-step owner ecosystem flow */
export const OWNER_FLOW_STEPS: readonly OwnerFlowStep[] = [
  {
    step: '01',
    title: 'Entry',
    status: 'PARTIAL',
    detail:
      'flexgrafik.nl trust portal routes visitors. Sales chat (customer_agent) is LIVE on portal and wizard. Dedicated industry qualification agent is on the product roadmap.',
    plannedNote: 'Portal qualification agent',
  },
  {
    step: '02',
    title: 'Revenue',
    status: 'LIVE',
    detail: `zzpackage wizard — ${metrics.wizardSteps} UI screens, 77 SKU catalog, open pricing, Mollie checkout from €199. ${metrics.wizardStepsFootnote}.`,
  },
  {
    step: '03',
    title: 'Leads',
    status: 'LIVE',
    detail:
      'app.flexgrafik.nl — Bouwplaats Chaos PWA, Turnstile gate, 4-tier reward ladder, seasonal leaderboard, wizard bridge with tier-aware coupons.',
  },
  {
    step: '04',
    title: 'Operations',
    status: 'LIVE',
    highlight: true,
    detail: JADZIA_COI.summary,
  },
  {
    step: '05',
    title: 'Execution',
    status: 'LIVE',
    highlight: true,
    detail: `Agent OS — ${metrics.agentNodes}-node LangGraph pipeline (Planner → Coder → Tester → Reviewer → Summarizer). Hybrid VPS control plane + Local Runner with human gate before deploy.`,
  },
  {
    step: '06',
    title: 'Supervision',
    status: 'LIVE',
    highlight: true,
    detail:
      'Flex-VCMS — scan all repos, detect conflicts, enforce SSoT, KODA assistant and governance audit trail. Conflicts: 0 target on every scan.',
  },
] as const;

export const PORTAL_CHAT_DISCLAIMER =
  'Portal and wizard share the same supervised sales chat (customer_agent). A dedicated industry qualification flow is on the product roadmap — discovery first, checkout in the wizard.';

export const JADZIA_ONE_LINER = JADZIA_COI.oneLiner;

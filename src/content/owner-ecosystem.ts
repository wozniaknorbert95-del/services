// ============================================================================
// OWNER ECOSYSTEM — flow steps with honest LIVE / PARTIAL / PLANNED labels.
// Binding: flexgrafik-meta/docs/core/as-is-inventory.md (2026-06-24)
// ============================================================================

import { metrics } from '@/content/proof';

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

/** Six-step owner ecosystem flow — honest AS-IS from canonical inventory */
export const OWNER_FLOW_STEPS: readonly OwnerFlowStep[] = [
  {
    step: '01',
    title: 'Entry',
    status: 'PARTIAL',
    detail:
      'flexgrafik.nl trust portal routes visitors. Generic sales chat (customer_agent) is LIVE — same endpoint as the wizard. Dedicated industry qualification agent is PLANNED.',
    plannedNote: 'Qualification agent post-angel',
  },
  {
    step: '02',
    title: 'Revenue',
    status: 'LIVE',
    detail: `zzpackage wizard — ${metrics.wizardSteps} UI screens, open pricing, Mollie checkout. ${metrics.wizardStepsFootnote}.`,
  },
  {
    step: '03',
    title: 'Leads',
    status: 'LIVE',
    detail:
      'app.flexgrafik.nl game — coupons and contacts funnel into the wizard with tier-aware attribution.',
  },
  {
    step: '04',
    title: 'Operations',
    status: 'PARTIAL',
    detail:
      'jadzia-core COI layer. LIVE today: WordPress SSH agent and wizard sales chat. PLANNED: order ingestion, lead unification, weekly strategy brief.',
    plannedNote: 'order_node · WC webhooks · jadzia.db ingestion',
  },
  {
    step: '05',
    title: 'Execution',
    status: 'LIVE',
    highlight: true,
    detail: `Agent OS — ${metrics.agentNodes}-node LangGraph pipeline (Planner → Coder → Tester → Reviewer → Summarizer). Hybrid VPS control plane with human gate before deploy.`,
  },
  {
    step: '06',
    title: 'Supervision',
    status: 'LIVE',
    highlight: true,
    detail:
      'Flex-VCMS — scan all repos, detect conflicts, enforce SSoT. Governance layer with Conflicts: 0 target on every scan.',
  },
] as const;

export const PORTAL_CHAT_DISCLAIMER =
  'The homepage chat is a supervised sales assistant (shared with the wizard). A dedicated industry qualification agent is planned — discovery first, checkout in the wizard.';

export const JADZIA_ONE_LINER =
  'Jadzia is the Chief Operating Intelligence layer — not a chatbot. Live: WP automation and wizard chat. Next: orders, leads and analytics in one governed loop.';

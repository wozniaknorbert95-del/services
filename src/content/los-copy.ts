// ============================================================================
// LOS COPY — Living Operating System teaser (investor bridge).
// Source: flexgrafik-meta/docs/core/living-system-architecture.md
// ============================================================================

import { ROUTES } from '@/lib/constants';

export const LOS_TEASER = {
  eyebrow: '// architecture_truth',
  title: 'Governance-first — AI proposes, humans approve.',
  lead:
    'The Living Operating System is not full autonomy. Five layers connect sense, strategy, orchestration, bounded action and guardrails — the stack behind Quietforge and FlexGrafik.',
  governanceLine: 'Governance-first — not autonomous AI.',
  ctaLabel: 'See full owner ecosystem map',
  ctaHref: ROUTES.resultsOwnerEcosystem,
} as const;

export interface LosLayer {
  id: string;
  name: string;
  systems: string;
  detail: string;
}

/** Five LOS layers — condensed from living-system-architecture.md */
export const LOS_LAYERS: readonly LosLayer[] = [
  {
    id: 'sense',
    name: 'Sense',
    systems: 'Portal · Wizard · Game',
    detail: 'Signals from visitors, leads and operations enter the loop.',
  },
  {
    id: 'think',
    name: 'Think',
    systems: 'Jadzia Strategist',
    detail: 'Orders, leads and ops signals feed Jadzia COI — weekly strategy brief and Kaizen guard before action.',
  },
  {
    id: 'orchestrate',
    name: 'Orchestrate',
    systems: 'Planner · Agent OS · VCMS',
    detail: 'Route work through governed pipelines with conflict checks.',
  },
  {
    id: 'act',
    name: 'Act',
    systems: 'Bounded nodes',
    detail: 'Execute within scoped permissions — code, content, ops tasks.',
  },
  {
    id: 'guard',
    name: 'Guard',
    systems: 'HITL · Kaizen · Zasada 11',
    detail: 'Human approval, continuous improvement, manual deploy only.',
  },
] as const;

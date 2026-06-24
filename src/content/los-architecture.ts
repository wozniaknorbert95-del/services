// ============================================================================
// LOS ARCHITECTURE — Living Operating System (SSoT for home LOS section).
// Source: flexgrafik-meta/docs/core/living-system-architecture.md §1–§5
// ============================================================================

import { ROUTES } from '@/lib/constants';
import type { IntentId } from '@/content/ecosystem';

export type LosLayerId = 'sense' | 'think' | 'orchestrate' | 'act' | 'guard' | 'memory';

export const LOS_DEFINITION = {
  living:
    'A living system runs a continuous loop: Sense → Interpret → Propose → Verify → HITL → Act → Learn — with measurable outputs and hard guardrails. Not full autonomy without a human.',
  headline: 'Governance-first orchestration — AI proposes, humans approve.',
  subline:
    'Six runtime layers plus memory connect sense, strategy, orchestration, bounded action and guardrails — the stack behind Quietforge and FlexGrafik.',
} as const;

export const LOS_TEASER = {
  eyebrow: '// living_operating_system',
  title: LOS_DEFINITION.headline,
  lead: LOS_DEFINITION.subline,
  governanceLine: 'Governance-first — not autonomous AI.',
  ctaLabel: 'Read the Jadzia COI case study',
  ctaHref: ROUTES.resultsJadziaCoi,
  repoRouterCtaLabel: 'See all 8 repositories',
  repoRouterCtaHref: '#repo-router',
  ecosystemCtaLabel: 'See full owner ecosystem map',
  ecosystemCtaHref: ROUTES.resultsOwnerEcosystem,
} as const;

export interface LosLayer {
  id: LosLayerId;
  name: string;
  systems: string;
  detail: string;
  intent: IntentId;
}

/** Six LOS layers — sense through memory (canon §2). */
export const LOS_LAYERS: readonly LosLayer[] = [
  {
    id: 'sense',
    name: 'Sense',
    systems: 'GA4 · WooCommerce · Game · Portal · VCMS scan',
    detail: 'Read-only signals from touchpoints and health scans enter the loop.',
    intent: 'order',
  },
  {
    id: 'think',
    name: 'Think',
    systems: 'Jadzia Strategist',
    detail: 'Orders, leads and ops signals feed COI — anomaly flags and weekly brief.',
    intent: 'calm',
  },
  {
    id: 'orchestrate',
    name: 'Orchestrate',
    systems: 'Planner · Agent OS · VCMS',
    detail: 'Route work through governed pipelines with conflict checks.',
    intent: 'efficiency',
  },
  {
    id: 'act',
    name: 'Act',
    systems: 'Operational nodes · Agent OS code (HITL)',
    detail: 'Bounded writes — code, content and ops tasks within scoped permissions.',
    intent: 'money',
  },
  {
    id: 'guard',
    name: 'Guard',
    systems: 'global-rules · Kaizen · HITL · Zasada 11',
    detail: 'Human approval, continuous improvement, manual deploy only.',
    intent: 'calm',
  },
  {
    id: 'memory',
    name: 'Memory',
    systems: 'jadzia.db · handoffs · meta docs',
    detail: 'Operational data, session anchors and Guard DNA feed back into Think.',
    intent: 'order',
  },
] as const;

export interface LosLifeLoopPhase {
  id: string;
  name: string;
  detail: string;
  hitl?: boolean;
}

/** Seven-phase life loop — canon §3. */
export const LOS_LIFE_LOOP: readonly LosLifeLoopPhase[] = [
  { id: 'sense', name: 'Sense', detail: 'Daily read — metrics snapshot' },
  { id: 'interpret', name: 'Interpret', detail: 'AI proposes — anomaly flags' },
  { id: 'propose', name: 'Propose', detail: 'Strategy brief · max 3 kaizen' },
  { id: 'verify', name: 'Verify', detail: 'Evidence in handoff' },
  { id: 'decide', name: 'Decide', detail: 'Approve · reject · defer', hitl: true },
  { id: 'act', name: 'Act', detail: 'Bounded execution post-approve' },
  { id: 'learn', name: 'Learn', detail: 'Brains refresh · AS-IS update' },
] as const;

export interface LosBrain {
  id: string;
  name: string;
  question: string;
  layers: string;
  href: string;
  note?: string;
}

/** Three brains — canon §5. Meta is Guard DNA, not runtime. */
export const LOS_THREE_BRAINS: readonly LosBrain[] = [
  {
    id: 'jadzia',
    name: 'Jadzia COI',
    question: 'What is happening? What do we do?',
    layers: 'Think + partial Act',
    href: ROUTES.resultsJadziaCoi,
  },
  {
    id: 'agent-os',
    name: 'Agent OS',
    question: 'How do we build it? Are tests OK?',
    layers: 'Orchestrate → Act (code)',
    href: ROUTES.resultsAgentOrchestrator,
  },
  {
    id: 'vcms',
    name: 'VCMS',
    question: 'Does the truth still match?',
    layers: 'Sense (docs) + Guard',
    href: ROUTES.resultsOwnerEcosystemWhyVcms,
  },
] as const;

export const LOS_META_NOTE =
  'flexgrafik-meta = Guard DNA (global-rules) — not runtime, but Guard input.';

export const LOS_ENTERPRISE_PATTERN = {
  applications: 'Wizard · Game · Portal — systems of record and touchpoints',
  governance: 'Jadzia COI + VCMS + Meta — policy, HITL, agent registry',
  aiServices: 'Anthropic · OpenRouter · MCP — models, tools, protocols',
} as const;

/** Repo → LOS layer mapping (8 repos). */
export const LOS_REPO_LAYER_MAP: Readonly<Record<string, readonly LosLayerId[]>> = {
  zzpackage: ['sense', 'act'],
  'app.flexgrafik.nl': ['sense'],
  'flexgrafik-nl': ['sense'],
  'jadzia-core': ['think', 'act'],
  'agent-os': ['orchestrate', 'act'],
  'agent-os-ui': ['orchestrate'],
  'flex-vcms': ['sense', 'guard'],
  'flexgrafik-meta': ['guard', 'memory'],
} as const;

const LAYER_LABELS: Record<LosLayerId, string> = {
  sense: 'Sense',
  think: 'Think',
  orchestrate: 'Orchestrate',
  act: 'Act',
  guard: 'Guard',
  memory: 'Memory',
};

/** Display label for repo LOS badges, e.g. "Sense · Act". */
export function formatLosLayers(layers: readonly LosLayerId[]): string {
  return layers.map((id) => LAYER_LABELS[id]).join(' · ');
}

export function getLosLayerMeta(id: LosLayerId): LosLayer {
  const found = LOS_LAYERS.find((l) => l.id === id);
  if (!found) throw new Error(`Unknown LOS layer: ${id}`);
  return found;
}

// ============================================================================
// ECOSYSTEM MANIFEST — modules, repos, intents, home section order.
// Binding: docs/strategy/site-map.md
// Components MUST read module/intent/pain data from here — no hardcoded lists.
// ============================================================================

import { ROUTES } from '@/lib/constants';

export type IntentId = 'time' | 'money' | 'order' | 'calm' | 'efficiency';

export type ScreenKey =
  | 'wizardCheckout'
  | 'leadMagnet'
  | 'inboxLanes'
  | 'auditLog'
  | 'agentCards'
  | 'workflowMap'
  | 'vcmsDashboard'
  | 'conflictReport'
  | 'portalAssistant'
  | 'adminDashboard';

/** Keys into proof.ts → caseMeasurements */
export type CaseMeasurementKey =
  | 'inboxKiller'
  | 'agentOs'
  | 'salesFunnel'
  | 'leadMagnet'
  | 'advisory'
  | 'ownerEcosystem';

/** Maps case study slug → proof caseMeasurements key */
export const CASE_MEASUREMENT_KEYS: Record<string, CaseMeasurementKey> = {
  'inbox-killer': 'inboxKiller',
  'agent-orchestrator': 'agentOs',
  'sales-funnel': 'salesFunnel',
  'lead-magnet': 'leadMagnet',
  'advisory-modernisation': 'advisory',
  'owner-ecosystem': 'ownerEcosystem',
} as const;

/** Home section markers — site-map.md §2 (for DOM verification) */
export const HOME_SECTION_MARKERS: Record<(typeof HOME_SECTIONS)[number], string> = {
  HeroSection: 'hero',
  SystemArchitecture: 'system-architecture',
  IntentRouter: 'intent-router',
  PainGrid: 'pain-grid',
  SpearheadSpotlight: 'spearhead',
  OwnerEcosystemTeaser: 'owner-ecosystem',
  SystemMetrics: 'system-metrics',
  ResultsTeaser: 'results-teaser',
  BehindTheScenes: 'behind-the-scenes',
  HowIWork: 'how-i-work',
  WhyThisWorks: 'why-this-works',
  TrustSafety: 'trust-safety',
  Pricing: 'pricing',
  FinalCtaBand: 'final-cta',
};

export type VideoKey =
  | 'ecosystem'
  | 'inboxKiller'
  | 'wizard'
  | 'leadMagnet'
  | 'agentOs'
  | 'vcms'
  | 'founder';

export const INTENT_LEGEND: ReadonlyArray<{
  id: IntentId;
  label: string;
  legend: string;
  cssVar: string;
  textClass: string;
}> = [
  {
    id: 'time',
    label: 'Save time',
    legend: 'Saves your time',
    cssVar: 'var(--fx-time)',
    textClass: 'text-fx-time',
  },
  {
    id: 'money',
    label: 'Earn more',
    legend: 'Raises revenue / profit',
    cssVar: 'var(--fx-money)',
    textClass: 'text-fx-money',
  },
  {
    id: 'calm',
    label: 'Less chaos and stress',
    legend: 'Reduces stress and chaos',
    cssVar: 'var(--fx-calm)',
    textClass: 'text-fx-calm',
  },
  {
    id: 'efficiency',
    label: 'Raise team efficiency',
    legend: 'Increases team efficiency',
    cssVar: 'var(--fx-efficiency)',
    textClass: 'text-fx-efficiency',
  },
  {
    id: 'order',
    label: 'Order systems and tech',
    legend: 'Orders systems and processes',
    cssVar: 'var(--fx-order)',
    textClass: 'text-fx-order',
  },
] as const;

export function getIntentMeta(id: IntentId) {
  const found = INTENT_LEGEND.find((i) => i.id === id);
  if (!found) throw new Error(`Unknown intent: ${id}`);
  return found;
}

/** Locked home stack — site-map.md §2 */
export const HOME_SECTIONS = [
  'HeroSection',
  'SystemArchitecture',
  'IntentRouter',
  'PainGrid',
  'SpearheadSpotlight',
  'OwnerEcosystemTeaser',
  'SystemMetrics',
  'ResultsTeaser',
  'BehindTheScenes',
  'HowIWork',
  'WhyThisWorks',
  'TrustSafety',
  'Pricing',
  'FinalCtaBand',
] as const;

export interface EcosystemModule {
  id: string;
  name: string;
  effect: string;
  intents: IntentId[];
  route: string;
  repoKey?: string;
  screenKey?: ScreenKey;
  videoKey?: VideoKey;
  spearhead?: boolean;
}

export const ECOSYSTEM_MODULES: readonly EcosystemModule[] = [
  {
    id: 'm1',
    name: 'Automation Map',
    effect: 'Before we build anything, we map what is worth automating and why.',
    intents: ['order', 'money', 'calm'],
    route: ROUTES.bookDiscovery,
    repoKey: 'flexgrafik-meta',
  },
  {
    id: 'm2',
    name: 'Sales Funnel & Wizard',
    effect: 'Conversion on autopilot: prospects qualify themselves and buy.',
    intents: ['money', 'efficiency'],
    route: ROUTES.resultsSalesFunnel,
    repoKey: 'zzpackage',
    screenKey: 'wizardCheckout',
    videoKey: 'wizard',
  },
  {
    id: 'm3',
    name: 'Inbox Killer',
    effect: 'Handles email and support — with your approval on every send.',
    intents: ['time', 'calm'],
    route: ROUTES.resultsInboxKiller,
    repoKey: 'jadzia-core',
    screenKey: 'inboxLanes',
    videoKey: 'inboxKiller',
    spearhead: true,
  },
  {
    id: 'm4',
    name: 'Agent OS (Custom Agents)',
    effect: 'Agents that run repeatable tasks — with review gates.',
    intents: ['time', 'efficiency'],
    route: ROUTES.resultsAgentOrchestrator,
    repoKey: 'agent-os',
    screenKey: 'agentCards',
    videoKey: 'agentOs',
  },
  {
    id: 'm5',
    name: 'VCMS (Governance Layer)',
    effect: 'Scans 8 repos, SSoT conflicts and handoffs — supervision before deploy.',
    intents: ['order', 'calm'],
    route: ROUTES.resultsOwnerEcosystem,
    repoKey: 'flex-vcms',
    screenKey: 'vcmsDashboard',
    videoKey: 'vcms',
  },
  {
    id: 'm6',
    name: 'Lead Magnet System',
    effect: 'Interactive tools that capture qualified leads.',
    intents: ['money'],
    route: ROUTES.resultsLeadMagnet,
    repoKey: 'app.flexgrafik.nl',
    screenKey: 'leadMagnet',
    videoKey: 'leadMagnet',
  },
  {
    id: 'm7',
    name: 'Maintenance & Safety',
    effect: 'Ongoing care so systems stay healthy — no lock-in.',
    intents: ['order', 'calm'],
    route: ROUTES.managedAutomation,
    repoKey: 'agent-os-ui',
    screenKey: 'adminDashboard',
  },
  {
    id: 'm8',
    name: 'AI Advisory',
    effect: 'Founder-level guidance when you modernise operations.',
    intents: ['efficiency', 'money', 'order'],
    route: ROUTES.resultsAdvisoryModernisation,
    repoKey: 'flexgrafik-nl',
    screenKey: 'portalAssistant',
  },
] as const;

export interface EcosystemRepo {
  number: number;
  repoKey: string;
  role: string;
  intents: IntentId[];
  screenKey?: ScreenKey;
  proofRoute: string;
  flagship?: boolean;
}

export const ECOSYSTEM_REPOS: readonly EcosystemRepo[] = [
  {
    number: 1,
    repoKey: 'zzpackage',
    role: 'Sales funnel engine',
    intents: ['money', 'efficiency'],
    screenKey: 'wizardCheckout',
    proofRoute: ROUTES.resultsSalesFunnel,
  },
  {
    number: 2,
    repoKey: 'app.flexgrafik.nl',
    role: 'Lead magnet game',
    intents: ['money'],
    screenKey: 'leadMagnet',
    proofRoute: ROUTES.resultsLeadMagnet,
  },
  {
    number: 3,
    repoKey: 'jadzia-core',
    role: 'Inbox Killer — spearhead',
    intents: ['time', 'calm'],
    screenKey: 'inboxLanes',
    proofRoute: ROUTES.resultsInboxKiller,
    flagship: true,
  },
  {
    number: 4,
    repoKey: 'agent-os',
    role: 'Agent workforce',
    intents: ['time', 'efficiency'],
    screenKey: 'agentCards',
    proofRoute: ROUTES.resultsAgentOrchestrator,
  },
  {
    number: 5,
    repoKey: 'flex-vcms',
    role: 'Governance layer',
    intents: ['order', 'calm'],
    screenKey: 'vcmsDashboard',
    proofRoute: ROUTES.resultsOwnerEcosystem,
    flagship: true,
  },
  {
    number: 6,
    repoKey: 'flexgrafik-nl',
    role: 'Portal / web upgrade',
    intents: ['money', 'order'],
    screenKey: 'portalAssistant',
    proofRoute: ROUTES.webUpgrade,
  },
  {
    number: 7,
    repoKey: 'flexgrafik-meta',
    role: 'Method / Automation Map',
    intents: ['order', 'money'],
    proofRoute: ROUTES.howItWorks,
  },
  {
    number: 8,
    repoKey: 'agent-os-ui',
    role: 'Observability',
    intents: ['order', 'efficiency'],
    screenKey: 'adminDashboard',
    proofRoute: ROUTES.trust,
  },
] as const;

export interface PainCard {
  id: string;
  title: string;
  description: string;
  href: string;
  intents: IntentId[];
}

export const PAIN_GRID: readonly PainCard[] = [
  {
    id: 'pain-inbox',
    title: 'Drowning in email',
    description: 'Important messages, invoices and spam in one pile. Leads slip through.',
    href: ROUTES.inboxKiller,
    intents: ['time', 'calm'],
  },
  {
    id: 'pain-site',
    title: 'A site stuck in the past',
    description: 'No mobile, no clear next step, nothing to track. It quietly costs you clients.',
    href: ROUTES.webUpgrade,
    intents: ['money', 'order'],
  },
  {
    id: 'pain-quotes',
    title: 'Quotes by hand, all day',
    description: 'The same questions, the same replies, over and over.',
    href: ROUTES.salesFunnel,
    intents: ['money', 'efficiency'],
  },
  {
    id: 'pain-leads',
    title: 'Traffic, but no leads',
    description: 'People visit. Almost none get in touch.',
    href: ROUTES.leadMagnetGame,
    intents: ['money'],
  },
] as const;

// ============================================================================
// ECOSYSTEM MANIFEST — modules, repos, intents, home section order.
// Binding: docs/strategy/site-map.md
// Components MUST read module/intent/pain data from here — no hardcoded lists.
// ============================================================================

import { ROUTES } from '@/lib/constants';
import { JADZIA_COI_ROUTE } from '@/content/jadzia-coi';
import { MODULE_SHOWCASE } from '@/content/module-showcase';
import type { LosLayerId } from '@/content/los-architecture';

export type IntentId = 'time' | 'money' | 'order' | 'calm' | 'efficiency';

export type ScreenKey =
  | 'wizardCheckout'
  | 'leadMagnet'
  | 'leadMagnetGameOver'
  | 'leadMagnetLeaderboard'
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
  | 'ownerEcosystem'
  | 'jadziaCoi'
  | 'whatsappPilot';

/** Maps case study slug → proof caseMeasurements key */
export const CASE_MEASUREMENT_KEYS: Record<string, CaseMeasurementKey> = {
  'inbox-killer': 'inboxKiller',
  'agent-orchestrator': 'agentOs',
  'sales-funnel': 'salesFunnel',
  'lead-magnet': 'leadMagnet',
  'advisory-modernisation': 'advisory',
  'owner-ecosystem': 'ownerEcosystem',
  'jadzia-coi': 'jadziaCoi',
  'whatsapp-discovery-pilot': 'whatsappPilot',
} as const;

/** Home section markers — site-map.md §2 (for DOM verification) */
export const HOME_SECTION_MARKERS: Record<(typeof HOME_SECTIONS)[number], string> = {
  HeroSection: 'hero',
  PainGrid: 'pain-grid',
  SystemMetrics: 'system-metrics',
  SpearheadSpotlight: 'spearhead',
  BuiltVsPlanned: 'built-vs-planned',
  ResultsTeaser: 'results-teaser',
  IntentRouter: 'repo-router',
  LivingSystemTeaser: 'los-teaser',
  BehindTheScenes: 'behind-the-scenes',
  HowIWork: 'how-i-work',
  TrustAndObjections: 'trust-safety',
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

/** Locked home stack — site-map.md §3 */
export const HOME_SECTIONS = [
  'HeroSection',
  'PainGrid',
  'SystemMetrics',
  'SpearheadSpotlight',
  'BuiltVsPlanned',
  'ResultsTeaser',
  'IntentRouter',
  'LivingSystemTeaser',
  'BehindTheScenes',
  'HowIWork',
  'TrustAndObjections',
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
    effect: MODULE_SHOWCASE.zzpackage.effect,
    intents: ['money', 'efficiency'],
    route: ROUTES.resultsSalesFunnel,
    repoKey: 'zzpackage',
    screenKey: 'wizardCheckout',
    videoKey: 'wizard',
    spearhead: true,
  },
  {
    id: 'm3',
    name: 'Jadzia COI',
    effect: MODULE_SHOWCASE['jadzia-core'].effect,
    intents: ['time', 'calm', 'order', 'efficiency'],
    route: JADZIA_COI_ROUTE,
    repoKey: 'jadzia-core',
    screenKey: 'workflowMap',
    videoKey: 'inboxKiller',
  },
  {
    id: 'm4',
    name: 'Agent OS (Custom Agents)',
    effect: MODULE_SHOWCASE['agent-os'].effect,
    intents: ['time', 'efficiency'],
    route: ROUTES.resultsAgentOrchestrator,
    repoKey: 'agent-os',
    screenKey: 'agentCards',
    videoKey: 'agentOs',
  },
  {
    id: 'm5',
    name: 'VCMS (Governance Layer)',
    effect: MODULE_SHOWCASE['flex-vcms'].effect,
    intents: ['order', 'calm'],
    route: ROUTES.resultsOwnerEcosystemWhyVcms,
    repoKey: 'flex-vcms',
    screenKey: 'vcmsDashboard',
    videoKey: 'vcms',
  },
  {
    id: 'm6',
    name: 'Gamified lead system',
    effect: MODULE_SHOWCASE['app.flexgrafik.nl'].effect,
    intents: ['money'],
    route: ROUTES.resultsLeadMagnet,
    repoKey: 'app.flexgrafik.nl',
    screenKey: 'leadMagnet',
    videoKey: 'leadMagnet',
  },
  {
    id: 'm7',
    name: 'Mission Control',
    effect: MODULE_SHOWCASE['agent-os-ui'].effect,
    intents: ['order', 'efficiency'],
    route: ROUTES.trust,
    repoKey: 'agent-os-ui',
    screenKey: 'adminDashboard',
  },
  {
    id: 'm8',
    name: 'Trust Portal',
    effect: MODULE_SHOWCASE['flexgrafik-nl'].effect,
    intents: ['money', 'order'],
    route: ROUTES.webUpgrade,
    repoKey: 'flexgrafik-nl',
    screenKey: 'portalAssistant',
  },
] as const;

export interface EcosystemRepo {
  number: number;
  repoKey: string;
  outcomeLabel: string;
  role: string;
  statusNote?: string;
  intents: IntentId[];
  losLayers: readonly LosLayerId[];
  screenKey?: ScreenKey;
  proofRoute: string;
  flagship?: boolean;
}

export const ECOSYSTEM_REPOS: readonly EcosystemRepo[] = [
  {
    number: 1,
    repoKey: 'zzpackage',
    outcomeLabel: 'Quote, price and checkout in one guided flow',
    role: 'Wizard Cash Engine',
    intents: ['money', 'efficiency'],
    losLayers: ['sense', 'act'],
    screenKey: 'wizardCheckout',
    proofRoute: ROUTES.resultsSalesFunnel,
    flagship: true,
  },
  {
    number: 2,
    repoKey: 'app.flexgrafik.nl',
    outcomeLabel: 'Turn cold traffic into qualified handoffs',
    role: 'Lead magnet game',
    intents: ['money'],
    losLayers: ['sense'],
    screenKey: 'leadMagnet',
    proofRoute: ROUTES.resultsLeadMagnet,
  },
  {
    number: 3,
    repoKey: 'jadzia-core',
    outcomeLabel: 'Know which leads, orders and ops need action',
    role: 'Jadzia COI',
    statusNote: 'LIVE: leads · analytics · WP SSH · sales chat · weekly brief · PLANNED: WC order sync to jadzia.db',
    intents: ['time', 'calm', 'order', 'efficiency'],
    losLayers: ['think', 'act'],
    screenKey: 'workflowMap',
    proofRoute: JADZIA_COI_ROUTE,
    flagship: true,
  },
  {
    number: 4,
    repoKey: 'agent-os',
    outcomeLabel: 'Build and test changes through a fixed agent workflow',
    role: 'Agent OS',
    intents: ['time', 'efficiency'],
    losLayers: ['orchestrate', 'act'],
    screenKey: 'agentCards',
    proofRoute: ROUTES.resultsAgentOrchestrator,
  },
  {
    number: 5,
    repoKey: 'flex-vcms',
    outcomeLabel: 'Stop content and repo drift before deploy',
    role: 'Governance layer',
    intents: ['order', 'calm'],
    losLayers: ['sense', 'guard'],
    screenKey: 'vcmsDashboard',
    proofRoute: ROUTES.resultsOwnerEcosystemWhyVcms,
    flagship: true,
  },
  {
    number: 6,
    repoKey: 'flexgrafik-nl',
    outcomeLabel: 'Give visitors a trustworthy conversion portal',
    role: 'Trust Portal',
    statusNote: 'LIVE: generic sales chat · PLANNED: qualification agent',
    intents: ['money', 'order'],
    losLayers: ['sense'],
    screenKey: 'portalAssistant',
    proofRoute: ROUTES.webUpgrade,
  },
  {
    number: 7,
    repoKey: 'flexgrafik-meta',
    outcomeLabel: 'Start every project with a written operating map',
    role: 'Method / Automation Map',
    intents: ['order', 'money'],
    losLayers: ['guard', 'memory'],
    proofRoute: ROUTES.howItWorks,
  },
  {
    number: 8,
    repoKey: 'agent-os-ui',
    outcomeLabel: 'See tasks, approvals, history and cost',
    role: 'Mission Control',
    intents: ['order', 'efficiency'],
    losLayers: ['orchestrate'],
    screenKey: 'adminDashboard',
    proofRoute: ROUTES.trust,
  },
] as const;

export interface PainCard {
  id: string;
  title: string;
  description: string;
  costLine: string;
  href: string;
  intents: IntentId[];
}

export const PAIN_GRID_HEADER = {
  eyebrow: 'Choose your leak',
  title: 'Where is the business leaking time or money?',
  lead: 'Start with the operational pain. The architecture comes after we know which leak is worth fixing.',
} as const;

export const PAIN_GRID: readonly PainCard[] = [
  {
    id: 'pain-inbox',
    title: 'Drowning in email',
    description:
      'Important leads, invoices and customer questions sit in the same pile as noise. The system classifies, drafts and queues replies — you approve every send.',
    costLine: '~12 hours/week lost to triage and reply drafting',
    href: ROUTES.inboxKiller,
    intents: ['time', 'calm'],
  },
  {
    id: 'pain-site',
    title: 'An outdated website',
    description:
      'Visitors arrive, but the page gives them no trust, no clear route and no reason to act. The system turns the site into a conversion path.',
    costLine: 'Visitors leave without a path — enquiries stay flat',
    href: ROUTES.webUpgrade,
    intents: ['money', 'order'],
  },
  {
    id: 'pain-quotes',
    title: 'Quotes by hand',
    description:
      'You answer the same questions before knowing if the lead is serious. The wizard structures the quote, price logic and next step.',
    costLine: "3-day email ping-pong before you know if they're serious",
    href: ROUTES.salesFunnel,
    intents: ['money', 'efficiency'],
  },
  {
    id: 'pain-leads',
    title: 'Traffic, but no leads',
    description:
      'People visit and disappear. An interactive lead system earns attention first, then hands qualified users into the funnel.',
    costLine: 'Traffic with no capture — paid clicks with nothing in the CRM',
    href: ROUTES.leadMagnetGame,
    intents: ['money'],
  },
] as const;

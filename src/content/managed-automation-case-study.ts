// Managed Automation — MRR solutions ladder + FAQ
// Proof link: /trust/ + agent-orchestrator for ops layer

import { ROUTES } from '@/lib/constants';
import { PRICING_MATRIX } from '@/content/pricing';

export const MANAGED_AUTOMATION_SLUG = 'managed-automation' as const;

export const managedAutomationSolutionMeta = {
  title: 'Managed Automation — your systems, kept sharp',
  description:
    `Keep your automations healthy and improving. Monitoring, tuning and optimisation ${PRICING_MATRIX.managedAutomation.range}. Human-in-the-loop, no lock-in, cancel anytime.`,
  openGraphTitle: 'Managed Automation — your systems, kept sharp',
  openGraphDescription:
    `Keep your automations healthy and improving. Monitoring, tuning and optimisation ${PRICING_MATRIX.managedAutomation.range}.`,
  ogAlt: 'Managed Automation — your systems, kept sharp',
} as const;

export const managedAutomationSolutionTitle =
  'Your systems, kept sharp — month after month.';

export const managedAutomationSolutionProblem =
  'Software is not set and forget. Inboxes, offers and customers change — systems drift without ongoing care.';

export const managedAutomationSolutionSystemItems = [
  {
    title: 'Care',
    body: 'Health checks, small fixes and a monthly operational note.',
  },
  {
    title: 'Manage',
    body: 'Care plus supervised content hygiene and a weekly owner-brief digest.',
  },
  {
    title: 'Partner',
    body: 'Manage plus operations cockpit hygiene, priority escalation and quarterly review.',
  },
  {
    title: 'Human gate',
    body: 'Nothing sends, publishes or deploys without your approval — every plan.',
  },
] as const;

export type ManagedAutomationTierInclusion = {
  tier: 'Care' | 'Manage' | 'Partner';
  includes: readonly string[];
  boundary: string;
};

export const managedAutomationTierInclusions: readonly ManagedAutomationTierInclusion[] = [
  {
    tier: 'Care',
    includes: ['Health checks', 'Small fixes', 'Monthly operational note'],
    boundary: 'No supervised content publishing operations.',
  },
  {
    tier: 'Manage',
    includes: [
      'Everything in Care',
      'Supervised content prepare → approve → publish hygiene',
      'Weekly owner-brief digest',
    ],
    boundary: 'Content operations only — not Meta Ads Manager work or media buying.',
  },
  {
    tier: 'Partner',
    includes: [
      'Everything in Manage',
      'Operations cockpit hygiene',
      'Priority escalation',
      'Quarterly review',
    ],
    boundary: 'No automatic deployment; human approval remains in every consequential flow.',
  },
] as const;

export const managedAutomationSolutionEffectItems = [
  { title: 'Aligned', body: 'Systems stay matched to how you work today.' },
  { title: 'Transparent', body: 'You see what changed and why — not a black box.' },
  { title: 'No lock-in', body: 'Cancel anytime. Your systems and data remain yours.' },
] as const;

export const managedAutomationFaqs = [
  {
    question: 'Do I need a plan?',
    answer: "No — it's optional. But systems improve fastest when they're cared for.",
  },
  {
    question: 'Can I change plans?',
    answer: 'Anytime, up or down.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Care and above include monitoring and fixes — usually before you notice.',
  },
  {
    question: 'Will it act without me?',
    answer: 'Never. Human-in-the-loop is built into every plan.',
  },
] as const;

export const managedAutomationCaseStudyHref = ROUTES.trust;

export const managedAutomationOpsProofHref = ROUTES.resultsAgentOrchestrator;

// Conversion Web Upgrade — solutions ladder (not brochure-only agency copy)
// Bridge to advisory: advisory-modernisation-case-study.ts (advisoryModernisationWebUpgradeBridge)

import { ROUTES } from '@/lib/constants';
import { WEBSITE_ONLY_EXCEPTION } from '@/content/conversion-copy';

export const WEB_UPGRADE_SLUG = 'web-upgrade' as const;

export const webUpgradeDisplayName = 'Conversion Web Upgrade — a site that earns its keep';

export const webUpgradeSolutionMeta = {
  title: 'Conversion Web Upgrade — qualification-ready architecture',
  description:
    'Mobile-first conversion paths, GA4 tracking and qualification-ready architecture — not a brochure site. Portal chat stays generic and supervised.',
  openGraphTitle: 'Conversion Web Upgrade | Quietforge',
  openGraphDescription:
    'A website wired for enquiries, tracking and next-step clarity — conversion systems architect scope.',
  twitterDescription:
    'Web upgrade as a conversion path: capture, track and route into the right next step — not design-only.',
  ogAlt: 'Conversion Web Upgrade solution',
} as const;

export const webUpgradeSolutionTitle =
  'A website wired for enquiries — not just impressions.';

export const webUpgradeSolutionProblem =
  'A site without a clear conversion path is a monthly cost with no feedback loop — you cannot see what works or who is ready to buy.';

export const webUpgradeSolutionSystemItems = [
  {
    title: 'Mobile-first conversion layout',
    body: 'One primary action per viewport — fast load, thumb-friendly paths for NL SMB traffic.',
  },
  {
    title: 'Qualification-ready capture',
    body: 'Forms and generic supervised chat can feed structured data into your stack — without claiming a live portal qualification agent.',
  },
  {
    title: 'GA4 + event clarity',
    body: 'See which pages and CTAs produce enquiries — decisions from data, not guesswork.',
  },
  {
    title: 'System fit check',
    body: 'Scoped as part of a conversion system — wizard, inbox or COI can sit downstream when ready.',
  },
] as const;

export const webUpgradeSolutionEffectBefore = [
  'Visitors land on mobile with no obvious next step.',
  'Enquiries arrive with missing context — more email back-and-forth.',
  'No tracking — marketing spend is blind.',
  'Site looks fine but does not qualify or convert.',
] as const;

export const webUpgradeSolutionEffectAfter = [
  'Clear conversion paths on every key page.',
  'Structured capture ready for supervised follow-up.',
  'GA4 shows what drives enquiries.',
  'Foundation for Wizard-first routing, generic supervised chat or later automation layers.',
] as const;

/** Shown on solutions page — marketing-strategy §2 exception handling */
export const webUpgradeFitException = WEBSITE_ONLY_EXCEPTION;

export const webUpgradeAdvisoryBridge = {
  eyebrow: '// process proof',
  title: 'Advisory modernisation reference',
  lead: 'Site modernisation and supervised qualification patterns — anonymised advisory case study in delivery.',
  cta: 'See advisory case study →',
  href: ROUTES.resultsAdvisoryModernisation,
} as const;

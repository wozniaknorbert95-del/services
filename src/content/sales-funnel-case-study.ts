// Wizard Cash Engine case study copy — sync with flexgrafik-meta module-zzpackage-wizard.md
// Footnote authority: src/content/proof.ts metrics.wizardStepsFootnote

import { EXTERNAL, ROUTES } from '@/lib/constants';
import { metrics } from '@/content/proof';

export const SALES_FUNNEL_SLUG = 'sales-funnel' as const;

export const salesFunnelDisplayName = 'Wizard Cash Engine — self-service quote & onboarding';

export const salesFunnelCaseMeta = {
  title: 'Case study — Self-service quote & onboarding',
  description:
    'How the Wizard Cash Engine on zzpackage.flexgrafik.nl qualifies, prices and checks out via Mollie — calm form or designer handoff, no invented conversion rates.',
  openGraphTitle: 'Case study — Wizard Cash Engine',
  openGraphDescription:
    `${metrics.wizardStepsFootnote} · Mollie checkout from €199 · progress bar and sticky cart on every step.`,
  twitterDescription:
    'Live wizard on zzpackage — open pricing, structured uploads, Mollie checkout. Process proof only.',
  ogAlt: 'Case study — Sales Funnel Engine configurator',
} as const;

export const salesFunnelWizardBridge = {
  eyebrow: '// live proof',
  title: 'Try the production wizard in two minutes',
  lead:
    'zzpackage.flexgrafik.nl is the revenue layer I run before selling automation — same stack Quietforge deploys for SMB clients. Wizard-only checkout; no classic shop.',
  cta: 'Open zzpackage wizard →',
  href: EXTERNAL.zzpackageWizard,
} as const;

export const salesFunnelOwnerEcosystemBridge = {
  eyebrow: '// full stack',
  title: 'Wizard sits inside an eight-repo ecosystem',
  lead:
    'Lead magnet game, Jadzia COI, VCMS governance and Agent OS engineering — mapped together on the owner ecosystem page.',
  cta: 'Owner ecosystem map →',
  href: ROUTES.resultsOwnerEcosystem,
} as const;

export const salesFunnelBeforeItems = [
  'The same pricing questions answered by hand, all day',
  'Prospects wait days for a number — then go cold',
  'Details chased by email before you can even quote',
  'No clean record of who asked for what',
] as const;

export const salesFunnelAfterItems = [
  `Guided configurator — ${metrics.wizardStepsFootnote}; client self-qualifies in one session`,
  'Open pricing visible before checkout — Mollie from €199 minimum, no phone call required',
  'Logo and specs uploaded in-flow — calm order form or designer handoff, structured every time',
  'Qualified lead lands in inbox / CRM / sheet automatically via webhook',
] as const;

export type SalesFunnelJourneyStep = {
  step: string;
  title: string;
  detail: string;
  highlight?: boolean;
};

/** Nine UI screens (00–08) — matches gratka journey SVG and live wizard progress bar. */
export const salesFunnelJourneySteps: readonly SalesFunnelJourneyStep[] = [
  { step: '00', title: 'Welcome', detail: 'Orient the client — what they will configure and how long it takes.' },
  { step: '01', title: 'Foundation', detail: 'Core package choices — the build-your-own base every other step builds on.' },
  { step: '02', title: 'Vehicle', detail: 'Mobile branding options — upsell without a sales call.' },
  { step: '03', title: 'Workwear', detail: 'Clothing branding — captured with the same logic as every other category.' },
  { step: '04', title: 'First impression', detail: 'Print and physical materials — no "what did you want again?" emails.' },
  { step: '05', title: 'Visibility', detail: 'On-site presence options — structured option data, not free text.' },
  { step: '06', title: 'Tools', detail: 'Equipment branding — dependencies and minimums enforced in the flow.' },
  { step: '07', title: 'Premium', detail: 'Finishing touches — final upsell inside the journey, not in your inbox.' },
  {
    step: '08',
    title: 'Checkout',
    detail: 'Summary, open price, upload assets, Mollie pay or book. Sticky cart visible throughout.',
    highlight: true,
  },
] as const;

export const salesFunnelArchitectureAlt =
  'Self-service configurator journey: welcome, seven configuration steps with progress bar and sticky cart, then checkout with open pricing';

export const salesFunnelArchitectureIntro =
  'Wizard Cash Engine — a Vanilla JS SPA on WordPress/WooCommerce with Mollie checkout. Progress bar and sticky cart stay visible on every configuration step; per product rules, these elements are never removed or bypassed.';

export const salesFunnelStepsFootnote = metrics.wizardStepsFootnote;

export const salesFunnelBuildDescription =
  `Configurator journey — ${metrics.wizardSteps} UI screens (${metrics.wizardBusinessSteps} business decision stages). Steps 01–07 are configuration; step 08 is checkout with open pricing.`;

export const salesFunnelStack = [
  'WordPress',
  'WooCommerce',
  'Mollie',
  'Vanilla JS SPA',
  'Webhook integration',
] as const;

export const salesFunnelRoiIntro =
  'No invented conversion rates or € saved. This is an honest process comparison you can use internally to decide whether a configurator is the right first build.';

export const salesFunnelRoiRows = [
  { manual: 'Same questions typed again and again', selfService: 'Flow asks once — answers stored in structure' },
  { manual: 'Number arrives days later via email', selfService: 'Open price visible in-session' },
  { manual: 'Every quote captured differently', selfService: 'Same fields, same format, every lead' },
  { manual: 'Prospect drops off — next step unclear', selfService: 'Progress bar + sticky cart keep orientation' },
] as const;

export const salesFunnelRoiFooter =
  'Download the full framing sheet (PDF) for a printable version to share with a partner or accountant.';

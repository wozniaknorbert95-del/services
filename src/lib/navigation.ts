// ============================================================================
// NAVIGATION MANIFEST — single source for header, footer, solutions dropdown.
// Binding: docs/strategy/site-map.md §2, conversion-pipeline.md §3
// Copy labels: src/content/conversion-copy.ts (CTAS)
// Routes: src/lib/constants.ts (ROUTES)
// ============================================================================

import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { PRICING_MATRIX } from '@/content/pricing';
import { CTAS } from '@/content/conversion-copy';

export interface NavLink {
  label: string;
  href: string;
}

export interface SolutionNavItem extends NavLink {
  badge?: string;
  price?: string;
}

export interface HeaderNavItem extends NavLink {
  hasDropdown?: boolean;
}

/** Header: max 5 items + CTA — site-map §2 */
export const HEADER_NAV: readonly HeaderNavItem[] = [
  { label: 'Systems & Results', href: ROUTES.results },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Solutions', href: ROUTES.solutions, hasDropdown: true },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: "Founder's System", href: ROUTES.founder },
] as const;

export const SOLUTIONS_NAV: readonly SolutionNavItem[] = [
  {
    label: 'Inbox Killer',
    href: ROUTES.inboxKiller,
    badge: 'Start here',
    price: PRICING_MATRIX.inboxKiller.range,
  },
  {
    label: 'Web Upgrade',
    href: ROUTES.webUpgrade,
    badge: 'Conversion site',
    price: PRICING_MATRIX.webUpgrade.range,
  },
  {
    label: 'Sales Funnel / Wizard Cash Engine',
    href: ROUTES.salesFunnel,
    badge: 'Quote + checkout',
    price: PRICING_MATRIX.salesFunnel.range,
  },
  {
    label: 'Lead Magnet Game',
    href: ROUTES.leadMagnetGame,
    badge: 'Acquisition',
    price: PRICING_MATRIX.leadMagnetGame.range,
  },
  {
    label: 'Managed Automation',
    href: ROUTES.managedAutomation,
    badge: 'Monthly',
    price: PRICING_MATRIX.managedAutomation.range,
  },
] as const;

/** Footer solutions = hub + product ladder */
export const FOOTER_SOLUTIONS: readonly NavLink[] = [
  { label: 'All solutions', href: ROUTES.solutions },
  ...SOLUTIONS_NAV.map(({ label, href }) => ({ label, href })),
] as const;

export const FOOTER_COMPANY: readonly NavLink[] = [
  { label: 'Systems & Results', href: ROUTES.results },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'Trust & Safety', href: ROUTES.trust },
  { label: "Founder's System", href: ROUTES.founder },
  { label: 'About', href: ROUTES.about },
  { label: 'Blog', href: ROUTES.blog },
] as const;

export const FOOTER_ARTEFACTS: readonly NavLink[] = [
  { label: 'Automation Map sample', href: ARTEFACTS.automationMapSample },
  { label: 'Data safety playbook', href: ARTEFACTS.dataSafetyPlaybook },
  { label: 'LOS diagram', href: `${ROUTES.resultsOwnerEcosystem}#los` },
  { label: 'Handover policy', href: ARTEFACTS.maintenanceHandover },
] as const;

export const FOOTER_LEGAL: readonly NavLink[] = [
  { label: 'Privacy', href: ROUTES.legal },
  { label: 'Terms', href: ROUTES.legal },
  { label: 'Contact', href: `mailto:hello@flexgrafik.nl` },
] as const;

export const HEADER_CTA = {
  label: CTAS.bookAutomationMap,
  href: ROUTES.bookDiscovery,
} as const;

/** @deprecated Use HEADER_NAV */
export const NAV_ITEMS = HEADER_NAV;

/** @deprecated Use SOLUTIONS_NAV */
export const SOLUTION_DROPDOWN = SOLUTIONS_NAV;

// ============================================================================
// NAVIGATION MANIFEST — single source for header, footer, solutions dropdown.
// Binding: docs/strategy/site-map.md §5–6, conversion-pipeline.md §6
// Copy labels: src/content/conversion-copy.ts (CTAS)
// Routes: src/lib/constants.ts (ROUTES)
// ============================================================================

import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';

export interface NavLink {
  label: string;
  href: string;
}

export interface SolutionNavItem extends NavLink {
  badge?: string;
}

export interface HeaderNavItem extends NavLink {
  hasDropdown?: boolean;
}

/** Header: max 5 items + CTA — conversion-pipeline.md §6 */
export const HEADER_NAV: readonly HeaderNavItem[] = [
  { label: 'Systems', href: ROUTES.results },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Solutions', href: ROUTES.solutions, hasDropdown: true },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'About', href: ROUTES.about },
] as const;

export const SOLUTIONS_NAV: readonly SolutionNavItem[] = [
  { label: 'Inbox Killer', href: ROUTES.inboxKiller, badge: 'Start here' },
  { label: 'Sales Funnel', href: ROUTES.salesFunnel },
  { label: 'Web Upgrade', href: ROUTES.webUpgrade },
  { label: 'Lead Magnet Game', href: ROUTES.leadMagnetGame },
  { label: 'Managed Automation', href: ROUTES.managedAutomation, badge: 'MRR' },
] as const;

/** Footer solutions = hub + product ladder */
export const FOOTER_SOLUTIONS: readonly NavLink[] = [
  { label: 'All solutions', href: ROUTES.solutions },
  ...SOLUTIONS_NAV.map(({ label, href }) => ({ label, href })),
] as const;

export const FOOTER_COMPANY: readonly NavLink[] = [
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Systems & results', href: ROUTES.results },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'Trust & Safety', href: ROUTES.trust },
  { label: 'About', href: ROUTES.about },
  { label: "The Founder's System", href: ROUTES.founder },
  { label: 'Blog', href: ROUTES.blog },
] as const;

export const FOOTER_ARTEFACTS: readonly NavLink[] = [
  { label: 'Automation Map sample', href: ARTEFACTS.automationMapSample },
  { label: 'Data safety playbook', href: ARTEFACTS.dataSafetyPlaybook },
  { label: 'Maintenance handover', href: ARTEFACTS.maintenanceHandover },
] as const;

export const FOOTER_LEGAL: readonly NavLink[] = [
  { label: 'Legal', href: ROUTES.legal },
] as const;

export const HEADER_CTA = {
  label: CTAS.bookAutomationMap,
  href: ROUTES.bookDiscovery,
} as const;

/** @deprecated Use HEADER_NAV */
export const NAV_ITEMS = HEADER_NAV;

/** @deprecated Use SOLUTIONS_NAV */
export const SOLUTION_DROPDOWN = SOLUTIONS_NAV;

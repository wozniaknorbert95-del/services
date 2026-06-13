export const SITE_NAME = 'Quietforge';
export const SITE_URL = 'https://services.flexgrafik.nl';
export const EMAIL = 'hello@flexgrafik.nl';
export const CREATOR = 'Norbert Wozniak';

export const ROUTES = {
  home: '/',
  solutions: '/solutions/',
  inboxKiller: '/solutions/inbox-killer/',
  webUpgrade: '/solutions/web-upgrade/',
  salesFunnel: '/solutions/sales-funnel/',
  leadMagnetGame: '/solutions/lead-magnet-game/',
  managedAutomation: '/solutions/managed-automation/',
  pricing: '/pricing/',
  howItWorks: '/how-it-works/',
  results: '/results/',
  resultsInboxKiller: '/results/inbox-killer/',
  resultsAgentOrchestrator: '/results/agent-orchestrator/',
  resultsSalesFunnel: '/results/sales-funnel/',
  resultsAdvisoryModernisation: '/results/advisory-modernisation/',
  about: '/about/',
  blog: '/blog/',
  bookDiscovery: '/book-discovery/',
  legal: '/legal/',
} as const;

export const ARTEFACTS = {
  automationMapSample: '/artefacts/automation-map-sample.pdf',
  dataSafetyPlaybook: '/artefacts/data-safety-playbook.pdf',
  maintenanceHandover: '/artefacts/maintenance-handover.pdf',
} as const;

export const NAV_ITEMS = [
  { label: 'Solutions', href: ROUTES.solutions, hasDropdown: true },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Results', href: ROUTES.results },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'About', href: ROUTES.about },
  { label: 'Blog', href: ROUTES.blog },
];

export const SOLUTION_DROPDOWN = [
  { label: 'Inbox Killer', href: ROUTES.inboxKiller, badge: 'Start here' },
  { label: 'Web Upgrade', href: ROUTES.webUpgrade },
  { label: 'Sales Funnel', href: ROUTES.salesFunnel },
  { label: 'Lead Magnet Game', href: ROUTES.leadMagnetGame },
  { label: 'Managed Automation', href: ROUTES.managedAutomation, badge: 'MRR' },
];

export const PRICING = {
  discovery: 290,
  inboxKiller: { from: 1200 },
  webUpgrade: { from: 1800 },
  salesFunnel: { from: 2400 },
  leadMagnetGame: { from: 2200 },
  bundleGrowth: { from: 3900 },
  bundlePro: { from: 6500 },
  care: 99,
  manage: 349,
  partner: 890,
} as const;

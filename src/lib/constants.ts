export const SITE_NAME = 'Quietforge';
export const SITE_URL = 'https://quietforge.flexgrafik.nl';

/** Lowercase typographic lockup — header/footer wordmark */
export const BRAND_WORDMARK = 'quietforge';

export const BRAND_LOGO = {
  src: '/brand/quietforge-logo.png',
  alt: 'Quietforge — Conversion Systems Architect',
  width: 1024,
  height: 1024,
} as const;
export const EMAIL = 'hello@flexgrafik.nl';
export const CREATOR = 'Norbert Wozniak';

/** WhatsApp discovery — override via NEXT_PUBLIC_WHATSAPP_URL in Vercel if needed */
export const WHATSAPP = {
  url:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    'https://wa.me/31687286151?text=Hi%20Norbert%2C%20I%27d%20like%20to%20explore%20conversion%20systems%20for%20my%20business.',
  label: 'Chat on WhatsApp',
  offlineFallback: `mailto:${EMAIL}?subject=WhatsApp%20unavailable`,
} as const;

export const LINKEDIN_URL = 'https://www.linkedin.com/in/norbert-wozniak-172b76367';
export const FLEXGRAFIK_URL = 'https://flexgrafik.nl';

/** External social / connect links — footer, about, JSON-LD sameAs */
export const SOCIAL_LINKS = [
  { label: 'LinkedIn profile', href: LINKEDIN_URL, icon: 'linkedin' as const },
  { label: 'FlexGrafik — live proof', href: FLEXGRAFIK_URL, icon: 'globe' as const },
  { label: WHATSAPP.label, href: WHATSAPP.url, icon: 'whatsapp' as const },
] as const;

export const ROUTES = {
  home: '/',
  solutions: '/solutions/',
  inboxKiller: '/solutions/inbox-killer/',
  webUpgrade: '/solutions/web-upgrade/',
  salesFunnel: '/solutions/sales-funnel/',
  leadMagnetGame: '/solutions/lead-magnet-game/',
  managedAutomation: '/solutions/managed-automation/',
  pricing: '/pricing/',
  trust: '/trust/',
  howItWorks: '/how-it-works/',
  results: '/results/',
  resultsInboxKiller: '/results/inbox-killer/',
  resultsAgentOrchestrator: '/results/agent-orchestrator/',
  resultsSalesFunnel: '/results/sales-funnel/',
  resultsAdvisoryModernisation: '/results/advisory-modernisation/',
  resultsOwnerEcosystem: '/results/owner-ecosystem/',
  resultsJadziaCoi: '/results/jadzia-coi/',
  resultsOwnerEcosystemWhyVcms: '/results/owner-ecosystem/#why-vcms',
  resultsLeadMagnet: '/results/lead-magnet/',
  resultsWhatsappPilot: '/results/whatsapp-discovery-pilot/',
  about: '/about/',
  founder: '/founder/',
  blog: '/blog/',
  bookDiscovery: '/book-discovery/',
  legal: '/legal/',
  leadMagnet: '/artefacts/automation-map-sample.pdf',
} as const;

/** Owner ecosystem — external live demos */
export const EXTERNAL = {
  zzpackageWizard: 'https://zzpackage.flexgrafik.nl/',
  leadMagnetGame: 'https://app.flexgrafik.nl/',
} as const;

export const ARTEFACTS = {
  automationMapSample: '/artefacts/automation-map-sample.pdf',
  dataSafetyPlaybook: '/artefacts/data-safety-playbook.pdf',
  maintenanceHandover: '/artefacts/maintenance-handover.pdf',
} as const;


export const PRICING = {
  discovery: 290,
  inboxKiller: { from: 1200, to: 4800 },
  webUpgrade: { from: 1800, to: 5500 },
  salesFunnel: { from: 2400, to: 6500 },
  leadMagnetGame: { from: 2200, to: 4500 },
  bundleGrowth: { from: 3900, to: 7500 },
  bundlePro: { from: 6500, to: 12000 },
  care: 99,
  manage: 349,
  partner: 890,
  budgetQualificationFloor: 1200,
} as const;

export const PRODUCT_TIER_RANGES = [
  { name: 'Inbox Killer', from: PRICING.inboxKiller.from, to: PRICING.inboxKiller.to },
  { name: 'Sales Funnel', from: PRICING.salesFunnel.from, to: PRICING.salesFunnel.to },
  { name: 'Web Upgrade', from: PRICING.webUpgrade.from, to: PRICING.webUpgrade.to },
  { name: 'Managed Automation', from: PRICING.manage, to: PRICING.partner },
] as const;

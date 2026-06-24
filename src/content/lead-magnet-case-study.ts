// Gamified lead system — portfolio copy (client-facing).
// Sync: app.flexgrafik.nl/docs/portfolio/LEAD-MAGNET-PORTFOLIO-PACK.md

export const LEAD_MAGNET_SLUG = 'lead-magnet' as const;

/** Single portfolio name — H1, OG, Results card */
export const leadMagnetPortfolioTitle = 'Gamified lead system for Dutch ZZP';

/** In-product experience name — supporting only (gallery captions) */
export const leadMagnetExperienceName = 'Bouwplaats Chaos';

export const leadMagnetDisplayName = leadMagnetPortfolioTitle;

export const leadMagnetCaseMeta = {
  title: 'Case study — Gamified lead system',
  description:
    'How a gamified acquisition system for Dutch ZZP contractors replaces static forms with play, rewards, and a tracked handoff to self-service quoting.',
  openGraphTitle: 'Case study — Gamified lead system for Dutch ZZP',
  openGraphDescription:
    'Challenge → insight → solution: experience-first lead capture with reward ladder, leaderboard, and wizard bridge. Live proof.',
  twitterDescription:
    'We turned a static lead magnet into a gamified acquisition system — play, progress, reward, then self-service quoting.',
  ogAlt: 'Case study — Gamified lead system for Dutch ZZP',
} as const;

export const leadMagnetHero = {
  audience:
    'Built for Dutch ZZP contractors in trades and services — visitors who ignore forms but will invest five minutes when there is a clear reward.',
  outcome:
    'Experience-first capture hands warm leads to the self-service quoting wizard — with full funnel tracking, not a cold contact form on landing.',
  supporting: `Live experience: ${leadMagnetExperienceName} on app.flexgrafik.nl`,
} as const;

export const leadMagnetSalesOneLiner =
  'We turned a static lead magnet into a gamified acquisition system for Dutch ZZP — play, progress, reward, then hand off to self-service quoting.';

export const leadMagnetChallenge = {
  title: 'Challenge',
  body: 'A standard landing page with a form at the top does not engage ZZP audiences. Traffic arrives, scans, and leaves — no context, no commitment, no reason to return.',
} as const;

export const leadMagnetInsight = {
  title: 'Insight',
  body: 'A game loop with a visible reward ladder increases session starts, time on site, and return visits before you ask for contact. The ask lands after investment — not on page load.',
} as const;

export const leadMagnetSolution = {
  title: 'Solution',
  body: 'A branded lead magnet game with a register gate, five progression acts, tiered rewards, a monthly leaderboard season, and a coupon bridge into the self-service wizard — every step instrumented for measurement.',
} as const;

export type LeadMagnetScopePillar = {
  title: string;
  deliverable: string;
  proof?: string;
};

export const leadMagnetScopeOfWork: readonly LeadMagnetScopePillar[] = [
  {
    title: 'UX audit & flow refactor',
    deliverable:
      'Entry gate before play, mobile thumb-zone layout, and funnel-step tracking so you can see where players drop.',
    proof: 'Register → play → reward → capture → wizard handoff',
  },
  {
    title: 'Copy system & naming discipline',
    deliverable:
      'One portfolio name for buyers, Dutch in-product copy for players, English case study for decision-makers.',
    proof: 'Reward ladder labels tied to wizard tiers',
  },
  {
    title: 'Visual system — dark premium utility',
    deliverable:
      'Industrial framing, consistent hazard borders, product-grade UI — less arcade gimmick, more credible B2B tool.',
    proof: 'Unified main menu, leaderboard, and conversion panels',
  },
  {
    title: 'Technical architecture',
    deliverable:
      'Custom Canvas engine, PWA install prompt, automated deploy pipeline, and a GA4 event map across the full funnel.',
    proof: 'Production on app.flexgrafik.nl · GitHub Actions deploy',
  },
];

export type LeadMagnetOutcomeEvent = {
  event: string;
  funnelStep: string;
  meaning: string;
};

/** Sync with app.flexgrafik.nl/src/services/AnalyticsManager.ts */
export const leadMagnetOutcomeEvents: readonly LeadMagnetOutcomeEvent[] = [
  { event: 'game_start', funnelStep: 'Start', meaning: 'Player begins a session' },
  { event: 'level_complete', funnelStep: 'Progress', meaning: 'Act cleared — reward tier unlocked' },
  { event: 'lead_registered', funnelStep: 'Register', meaning: 'Contact details captured at gate' },
  { event: 'lead_conversion', funnelStep: 'Capture', meaning: 'Email submitted after gameplay' },
  { event: 'leaderboard_view', funnelStep: 'Return', meaning: 'Player opens season ranking' },
  { event: 'wizard_click_from_leaderboard', funnelStep: 'Handoff', meaning: 'Warm click to self-service wizard' },
  { event: 'coupon_copied', funnelStep: 'Reward', meaning: 'Discount code taken into checkout flow' },
  { event: 'app_installed', funnelStep: 'Retention', meaning: 'PWA added to home screen' },
  { event: 'session_duration', funnelStep: 'Engagement', meaning: 'Time and score logged per visit' },
];

export const leadMagnetOutcomeDisclaimer =
  'Conversion rates available on request — funnel instrumentation is live in production. No fabricated percentages on this page.';

export const leadMagnetImplementation = {
  summary:
    'React and Vite power a custom Canvas engine — no third-party game framework. Cloudflare Turnstile on entry, leaderboard API for seasons, PWA install support, deploy via GitHub Actions.',
  stack: ['React 19', 'Vite 6', 'Custom Canvas', 'PWA', 'GA4 / GTM', 'GitHub Actions'] as const,
} as const;

export const leadMagnetFlowDiagramAlt =
  'Funnel diagram: visitor registers, plays five acts, earns reward, captures contact, routes to self-service wizard';

/** CapCut storyboard — Dowódca exports 45s; set videos.leadMagnet in proof.ts when ready */
export const leadMagnetVideoStoryboard = [
  { beat: '01', duration: '3s', shot: 'Static form vs empty engagement — the problem' },
  { beat: '02', duration: '10s', shot: 'Start screen → gameplay loop' },
  { beat: '03', duration: '8s', shot: 'Reward overlay → contact capture moment' },
  { beat: '04', duration: '8s', shot: 'Leaderboard → wizard CTA' },
  { beat: '05', duration: '6s', shot: 'Outcome line + portfolio CTA' },
] as const;

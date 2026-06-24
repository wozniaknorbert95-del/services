// ============================================================================
// CONVERSION COPY — hero, positioning, objections (binding strings).
// Source: docs/strategy/marketing-strategy.md + inspiracja pro.md BLOK 2
// ============================================================================

export const POSITIONING = {
  label: 'Conversion Systems Architect',
  antiPositioning: 'Not a web designer. Not an AI chatbot builder.',
} as const;

export const HERO = {
  headline: 'Conversion systems that qualify leads, automate bookings and reduce admin work.',
  subline:
    'Built with custom workflows, AI assistants and automation logic — with you in the loop on every send.',
  proofLine:
    'Quietforge deploys the same governed stack that runs FlexGrafik — my registered company. Wizard checkout, game leads, portal, Agent OS and VCMS supervision are live; COI automation is on the roadmap with human gates throughout.',
  microTrust:
    'Quietforge deploys the same architecture that runs FLEXGRAFIK — my registered company, not a demo.',
  primaryCta: 'Book your Automation Map',
  secondaryCta: 'See the systems',
  secondaryHref: '/results/',
  wizardCta: 'Try the wizard (2 min)',
  wizardHref: 'https://zzpackage.flexgrafik.nl/',
  whatsappCta: 'Quick question? WhatsApp',
} as const;

export const WHY_THIS_WORKS_PILLARS = [
  {
    title: 'Built on a live system, not a template.',
    description:
      'Every module is drawn from an ecosystem already running a real business — proven before it reaches you.',
  },
  {
    title: 'Delivered by an AI workforce.',
    description:
      "The heavy lifting runs on systems I built, not billable hours. That's why delivery is faster, leaner, and priced for a business your size.",
  },
  {
    title: 'You stay in control.',
    description:
      'Human-in-the-loop by design: nothing sends, publishes or deploys without your approval.',
  },
] as const;

export const OBJECTIONS = [
  {
    objection: 'Price',
    rebuttal: '€290 is a filter, not a hidden cost — you get a written Automation Map either way.',
  },
  {
    objection: 'Trust',
    rebuttal: 'No fake logos or fake clients — see my own ecosystem running in production.',
  },
  {
    objection: 'Timing',
    rebuttal: 'First deploy in ~2 weeks vs typical 3-month agency cycles.',
  },
  {
    objection: 'Scope creep',
    rebuttal: 'The wizard scope-locks the brief before any code is written.',
  },
] as const;

export const BUDGET_QUALIFICATION =
  'If your budget is below €1,200, start with the Automation Map to scope before committing.';

export const WEBSITE_ONLY_EXCEPTION =
  'If you only need a brochure website with no qualification or automation, this is not the right fit — and I will tell you before you spend money.';

export const SITE_GOAL =
  'Can this person design and deploy a system that improves my business?';

export const SPEARHEAD = {
  eyebrow: 'spearhead',
  headline: 'Wizard Cash Engine —',
  headlineAccent: 'live checkout proof, not a slide deck.',
  body:
    'The self-service configurator runs on Mollie checkout today — 9 UI screens, open pricing, human approval on every deploy. This is the revenue layer I run before selling automation.',
  bullets: [
    'Live on zzpackage.flexgrafik.nl — try it in two minutes.',
    '200+ SKUs, scored leads, calm order form or designer handoff.',
    'Same stack Quietforge deploys for SMB clients — governed, not templated.',
  ],
  primaryCta: 'Try the wizard (2 min)',
  primaryHref: 'https://zzpackage.flexgrafik.nl/',
  secondaryCta: 'Inbox Killer — B2B product',
  secondaryHref: '/solutions/inbox-killer/',
  terminalCommand: 'wizard.checkout --live zzpackage',
  terminalLines: [
    '9 UI screens · 7 business decision stages',
    'Mollie checkout · open pricing',
    'HITL active: deploy manual only',
  ],
} as const;

export const CTAS = {
  bookAutomationMap: 'Book your Automation Map',
  seeSystems: 'See the systems',
  seeResults: 'See all results',
} as const;

export const ABOUT = {
  metaTitle: 'About — Conversion Systems Architect',
  heroTitle: 'Conversion Systems Architect for businesses that need systems, not slides.',
  heroIntro:
    "I'm Norbert Wozniak — I design conversion systems that qualify leads, automate bookings and reduce admin work, with you in the loop on every critical step. Everything here is proven on a live operation before it reaches a client.",
  storyTitle: 'FLEXGRAFIK is the proof — Quietforge is how I deploy it for you',
  storyBody:
    'FLEXGRAFIK is my Netherlands-registered print and design company — and the live operating environment where I built and run this entire stack: multi-agent orchestration, VCMS governance, a 200+ SKU self-service wizard, inbox automation, and a lead-generation game. It is not a demo or a case study mock-up — it is the business that pays the bills while the software runs it. Quietforge is the consulting arm: I deploy the same architecture for Dutch ZZP and SME owners, with human-in-the-loop on every critical step.',
  moatTitle: 'What makes this different',
  moatPillars: [
    {
      title: 'I build my own AI workforce.',
      body: "Most of the delivery runs on systems I built — not on billable hours. That's why I'm faster, leaner, and can deliver architect-level work at a small-business price.",
    },
    {
      title: 'Branding, UX and automation under one roof.',
      body: "From the logo to the back-end, it's one coherent system — not five vendors who don't talk to each other.",
    },
    {
      title: 'No hype — only systems that work, with you in control.',
      body: "I don't sell buzzwords. I sell systems that earn their keep, with human-in-the-loop at every critical step.",
    },
  ],
  whyTitle: 'Why this matters for you',
  whyBody:
    'You get the kind of architecture usually reserved for big budgets — designed around how your work really flows, at a price a small business understands, with full control over what the system does.',
  principlesTitle: 'How I work',
  principles: [
    'Outcome first. I measure success in your time saved and clients won, not features shipped.',
    'Built to last. Lean, maintainable systems — no bloat, no lock-in.',
    'You decide. Nothing happens without your approval.',
    'Honest numbers. Clear pricing, clear ROI, no surprises.',
  ],
} as const;

export const FOOTER = {
  tagline:
    'Conversion systems for NL small businesses — qualify leads, reduce admin, you stay in control.',
  portfolioPrompt: 'Building something bigger?',
  portfolioLink: 'See the full architecture →',
  portfolioHref: 'https://portfolio.flexgrafik.nl',
  columnSolutions: 'Solutions',
  columnCompany: 'Company',
  columnGetStarted: 'Get started',
  columnResources: 'Resources',
} as const;

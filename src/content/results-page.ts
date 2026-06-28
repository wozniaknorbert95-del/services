// Results hub (/results/) — hero + metadata SSoT

export const resultsPageHero = {
  eyebrow: 'Proof',
  h1: 'Live in my business — not mock-ups.',
  lead:
    'The conversion stack runs in production on my Netherlands print business: self-service checkout, lead capture, and governed automation. Tech is LIVE and dogfooded — first paid orders are waiting on print production setup, not missing software. Same architecture I deploy for SMB clients; names withheld where anonymised.',
  hint: 'Try the wizard on zzpackage.flexgrafik.nl — the checkout path is live today.',
} as const;

export const resultsPageMeta = {
  title: 'Results — what changes',
  description:
    'Live conversion stack in a real print business — checkout, capture, and automation dogfooded in production. Process-proof case studies; no invented revenue claims.',
  openGraphDescription:
    'Tech LIVE in my own business — first paid orders pending print production setup, not missing software. Process-proof case studies.',
  ogAlt: 'Results — Live in my business, not mock-ups',
  twitterDescription: 'Live systems dogfooded in production — honest stage, process-proof case studies.',
} as const;

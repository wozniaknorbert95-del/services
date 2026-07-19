// Results hub (/results/) — hero + metadata SSoT

export const resultsPageHero = {
  eyebrow: 'Proof',
  h1: 'Live checkout, capture and ops — dogfooded in production.',
  lead:
    'The conversion stack runs inside my Netherlands print business: Wizard checkout with open pricing, complex quote & design intake (PARTIAL), lead capture, and a supervised operations layer. Same architecture Quietforge deploys for SMB clients — with named limitations, not invented revenue.',
  hint: 'Try the Wizard or Design Intake on zzpackage.flexgrafik.nl — then book an Automation Map.',
} as const;

export const resultsPageMeta = {
  title: 'Results — what changes',
  description:
    'Live Wizard checkout, design intake proof, lead capture and governed ops — dogfooded in a real print business. Process-proof case studies; no invented revenue claims.',
  openGraphDescription:
    'Live Wizard + design intake + ops spine in production. Process-proof case studies with clear limitations.',
  ogAlt: 'Results — Live conversion systems in production',
  twitterDescription: 'Live Wizard, design intake and ops proof — honest stage, process-proof case studies.',
} as const;

/** LI-R10 landing block for INSPIRE / complex-quote outbound traffic */
export const resultsInspireLanding = {
  eyebrow: 'Complex quote · PARTIAL',
  title: 'Design Intake → visual direction → priced Wizard',
  lead:
    'Prospects describe vehicle branding, confirm a brief, see Standard/Premium inspiration mockups, then continue into checkout. Supervised lab proof — mockups are not print-ready finals.',
  ctaDemo: 'Open Design Intake',
  ctaCase: 'Wizard case study',
  ctaMap: 'Book Automation Map',
} as const;

export interface CaseStudy {
  slug?: string;
  number: string;
  title: string;
  meta: string;
  context: string;
  system: string;
  real: string;
  measurement: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'inbox-killer',
    number: '01',
    title: 'The self-running back-office',
    meta: 'Inbox Killer · live',
    context:
      'A small NL service business drowning in mixed email — leads, invoices, noise in one pile.',
    system:
      'An agent that reads the inbox, classifies (lead / client / invoice / noise) and drafts replies. classify → plan → diff → approve. Nothing sends without approval.',
    real: 'Live mailbox, 100+ messages/scan, human-in-the-loop on every send.',
    measurement: 'Estimate ~ a few hours/week — confirmed per client.',
  },
  {
    number: '02',
    title: 'A multi-agent orchestrator',
    meta: 'Agent engine · production',
    context:
      'Coordinating a whole business — orders, content, CRM — without spreadsheets everywhere.',
    system:
      'A FastAPI + LangGraph engine on a VPS, governed by a single source of truth, agent cards and fixed rules (planner → coder → tester → review).',
    real: 'Production engine, SSoT architecture, guardrails, 12-step workflow.',
    measurement: 'Process proof — architecture diagram on request.',
  },
  {
    number: '03',
    title: 'Self-service quote & onboarding',
    meta: 'Sales Funnel Engine',
    context: 'The same "what do you charge?" questions answered by hand, all day.',
    system:
      'A 7-step configurator with open pricing and payment — qualifies, quotes and books without a phone call.',
    real: 'Working funnel — pick options → upload logo → see price → pay.',
    measurement: 'Fewer manual quote emails (to be quantified).',
  },
  {
    number: '04',
    title: 'Modernisation + AI assistant for an advisory firm',
    meta: 'Web Upgrade + assistant · anonymised',
    context:
      'A Rotterdam accounting office with a strong offer but an outdated site and no lead capture.',
    system:
      'Site modernisation + a lead-qualifying AI assistant (qualification only, no tax advice) + a human-approved content engine, with a signed data-processing agreement.',
    real: 'Full scope designed, security & AVG layer specified, staged delivery.',
    measurement: 'In delivery — outcomes reported once live.',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

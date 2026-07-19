// Inbox Killer case study copy — B2B product (not Wizard spearhead, not jadzia-core definition)
// Measurement authority: src/content/proof.ts metrics.msgsPerScan

import { PRICING, ROUTES } from '@/lib/constants';
import { PRICING_MATRIX } from './pricing';
import { metrics } from '@/content/proof';

export const INBOX_KILLER_SLUG = 'inbox-killer' as const;

export const inboxKillerDisplayName = 'Inbox Killer — lead qualification system';

export const inboxKillerCaseMeta = {
  title: 'Case study — Inbox Killer',
  description:
    'How an inbox workflow reads mail, classifies intent into lanes, drafts replies, and stops at a human approval gate. Test-environment process proof with a downloadable flow diagram.',
  openGraphTitle: 'Case study — Inbox Killer',
  openGraphDescription:
    'read → classify → draft → approve → send. Test-environment process proof with human-in-the-loop on every outbound.',
  twitterDescription:
    'Inbox classification and reply drafting with human approval gates — B2B product, not auto-send.',
  ogAlt: 'Case study — Inbox Killer classification flow',
} as const;

export const inboxKillerSolutionBridge = {
  eyebrow: '// B2B product',
  title: 'Deploy Inbox Killer for your business',
  lead: `Separate product module — same HITL architecture Quietforge deploys for clients. Scoped builds from €${PRICING.inboxKiller.from.toLocaleString()}.`,
  cta: 'See the solution page →',
  href: ROUTES.inboxKiller,
} as const;

export const inboxKillerJadziaBridge = {
  eyebrow: '// COI patterns',
  title: 'Built on the same operating intelligence patterns as Jadzia COI',
  lead:
    'Inbox Killer is a client-facing B2B product — not the jadzia-core repo. It shares human gates, lane logic and supervised automation with the COI layer documented separately.',
  cta: 'Jadzia COI case study →',
  href: ROUTES.resultsJadziaCoi,
} as const;

export const inboxKillerBeforeItems = [
  'Manual inbox triage every morning — leads mixed with newsletters and noise',
  'Reply drafting started from scratch for every thread',
  'No consistent lanes for lead vs client vs invoice mail',
  'Risk of auto-send tools firing without owner review',
] as const;

export const inboxKillerAfterItems = [
  `Test-environment process run — ${metrics.msgsPerScan} messages classified per scan`,
  'Lead, client, invoice, and noise lanes with priority surfacing',
  'Draft replies ready for edit and approval before send',
  'Human approval gate on every outbound — architecture, not a toggle',
] as const;

export type InboxKillerFlowStep = {
  step: string;
  title: string;
  detail: string;
  highlight?: boolean;
};

/** Five-step flow — matches gratka inbox-killer-flow.svg */
export const inboxKillerFlowSteps: readonly InboxKillerFlowStep[] = [
  {
    step: '01',
    title: 'Read',
    detail: 'Agent connects via secure OAuth and polls the mailbox on a defined schedule.',
  },
  {
    step: '02',
    title: 'Classify',
    detail: 'Each message is sorted into lead, client, invoice, or noise lanes with scoring.',
  },
  {
    step: '03',
    title: 'Draft',
    detail: 'AI drafts replies in your tone. You edit or discard — drafts never auto-send.',
  },
  {
    step: '04',
    title: 'Approve',
    detail: 'Outbound mail waits at a human gate. Nothing leaves without your explicit OK.',
  },
  {
    step: '05',
    title: 'Send',
    detail: 'Approved replies send and log to the audit trail. Overrides train the lanes.',
    highlight: true,
  },
] as const;

export const inboxKillerArchitectureAlt =
  'Inbox Killer flow: read mailbox, classify into lanes, draft reply, await human approval, send';

export const inboxKillerArchitectureIntro =
  'One page you can forward: what happens from a new email to an approved send. The approval gate is the architecture — not an optional safety setting you might forget to enable.';

export const inboxKillerBuildDescription =
  'Five steps under the hood — demonstrated as a test-environment process proof, not a production-mailbox claim.';

export const inboxKillerStack = [
  'Gmail / Microsoft 365 OAuth',
  'Make.com',
  'OpenAI API',
  'Webhook routing',
  'Human approval gate',
] as const;

export type InboxKillerLane = {
  lane: string;
  detail: string;
};

export const inboxKillerLanesIntro =
  'Four classification lanes — qualitative routing only, no invented conversion rates.';

export const inboxKillerLanes: readonly InboxKillerLane[] = [
  {
    lane: 'Lead',
    detail: 'New enquiries and quote requests — surfaced first for response.',
  },
  {
    lane: 'Client',
    detail: 'Active project threads and follow-ups from known customers.',
  },
  {
    lane: 'Invoice',
    detail: 'Billing, payments and supplier mail — separated from sales noise.',
  },
  {
    lane: 'Noise',
    detail: 'Newsletters, notifications and low-intent mail — archived with override rules.',
  },
] as const;

// ---------------------------------------------------------------------------
// Solutions ladder page — /solutions/inbox-killer/ (E-5b SSoT)
// Tone: owner pain → system → effect. Case study = process proof.
// ---------------------------------------------------------------------------

export const inboxKillerSolutionMeta = {
  title: 'Inbox Killer — Lead Qualification System',
  description:
    'Your inbox sorted, drafted, and gated. Inbox Killer reads mail, classifies intent, drafts replies, and waits for your approval before anything sends.',
  openGraphTitle: 'Inbox Killer — Lead Qualification System | Quietforge',
  openGraphDescription:
    'Lead qualification system for busy owners: classify lanes, draft replies, human approval on every send.',
  twitterDescription:
    'Your inbox sorted, drafted, and gated — with you in the loop on every send.',
  ogAlt: 'Inbox Killer — Lead Qualification System',
} as const;

export const inboxKillerSolutionTitle =
  'Inbox Killer — your inbox sorted, drafted, and gated.';

export const inboxKillerSolutionProblem =
  'Your inbox is where leads arrive, clients follow up, and invoices hide — but most owners spend mornings sorting noise instead of closing work. Miss one hot lead and the rest of the week is catch-up.';

export const inboxKillerSolutionSystemItems = [
  {
    title: inboxKillerFlowSteps[0].title,
    body: 'Secure OAuth connection to Gmail or Microsoft 365. The agent scans new mail on a schedule you control.',
  },
  {
    title: inboxKillerFlowSteps[1].title,
    body: 'Every message lands in a lane: lead, client, invoice, or noise — so you see what pays first.',
  },
  {
    title: inboxKillerFlowSteps[2].title,
    body: 'Replies are drafted in your tone. You edit, approve, or discard — nothing auto-sends.',
  },
  {
    title: inboxKillerFlowSteps[3].title,
    body: 'Human-in-the-loop gate on every outbound. The architecture stops at your yes, not a setting.',
  },
] as const;

export const inboxKillerSolutionEffectBefore = [
  'Mornings lost triaging newsletters, spam, and low-intent mail.',
  'Hot leads buried under operational noise.',
  'Reply delays because drafting starts from zero every time.',
  'No audit trail of what was sent and why.',
] as const;

export const inboxKillerSolutionEffectAfter = [
  'Classification lanes surface leads and clients first.',
  'Drafts ready when you open the inbox — you stay in control.',
  'Noise archived automatically with rules you can override.',
  `Full approval log — nothing sends without your explicit OK.`,
] as const;

export function inboxKillerPriceFromLabel(): string {
  return PRICING_MATRIX.inboxKiller.range;
}

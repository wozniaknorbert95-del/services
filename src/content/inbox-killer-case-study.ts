// Inbox Killer case study copy — B2B product (not Wizard spearhead, not jadzia-core definition)
// Measurement authority: src/content/proof.ts metrics.msgsPerScan

import { PRICING, ROUTES } from '@/lib/constants';
import { metrics } from '@/content/proof';

export const INBOX_KILLER_SLUG = 'inbox-killer' as const;

export const inboxKillerDisplayName = 'Inbox Killer — lead qualification system';

export const inboxKillerCaseMeta = {
  title: 'Case study — Inbox Killer',
  description:
    'How a live inbox agent reads mail, classifies intent into lanes, drafts replies, and stops at a human approval gate. Process-proof case study with downloadable flow diagram.',
  openGraphTitle: 'Case study — Inbox Killer',
  openGraphDescription:
    'read → classify → draft → approve → send. Live mailbox proof with human-in-the-loop on every outbound.',
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
  `Mailbox scanned on schedule — ${metrics.msgsPerScan} messages classified per run in production`,
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
  'Five steps under the hood — the same flow running in FLEXGRAFIK production mail.';

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

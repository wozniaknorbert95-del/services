import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import Button from '@/components/ui/Button';

const SLUG = 'inbox-killer';

const BEFORE_ITEMS = [
  'Manual inbox triage every morning — leads mixed with newsletters and noise',
  'Reply drafting started from scratch for every thread',
  'No consistent lanes for lead vs client vs invoice mail',
  'Risk of auto-send tools firing without owner review',
];

const AFTER_ITEMS = [
  'Mailbox scanned on schedule — 142 messages classified per run in production',
  'Lead, client, invoice, and noise lanes with priority surfacing',
  'Draft replies ready for edit and approval before send',
  'Human approval gate on every outbound — architecture, not a toggle',
];

const FLOW_STEPS = [
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
];

export const metadata: Metadata = {
  title: 'Case study — Inbox Killer',
  description:
    'How a live inbox agent reads mail, classifies intent into lanes, drafts replies, and stops at a human approval gate. Process-proof case study with downloadable flow diagram.',
  openGraph: {
    title: 'Case study — Inbox Killer',
    description:
      'read → classify → draft → approve → send. Live mailbox proof with human-in-the-loop on every outbound.',
    url: `${SITE_URL}/results/inbox-killer`,
    images: [
      {
        url: '/og/results-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Inbox Killer classification flow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Inbox Killer',
    description: 'Inbox classification and reply drafting with human approval gates.',
    images: ['/og/results-inbox-killer.svg'],
  },
};

export default function InboxKillerCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  const downloadButtons = (
    <>
      <Button href={GRATKA.inboxKillerFlowSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
        Flow diagram (SVG) ↓
      </Button>
      <Button href={GRATKA.inboxKillerBeforeAfterPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        Before/after (PDF) ↓
      </Button>
    </>
  );

  return (
    <CaseStudyLayout
      study={study}
      problemBefore={BEFORE_ITEMS}
      problemAfter={AFTER_ITEMS}
      architectureDiagramSvgUrl={GRATKA.inboxKillerFlowSvg}
      architectureDiagramAlt="Inbox Killer flow: read mailbox, classify into lanes, draft reply, await human approval, send"
      architectureDescription={
        <p>
          One page you can forward: what happens from a new email to an approved send. The approval gate is the
          architecture — not an optional safety setting you might forget to enable.
        </p>
      }
      buildModules={FLOW_STEPS}
      buildDescription={<p>Five steps under the hood — the same flow running in FLEXGRAFIK production mail.</p>}
      stack={['Gmail / Microsoft 365 OAuth', 'Make.com', 'OpenAI API', 'Webhook routing', 'Human approval gate']}
      manifestKey="inboxKiller"
      videoKey="inboxKiller"
      screenKey="inboxLanes"
      downloadButtons={downloadButtons}
    />
  );
}

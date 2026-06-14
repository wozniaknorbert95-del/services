import type { Metadata } from 'next';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import Button from '@/components/ui/Button';

const SLUG = 'inbox-killer';

const BEFORE_ITEMS = [
  'Leads buried under newsletters and vendor mail',
  'Invoices missed in the morning scroll',
  'Same replies typed again and again',
  'Follow-ups forgotten — revenue leaks quietly',
];

const AFTER_ITEMS = [
  'Every message classified: lead · client · invoice · noise',
  'Noise archived automatically — you see what earns money',
  'Drafts ready in your voice — minutes, not hours',
  'Nothing sends until you approve — one click',
];

const FLOW_STEPS = [
  { step: '01', title: 'Read', detail: 'Watches the inboxes you choose. 100+ messages per scan on a live mailbox.' },
  { step: '02', title: 'Classify', detail: 'Intent by context — a lead question is not treated like vendor spam.' },
  { step: '03', title: 'Sort', detail: 'Clear lanes: lead, client, invoice. Noise goes to archive.' },
  { step: '04', title: 'Draft', detail: 'Reply prepared from conversation context and your tone.' },
  { step: '05', title: 'You approve', detail: 'Edit, send or delete. The system never acts alone.', highlight: true },
];

export const metadata: Metadata = {
  title: 'Case study — Inbox Killer',
  description:
    'How a live inbox agent classifies mixed email, drafts replies and waits for your approval. Process-proof case study with downloadable flow diagram.',
  openGraph: {
    title: 'Case study — Inbox Killer',
    description:
      'classify → plan → diff → approve. A self-running back-office with human-in-the-loop on every send.',
    url: 'https://services.flexgrafik.nl/results/inbox-killer',
    images: [
      {
        url: '/og/results-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Inbox Killer flow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Inbox Killer',
    description: 'Process-proof inbox automation with human approval gates.',
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
      architectureDiagramAlt="Inbox Killer flow diagram: read, classify, sort into lanes, draft reply, human approval gate, then send"
      architectureDescription={
        <p>
          One page you can forward: what happens from mixed inbox to approved send. No auto-send —
          the approval gate is the architecture, not a setting.
        </p>
      }
      buildModules={FLOW_STEPS}
      buildDescription={<p>Five steps under the hood.</p>}
      stack={['Make.com', 'OpenAI API', 'Gmail/Outlook integration', 'Webhook routing']}
      manifestKey="inboxKiller"
      videoKey="inboxKiller"
      screenKey="inboxLanes"
      downloadButtons={downloadButtons}
    />
  );
}

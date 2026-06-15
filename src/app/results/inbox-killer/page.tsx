import type { Metadata } from 'next';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import Button from '@/components/ui/Button';

const SLUG = 'inbox-killer';

const BEFORE_ITEMS = [
  'Manual SSH access required for every small hotfix',
  'Codebase changes trackable only via git logs later',
  'Slow feedback loop between client requests and code updates',
  'Deployments require a full PC and IDE setup',
];

const AFTER_ITEMS = [
  'Deployments triggered via simple Telegram commands',
  'Codebase modifications handled autonomously over SSH',
  'Full diff preview presented in chat for immediate approval',
  'Nothing executes without explicit human confirmation',
];

const FLOW_STEPS = [
  { step: '01', title: 'Command', detail: 'Agent receives instructions directly via a secure Telegram chat.' },
  { step: '02', title: 'Plan', detail: 'Agent plans necessary codebase changes and environment updates.' },
  { step: '03', title: 'Diff', detail: 'Generates a git diff and sends it back to Telegram for review.' },
  { step: '04', title: 'Approve', detail: 'Wait for human "YES" command before any permanent modifications.' },
  { step: '05', title: 'Deploy', detail: 'Agent commits, pushes, and restarts services autonomously.', highlight: true },
];

export const metadata: Metadata = {
  title: 'Case study — Telegram Deployment Agent',
  description:
    'How a live Telegram agent accepts commands, modifies code via SSH, and waits for your approval. Process-proof case study with downloadable flow diagram.',
  openGraph: {
    title: 'Case study — Telegram Deployment Agent',
    description:
      'command → plan → diff → approve. A self-running devops pipeline with human-in-the-loop on every deploy.',
    url: 'https://services.flexgrafik.nl/results/inbox-killer',
    images: [
      {
        url: '/og/results-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Deployment flow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Telegram Deployment Agent',
    description: 'Process-proof deployment automation with human approval gates.',
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
      architectureDiagramAlt="Inbox Killer flow diagram: command via Telegram, plan edits, generate diff, await human approval, deploy via SSH"
      architectureDescription={
        <p>
          One page you can forward: what happens from a Telegram message to a production deployment. No auto-send —
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

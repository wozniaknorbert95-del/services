import type { Metadata } from 'next';
import SolutionLayout from '@/components/solutions/SolutionLayout';
import { PRICING, ROUTES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Inbox Killer — Lead Qualification System',
  description:
    'Your inbox sorted, drafted, and gated. Inbox Killer reads mail, classifies intent, drafts replies, and waits for your approval before anything sends.',
  openGraph: {
    title: 'Inbox Killer — Lead Qualification System | Quietforge',
    description:
      'Lead qualification system for busy owners: classify lanes, draft replies, human approval on every send.',
    url: 'https://services.flexgrafik.nl/solutions/inbox-killer',
    images: [
      {
        url: '/og/solutions-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: 'Inbox Killer — Lead Qualification System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbox Killer — Lead Qualification System',
    description: 'Your inbox sorted, drafted, and gated — with you in the loop on every send.',
    images: ['/og/solutions-inbox-killer.svg'],
  },
};

export default function InboxKillerSolutionPage() {
  return (
    <SolutionLayout
      title="Inbox Killer — your inbox sorted, drafted, and gated."
      problem="Your inbox is where leads arrive, clients follow up, and invoices hide — but most owners spend mornings sorting noise instead of closing work. Miss one hot lead and the rest of the week is catch-up."
      systemItems={[
        {
          title: 'Read',
          body: 'Secure OAuth connection to Gmail or Microsoft 365. The agent scans new mail on a schedule you control.',
        },
        {
          title: 'Classify',
          body: 'Every message lands in a lane: lead, client, invoice, or noise — so you see what pays first.',
        },
        {
          title: 'Draft',
          body: 'Replies are drafted in your tone. You edit, approve, or discard — nothing auto-sends.',
        },
        {
          title: 'Approve',
          body: 'Human-in-the-loop gate on every outbound. The architecture stops at your yes, not a setting.',
        },
      ]}
      effectBeforeAfter={{
        before: [
          'Mornings lost triaging newsletters, spam, and low-intent mail.',
          'Hot leads buried under operational noise.',
          'Reply delays because drafting starts from zero every time.',
          'No audit trail of what was sent and why.',
        ],
        after: [
          'Classification lanes surface leads and clients first.',
          'Drafts ready when you open the inbox — you stay in control.',
          'Noise archived automatically with rules you can override.',
          'Full approval log — nothing sends without your explicit OK.',
        ],
      }}
      screenKey="inboxLanes"
      videoKey="inboxKiller"
      caseStudyHref={ROUTES.resultsInboxKiller}
      priceFrom={`From €${PRICING.inboxKiller.from.toLocaleString()}`}
    />
  );
}

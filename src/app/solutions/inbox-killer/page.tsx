import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Inbox Killer — email that sorts itself | Quietforge',
};

export default function InboxKillerPage() {
  return (
    <SolutionLayout
      title="Inbox Killer — get your mornings back"
      problem="Every hour in your inbox is an hour not spent on clients, delivery or growth — and every missed enquiry is revenue that simply walks away."
      systemItems={[
        { title: 'Reads', body: 'It watches the inboxes you choose. Nothing else.' },
        { title: 'Sorts', body: 'Every message lands in a clear lane: lead, client, invoice, or noise.' },
        { title: 'Drafts', body: 'Ready-to-send replies appear, written in your voice.' },
        { title: 'You approve', body: 'You send with one click. It never sends on its own.' },
      ]}
      effectBeforeAfter={{
        before: [
          'Important enquiries buried under invoices, newsletters and spam.',
          'The same replies, typed again and again.',
          'Leads that quietly go cold because no one got back in time.'
        ],
        after: [
          'Hours back, every week.',
          'No more lost leads.',
          'A calmer business with full visibility and approval.'
        ]
      }}
      screenKey="inboxLanes"
      videoKey="inboxKiller"
      caseStudyHref={ROUTES.resultsInboxKiller}
      priceKey="singleSystem"
    />
  );
}

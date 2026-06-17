import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Lead Magnet Game — turn visitors into leads',
};

export default function LeadMagnetGamePage() {
  return (
    <SolutionLayout
      title="Turn visitors into leads — and give them a reason to stay."
      problem="Attention is the hardest thing to earn — wasting it on a page no one interacts with is the most expensive miss of all."
      systemItems={[
        { title: 'A simple mechanic', body: 'A quiz or a quick mini-game — built around your brand.' },
        { title: 'Lead capture built in', body: 'Name and email, exactly when engagement peaks.' },
        { title: 'A reward', body: 'A discount, a free consult, a result worth sharing.' },
        { title: 'Connected', body: 'Every lead flows to your list / CRM automatically.' },
      ]}
      effectBeforeAfter={{
        before: [
          'People visit, look, and leave — no reason to engage.',
          'Plain forms get ignored.',
          'Your competitors all look and sound the same.'
        ],
        after: [
          'More leads — interaction converts far better than static forms.',
          'More time on page.',
          'Something to talk about — a memorable, shareable asset.'
        ]
      }}
      screenKey="leadMagnet"
      caseStudyHref={ROUTES.resultsLeadMagnet}
      priceKey="singleSystem"
    />
  );
}

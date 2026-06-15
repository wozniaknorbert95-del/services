import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Conversion Web Upgrade — a site that converts',
};

export default function WebUpgradePage() {
  return (
    <SolutionLayout
      title="A website that finally earns its keep."
      problem="A site that doesn't convert isn't neutral — it's a leak you pay for in lost clients every single month."
      systemItems={[
        { title: 'Mobile-first layout', body: 'Clean, fast, and built around one clear action.' },
        { title: 'Lead capture', body: 'Forms wired to your inbox / CRM, with instant confirmation emails.' },
        { title: 'Real tracking', body: 'GA4 set up so you see what brings clients in.' },
        { title: 'Content foundation', body: 'UX and copy structured to guide visitors to act.' },
      ]}
      effectBeforeAfter={{
        before: [
          'It looks dated — and first impressions decide.',
          'It\'s slow or clumsy on a phone, where most people land.',
          'No clear next step, so visitors leave without acting.',
          'You have no idea where your enquiries come from.'
        ],
        after: [
          'A site you\'re proud to share.',
          'More enquiries through clear conversion paths.',
          'Clarity on what works via real tracking.',
          'Speed — pages that load fast and feel effortless.'
        ]
      }}
      screenKey="portalAssistant"
      caseStudyHref={ROUTES.resultsAdvisoryModernisation}
      priceKey="singleSystem"
    />
  );
}

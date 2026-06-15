import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Sales Funnel Engine — quotes & bookings on autopilot',
};

export default function SalesFunnelPage() {
  return (
    <SolutionLayout
      title="Quotes, bookings and qualifying — handled."
      problem="Manual quoting doesn't just eat hours — it loses the clients who wanted an answer now, not next week."
      systemItems={[
        { title: 'A guided flow', body: 'Client picks options, you collect clean data.' },
        { title: 'Built-in logic', body: 'Minimum values, options and rules.' },
        { title: 'Connected', body: 'Pushes to your inbox / CRM / sheet automatically.' },
        { title: 'A clear close', body: 'Payment, booking, or "call me back".' },
      ]}
      effectBeforeAfter={{
        before: [
          'The same questions answered by hand, all day.',
          'Prospects drop off because the next step isn\'t obvious.',
          'You chase details by email before quoting.'
        ],
        after: [
          'Fewer back-and-forth emails.',
          'More completed enquiries with clean data.',
          'A tidy pipeline where you always know what\'s in motion.'
        ]
      }}
      screenKey="wizardCheckout"
      videoKey="wizard"
      caseStudyHref={ROUTES.resultsSalesFunnel}
      priceKey="singleSystem"
    />
  );
}

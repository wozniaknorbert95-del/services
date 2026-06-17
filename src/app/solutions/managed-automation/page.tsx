import type { Metadata } from 'next';
import SolutionLayout from '@/components/solutions/SolutionLayout';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Managed Automation — your systems, kept sharp',
  description:
    'Keep your automations healthy and improving. Monitoring, tuning and optimisation from €99/mo. Human-in-the-loop, no lock-in, cancel anytime.',
  openGraph: {
    title: 'Managed Automation — your systems, kept sharp',
    description:
      'Keep your automations healthy and improving. Monitoring, tuning and optimisation from €99/mo.',
    url: 'https://services.flexgrafik.nl/solutions/managed-automation',
    images: [
      {
        url: '/og/managed-automation.svg',
        width: 1200,
        height: 630,
        alt: 'Managed Automation — your systems, kept sharp',
      },
    ],
  },
};

const FAQS = [
  {
    question: 'Do I need a plan?',
    answer: "No — it's optional. But systems improve fastest when they're cared for.",
  },
  {
    question: 'Can I change plans?',
    answer: 'Anytime, up or down.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Care and above include monitoring and fixes — usually before you notice.',
  },
  {
    question: 'Will it act without me?',
    answer: 'Never. Human-in-the-loop is built into every plan.',
  },
];

export default function ManagedAutomationPage() {
  return (
    <>
      <SolutionLayout
        title="Your systems, kept sharp — month after month."
        problem="Software isn't set and forget. Inboxes, offers and customers change — systems drift without ongoing care."
        systemItems={[
          {
            title: 'Care',
            body: 'Continuous monitoring, minor fixes, monthly health report — peace of mind.',
          },
          {
            title: 'Manage',
            body: 'Active tuning, priority support, small enhancements included.',
          },
          {
            title: 'Partner',
            body: 'Drift monitoring, new automations, strategic AI ops on call.',
          },
          {
            title: 'Human gate',
            body: 'Nothing sends, publishes or deploys without your approval — every plan.',
          },
        ]}
        effectItems={[
          { title: 'Aligned', body: 'Systems stay matched to how you work today.' },
          { title: 'Transparent', body: 'You see what changed and why — not a black box.' },
          { title: 'No lock-in', body: 'Cancel anytime. Your systems and data remain yours.' },
        ]}
        screenKey="adminDashboard"
        caseStudyHref={ROUTES.trust}
        priceKey="maintenance"
      />

      <Section background="surface" padding="large">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Questions, answered.
        </h2>
        <div className="space-y-4 max-w-3xl">
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>
    </>
  );
}

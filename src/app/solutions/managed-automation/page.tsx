import type { Metadata } from 'next';
import SolutionLayout from '@/components/solutions/SolutionLayout';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import FaqItem from '@/components/ui/FaqItem';
import { SITE_URL } from '@/lib/constants';
import { SOLUTION_DETAIL_PRICES } from '@/content/pricing';
import {
  managedAutomationCaseStudyHref,
  managedAutomationFaqs,
  managedAutomationSolutionEffectItems,
  managedAutomationSolutionMeta,
  managedAutomationSolutionProblem,
  managedAutomationSolutionSystemItems,
  managedAutomationSolutionTitle,
} from '@/content/managed-automation-case-study';

export const metadata: Metadata = {
  title: managedAutomationSolutionMeta.title,
  description: managedAutomationSolutionMeta.description,
  openGraph: {
    title: managedAutomationSolutionMeta.openGraphTitle,
    description: managedAutomationSolutionMeta.openGraphDescription,
    url: `${SITE_URL}/solutions/managed-automation`,
    images: [
      {
        url: '/og/managed-automation.svg',
        width: 1200,
        height: 630,
        alt: managedAutomationSolutionMeta.ogAlt,
      },
    ],
  },
};

export default function ManagedAutomationPage() {
  return (
    <>
      <SolutionLayout
        title={managedAutomationSolutionTitle}
        problem={managedAutomationSolutionProblem}
        systemItems={[...managedAutomationSolutionSystemItems]}
        effectItems={[...managedAutomationSolutionEffectItems]}
        screenKey="adminDashboard"
        caseStudyHref={managedAutomationCaseStudyHref}
        priceFrom={SOLUTION_DETAIL_PRICES.managedAutomation}
      />

      <Section background="surface" padding="large">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">Questions, answered.</h2>
        <div className="space-y-4 max-w-3xl">
          {managedAutomationFaqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>
    </>
  );
}

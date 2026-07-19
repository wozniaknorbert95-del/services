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
  managedAutomationTierInclusions,
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
        <Eyebrow>PLAN INCLUSIONS</Eyebrow>
        <h2 className="mb-4 text-[var(--qf-fs-2xl)] font-bold tracking-tight">
          Care for the system — with clear operating boundaries.
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          Higher tiers add supervised operational support. Content publishing always stays human-approved;
          paid advertising management is not part of Managed Automation.
        </p>
        <div className="overflow-x-auto border border-[var(--qf-border)]">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Plan
                </th>
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Includes
                </th>
                <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                  Boundary
                </th>
              </tr>
            </thead>
            <tbody>
              {managedAutomationTierInclusions.map((tier) => (
                <tr key={tier.tier} className="border-b border-[var(--qf-border)] last:border-0">
                  <td className="px-4 py-4 font-semibold text-[var(--qf-text)]">{tier.tier}</td>
                  <td className="px-4 py-4 text-[var(--qf-text-dim)]">
                    <ul className="m-0 list-disc space-y-1 pl-4">
                      {tier.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-4 text-[var(--qf-text-dim)]">{tier.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

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

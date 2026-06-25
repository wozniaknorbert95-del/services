import type { Metadata } from 'next';
import Link from 'next/link';
import SolutionLayout from '@/components/solutions/SolutionLayout';
import Section from '@/components/ui/Section';
import { ROUTES, SITE_URL } from '@/lib/constants';
import {
  webUpgradeAdvisoryBridge,
  webUpgradeFitException,
  webUpgradeSolutionEffectAfter,
  webUpgradeSolutionEffectBefore,
  webUpgradeSolutionMeta,
  webUpgradeSolutionProblem,
  webUpgradeSolutionSystemItems,
  webUpgradeSolutionTitle,
} from '@/content/web-upgrade-case-study';

export const metadata: Metadata = {
  title: webUpgradeSolutionMeta.title,
  description: webUpgradeSolutionMeta.description,
  openGraph: {
    title: webUpgradeSolutionMeta.openGraphTitle,
    description: webUpgradeSolutionMeta.openGraphDescription,
    url: `${SITE_URL}/solutions/web-upgrade`,
    images: [
      {
        url: '/og/solutions-web-upgrade.svg',
        width: 1200,
        height: 630,
        alt: webUpgradeSolutionMeta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: webUpgradeSolutionMeta.title,
    description: webUpgradeSolutionMeta.twitterDescription,
    images: ['/og/solutions-web-upgrade.svg'],
  },
};

export default function WebUpgradePage() {
  return (
    <>
      <SolutionLayout
        title={webUpgradeSolutionTitle}
        problem={webUpgradeSolutionProblem}
        systemItems={[...webUpgradeSolutionSystemItems]}
        effectBeforeAfter={{
          before: [...webUpgradeSolutionEffectBefore],
          after: [...webUpgradeSolutionEffectAfter],
        }}
        screenKey="portalAssistant"
        caseStudyHref={ROUTES.resultsAdvisoryModernisation}
        priceKey="singleSystem"
      />

      <Section background="surface" padding="large">
        <p className="text-[var(--qf-text-dim)] text-sm max-w-[var(--qf-maxw-narrow)] border-l-2 border-[var(--qf-accent)] pl-4">
          {webUpgradeFitException}
        </p>
        <div className="mt-8 max-w-2xl rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            {webUpgradeAdvisoryBridge.eyebrow}
          </p>
          <h2 className="mt-2 text-[var(--qf-fs-lg)] font-bold">{webUpgradeAdvisoryBridge.title}</h2>
          <p className="mt-2 text-sm text-[var(--qf-text-dim)]">{webUpgradeAdvisoryBridge.lead}</p>
          <Link href={webUpgradeAdvisoryBridge.href} className="mt-4 inline-block text-sm text-[var(--qf-accent)] hover:underline">
            {webUpgradeAdvisoryBridge.cta}
          </Link>
        </div>
      </Section>
    </>
  );
}

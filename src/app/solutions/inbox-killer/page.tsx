import type { Metadata } from 'next';
import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES, SITE_URL } from '@/lib/constants';
import {
  inboxKillerPriceFromLabel,
  inboxKillerSolutionEffectAfter,
  inboxKillerSolutionEffectBefore,
  inboxKillerSolutionMeta,
  inboxKillerSolutionProblem,
  inboxKillerSolutionSystemItems,
  inboxKillerSolutionTitle,
} from '@/content/inbox-killer-case-study';

export const metadata: Metadata = {
  title: inboxKillerSolutionMeta.title,
  description: inboxKillerSolutionMeta.description,
  openGraph: {
    title: inboxKillerSolutionMeta.openGraphTitle,
    description: inboxKillerSolutionMeta.openGraphDescription,
    url: `${SITE_URL}/solutions/inbox-killer`,
    images: [
      {
        url: '/og/solutions-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: inboxKillerSolutionMeta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: inboxKillerSolutionMeta.title,
    description: inboxKillerSolutionMeta.twitterDescription,
    images: ['/og/solutions-inbox-killer.svg'],
  },
};

export default function InboxKillerSolutionPage() {
  return (
    <SolutionLayout
      title={inboxKillerSolutionTitle}
      problem={inboxKillerSolutionProblem}
      systemItems={[...inboxKillerSolutionSystemItems]}
      effectBeforeAfter={{
        before: [...inboxKillerSolutionEffectBefore],
        after: [...inboxKillerSolutionEffectAfter],
      }}
      screenKey="inboxLanes"
      videoKey="inboxKiller"
      caseStudyHref={ROUTES.resultsInboxKiller}
      priceFrom={inboxKillerPriceFromLabel()}
    />
  );
}

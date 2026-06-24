import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { EXTERNAL, SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import LeadMagnetCaseStudyLayout from '@/components/casestudy/LeadMagnetCaseStudyLayout';
import {
  leadMagnetCaseMeta,
  LEAD_MAGNET_SLUG,
} from '@/content/lead-magnet-case-study';

export const metadata: Metadata = {
  title: leadMagnetCaseMeta.title,
  description: leadMagnetCaseMeta.description,
  openGraph: {
    title: leadMagnetCaseMeta.openGraphTitle,
    description: leadMagnetCaseMeta.openGraphDescription,
    url: `${SITE_URL}/results/lead-magnet`,
    images: [
      {
        url: '/og/results-lead-magnet.svg',
        width: 1200,
        height: 630,
        alt: leadMagnetCaseMeta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: leadMagnetCaseMeta.openGraphTitle,
    description: leadMagnetCaseMeta.twitterDescription,
    images: ['/og/results-lead-magnet.svg'],
  },
};

export default function LeadMagnetCaseStudyPage() {
  const study = getCaseStudyBySlug(LEAD_MAGNET_SLUG);

  if (!study) {
    return null;
  }

  const heroActions = (
    <div className="flex flex-wrap gap-4">
      <Button href={EXTERNAL.leadMagnetGame} target="_blank" rel="noopener noreferrer" variant="secondary">
        Play live experience ↗
      </Button>
      <Button href={GRATKA.leadMagnetFlowSvg} target="_blank" rel="noopener noreferrer" variant="ghost">
        View flow diagram ↓
      </Button>
    </div>
  );

  return <LeadMagnetCaseStudyLayout study={study} heroActions={heroActions} />;
}

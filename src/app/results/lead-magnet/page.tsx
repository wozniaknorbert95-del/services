import type { Metadata } from 'next';
import { EXTERNAL, SITE_URL } from '@/lib/constants';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import Button from '@/components/ui/Button';

const SLUG = 'lead-magnet';

const BEFORE_ITEMS = [
  'Traffic lands on a static page and leaves without contact',
  'Forms feel like work — completion rates stay low',
  'No memorable asset to share or talk about',
  'Leads arrive cold with zero qualification context',
];

const AFTER_ITEMS = [
  'Branded five-level game earns attention before the ask',
  'Email captured on win — not on page load',
  'Leaderboard and replay keep visitors on-site longer',
  'Contact arrives after demonstrated engagement',
];

const BUILD_STEPS = [
  { step: '01', title: 'Register', detail: 'Player creates an account to enter the experience.' },
  { step: '02', title: 'Play', detail: 'Five levels of branded gameplay on a custom Canvas engine.' },
  { step: '03', title: 'Win', detail: 'Victory triggers the contact gate — not a generic popup.' },
  { step: '04', title: 'Capture', detail: 'Email stored with game context for follow-up.' },
  { step: '05', title: 'Reward', detail: 'Promo code or next step delivered in-flow.', highlight: true },
];

export const metadata: Metadata = {
  title: 'Case study — Lead magnet game',
  description:
    'How a five-level branded game captures qualified leads — experience first, form second. Live on app.flexgrafik.nl.',
  openGraph: {
    title: 'Case study — Lead magnet game',
    description: 'Play → win → email capture. A lead magnet that earns the contact.',
    url: `${SITE_URL}/results/lead-magnet`,
    images: [
      {
        url: '/og/results.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Lead magnet game',
      },
    ],
  },
};

export default function LeadMagnetCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  return (
    <CaseStudyLayout
      study={study}
      problemBefore={BEFORE_ITEMS}
      problemAfter={AFTER_ITEMS}
      architectureDiagramSvgUrl="/gratka/lead-magnet.png"
      architectureDiagramAlt="Lead magnet gameplay with email capture and leaderboard"
      architectureDescription={
        <p>
          People do not fill forms — they play. The architecture captures contact only after the visitor
          has invested effort in the experience.
        </p>
      }
      buildModules={BUILD_STEPS}
      buildDescription={<p>Custom Canvas engine — not a third-party quiz widget.</p>}
      stack={['Custom Canvas engine', 'Next.js', 'Email capture API', 'Leaderboard']}
      manifestKey="leadMagnet"
      videoKey="leadMagnet"
      screenKey="leadMagnet"
      downloadButtons={
        <Button href={EXTERNAL.zzpackageWizard} target="_blank" rel="noopener noreferrer" variant="ghost">
          See the live wizard →
        </Button>
      }
    />
  );
}

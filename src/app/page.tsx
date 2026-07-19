import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PainGrid from '@/components/home/PainGrid';
import IntentRouter from '@/components/home/IntentRouter';
import JadziaSpearhead from '@/components/home/JadziaSpearhead';
import WhyItWorks from '@/components/home/WhyItWorks';
import Pricing from '@/components/sections/Pricing';
import FinalCtaBand from '@/components/home/FinalCtaBand';
import StickyCta from '@/components/layout/StickyCta';
import SectionProgress from '@/components/layout/SectionProgress';
import HomeIntentBoundary from '@/components/home/HomeIntentBoundary';
import IntentFilterSticky from '@/components/home/IntentFilterSticky';

export const metadata: Metadata = {
  title: 'Conversion Systems Architect for Small Business',
  description:
    'Conversion systems for NL small businesses — qualify leads, reduce admin, human-in-the-loop. Ops command live · honest built vs planned.',
  openGraph: {
    title: 'Conversion Systems Architect for Small Business | Quietforge',
    description:
      'Conversion systems that qualify leads, reduce admin and keep humans in control. Ops command live · honest module status.',
    images: [
      {
        url: '/og/home.svg',
        width: 1200,
        height: 630,
        alt: 'Quietforge — Conversion Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversion Systems Architect for Small Business | Quietforge',
    description: 'Conversion systems for NL small businesses — ops cockpit live · honest module status.',
    images: ['/og/home.svg'],
  },
};

/** Home section order: docs/strategy/site-map.md §3 v6.0 */
export default function Home() {
  return (
    <HomeIntentBoundary>
      <div className="pb-20 lg:pb-0">
        <SectionProgress />
        <IntentFilterSticky />
        <HeroSection />
        <PainGrid />
        <IntentRouter showChips={false} />
        <JadziaSpearhead />
        <WhyItWorks />
        <Pricing />
        <FinalCtaBand />
        <StickyCta />
      </div>
    </HomeIntentBoundary>
  );
}

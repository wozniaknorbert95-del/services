import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PainGrid from '@/components/home/PainGrid';
import SystemMetrics from '@/components/home/SystemMetrics';
import SpearheadSpotlight from '@/components/home/SpearheadSpotlight';
import BuiltVsPlanned from '@/components/home/BuiltVsPlanned';
import ResultsTeaser from '@/components/home/ResultsTeaser';
import IntentRouter from '@/components/home/IntentRouter';
import LivingSystemTeaser from '@/components/home/LivingSystemTeaser';
import BehindTheScenes from '@/components/home/BehindTheScenes';
import HowIWork from '@/components/home/HowIWork';
import TrustAndObjections from '@/components/home/TrustAndObjections';
import Pricing from '@/components/sections/Pricing';
import FinalCtaBand from '@/components/home/FinalCtaBand';
import StickyCta from '@/components/layout/StickyCta';
import SectionProgress from '@/components/layout/SectionProgress';
import { HomeIntentProvider } from '@/lib/home-intent';

export const metadata: Metadata = {
  title: 'Conversion Systems Architect for Small Business',
  description:
    'Conversion systems for NL small businesses — qualify leads, reduce admin, human-in-the-loop. Live wizard checkout · honest built vs planned.',
  openGraph: {
    title: 'Conversion Systems Architect for Small Business | Quietforge',
    description:
      'Conversion systems that qualify leads, reduce admin and keep humans in control. Live wizard checkout · 8-repo governance.',
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
    description: 'Conversion systems for NL small businesses — wizard live · honest built vs planned.',
    images: ['/og/home.svg'],
  },
};

/** Home section order: docs/strategy/site-map.md §3 */
export default function Home() {
  return (
    <HomeIntentProvider>
      <div className="pb-20 lg:pb-0">
        <SectionProgress />
        <HeroSection />
        <PainGrid />
        <SystemMetrics variant="compact" />
        <SpearheadSpotlight />
        <BuiltVsPlanned variant="compact" />
        <ResultsTeaser />
        <IntentRouter />
        <LivingSystemTeaser variant="teaser" />
        <BehindTheScenes />
        <HowIWork />
        <TrustAndObjections />
        <Pricing />
        <FinalCtaBand />
        <StickyCta />
      </div>
    </HomeIntentProvider>
  );
}

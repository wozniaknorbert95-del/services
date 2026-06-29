import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import DualBrandBand from '@/components/home/DualBrandBand';
import FeaturedStrip from '@/components/home/FeaturedStrip';
import PainGrid from '@/components/home/PainGrid';
import SpearheadSpotlight from '@/components/home/SpearheadSpotlight';
import SystemMetrics from '@/components/home/SystemMetrics';
import BuiltVsPlanned from '@/components/home/BuiltVsPlanned';
import IntentRouter from '@/components/home/IntentRouter';
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
      'Conversion systems that qualify leads, reduce admin and keep humans in control. Live wizard checkout · honest built vs planned.',
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

/** Home section order: docs/strategy/site-map.md §3 v3.0 (9 sections, 2026-06-29) */
export default function Home() {
  return (
    <HomeIntentProvider>
      <div className="pb-20 lg:pb-0">
        <SectionProgress />
        <HeroSection />
        <DualBrandBand />
        <FeaturedStrip />
        <PainGrid />
        <SpearheadSpotlight />
        <SystemMetrics variant="compact" />
        <BuiltVsPlanned variant="compact" />
        <IntentRouter />
        <HowIWork />
        <TrustAndObjections />
        <Pricing />
        <FinalCtaBand />
        <StickyCta />
      </div>
    </HomeIntentProvider>
  );
}

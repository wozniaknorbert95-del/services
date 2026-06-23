import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import SystemArchitecture from '@/components/home/SystemArchitecture';
import IntentRouter from '@/components/home/IntentRouter';
import PainGrid from '@/components/home/PainGrid';
import SpearheadSpotlight from '@/components/home/SpearheadSpotlight';
import OwnerEcosystemTeaser from '@/components/home/OwnerEcosystemTeaser';
import SystemMetrics from '@/components/home/SystemMetrics';
import ResultsTeaser from '@/components/home/ResultsTeaser';
import BehindTheScenes from '@/components/home/BehindTheScenes';
import HowIWork from '@/components/home/HowIWork';
import TrustAndObjections from '@/components/home/TrustAndObjections';
import Pricing from '@/components/sections/Pricing';
import FinalCtaBand from '@/components/home/FinalCtaBand';
import StickyCta from '@/components/layout/StickyCta';
import SectionProgress from '@/components/layout/SectionProgress';
import { HomeIntentProvider } from '@/lib/home-intent';

export const metadata: Metadata = {
  title: 'Conversion Systems Architect for small business',
  description:
    'Conversion systems that qualify leads, automate bookings and reduce admin work — built on a live ecosystem, not templates. Book your Automation Map.',
  openGraph: {
    title: 'Conversion Systems Architect for small business | Quietforge',
    description:
      'Systems that qualify leads and reduce admin for NL small businesses. Custom workflows, VCMS, human-in-the-loop.',
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
    title: 'Conversion Systems Architect for small business | Quietforge',
    description: 'Conversion systems built on a live ecosystem — not theory.',
    images: ['/og/home.svg'],
  },
};

/** Home section order: docs/strategy/site-map.md §2 */
export default function Home() {
  return (
    <HomeIntentProvider>
      <div className="pb-20 lg:pb-0">
        <SectionProgress />
        <HeroSection />
        <SystemArchitecture />
        <IntentRouter />
        <PainGrid />
        <SpearheadSpotlight />
        <OwnerEcosystemTeaser />
        <SystemMetrics />
        <ResultsTeaser />
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

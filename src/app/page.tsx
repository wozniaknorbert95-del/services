import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import IntentRouter from '@/components/home/IntentRouter';
import PainGrid from '@/components/home/PainGrid';
import SpearheadSpotlight from '@/components/home/SpearheadSpotlight';
import LadderTeaser from '@/components/home/LadderTeaser';
import WhyThisWorks from '@/components/home/WhyThisWorks';
import AboutArchitect from '@/components/home/AboutArchitect';
import OwnerEcosystemTeaser from '@/components/home/OwnerEcosystemTeaser';
import HowIWork from '@/components/home/HowIWork';
import TrustSafety from '@/components/home/TrustSafety';
import ResultsTeaser from '@/components/home/ResultsTeaser';
import BehindTheScenes from '@/components/home/BehindTheScenes';
import SystemMetrics from '@/components/home/SystemMetrics';
import PricingSection from '@/components/sections/Pricing';
import FinalCtaBand from '@/components/home/FinalCtaBand';

export const metadata: Metadata = {
  title: 'Quietforge — AI Systems Architect for small business',
  description:
    'Norbert designs intelligent systems that build, verify and maintain themselves — with a human in the loop. Start with a paid Automation Map.',
  openGraph: {
    title: 'Quietforge — AI Systems Architect for small business',
    description:
      'Intelligent automation and modern systems for NL small businesses. Process-first delivery with human approval gates.',
    images: [
      {
        url: '/og/home.svg',
        width: 1200,
        height: 630,
        alt: 'Quietforge — AI Systems Architect for small business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quietforge — AI Systems Architect for small business',
    description: 'Systems that code, check and maintain themselves — with you in control.',
    images: ['/og/home.svg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntentRouter />
      <PainGrid />
      <SpearheadSpotlight />
      <LadderTeaser />
      <WhyThisWorks />
      <AboutArchitect />
      <OwnerEcosystemTeaser />
      <SystemMetrics />
      <HowIWork />
      <TrustSafety />
      <ResultsTeaser />
      <BehindTheScenes />
      <PricingSection />
      <FinalCtaBand />
    </>
  );
}

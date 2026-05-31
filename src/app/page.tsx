import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PainGrid from '@/components/home/PainGrid';
import SpearheadSpotlight from '@/components/home/SpearheadSpotlight';
import LadderTeaser from '@/components/home/LadderTeaser';
import WhyThisWorks from '@/components/home/WhyThisWorks';
import ResultsTeaser from '@/components/home/ResultsTeaser';
import FinalCtaBand from '@/components/home/FinalCtaBand';

export const metadata: Metadata = {
  title: 'Quietforge — Done-for-you systems for small business',
  description:
    'Modern websites and back-office automation for small businesses. Fewer emails, more clients — systems that run on autopilot. Start with a paid Automation Map.',
  openGraph: {
    title: 'Quietforge — Done-for-you systems for small business',
    description:
      'Modern websites and back-office automation for small businesses. Fewer emails, more clients — systems that run on autopilot.',
    images: [
      {
        url: '/og/home.svg',
        width: 1200,
        height: 630,
        alt: 'Quietforge — Done-for-you systems for small business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quietforge — Done-for-you systems for small business',
    description: 'Systems that run your small business — quietly, in the background.',
    images: ['/og/home.svg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainGrid />
      <SpearheadSpotlight />
      <LadderTeaser />
      <WhyThisWorks />
      <ResultsTeaser />
      <FinalCtaBand />
    </>
  );
}

import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import PainPoints from '@/components/PainPoints';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import ProjectShowcase from '@/components/ProjectShowcase';
import RiskReversal from '@/components/RiskReversal';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TrustBar />
      <PainPoints />
      <Solution />
      <HowItWorks />
      <CaseStudies />
      <ProjectShowcase />
      <RiskReversal />
      <CTAFinal />
      <Footer />
    </main>
  );
}

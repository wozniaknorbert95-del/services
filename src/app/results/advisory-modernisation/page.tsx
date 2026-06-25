import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import {
  ADVISORY_MODERNISATION_SLUG,
  advisoryCaseContextAnonymised,
  advisoryModernisationAfterItems,
  advisoryModernisationArchitectureAlt,
  advisoryModernisationArchitectureIntro,
  advisoryModernisationBeforeItems,
  advisoryModernisationBuildDescription,
  advisoryModernisationCaseMeta,
  advisoryModernisationDeliveryPhases,
  advisoryModernisationHardBoundary,
  advisoryModernisationPillars,
  advisoryModernisationSafetyIntro,
  advisoryModernisationSafetyItems,
  advisoryModernisationSafetyPlaybook,
  advisoryModernisationStack,
  advisoryModernisationWebUpgradeBridge,
} from '@/content/advisory-modernisation-case-study';

export const metadata: Metadata = {
  title: advisoryModernisationCaseMeta.title,
  description: advisoryModernisationCaseMeta.description,
  openGraph: {
    title: advisoryModernisationCaseMeta.openGraphTitle,
    description: advisoryModernisationCaseMeta.openGraphDescription,
    url: `${SITE_URL}/results/advisory-modernisation`,
    images: [
      {
        url: '/og/results-advisory-modernisation.svg',
        width: 1200,
        height: 630,
        alt: advisoryModernisationCaseMeta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: advisoryModernisationCaseMeta.openGraphTitle,
    description: advisoryModernisationCaseMeta.twitterDescription,
    images: ['/og/results-advisory-modernisation.svg'],
  },
};

export default function AdvisoryModernisationCaseStudyPage() {
  const study = getCaseStudyBySlug(ADVISORY_MODERNISATION_SLUG);

  if (!study) {
    return null;
  }

  const downloadButtons = (
    <>
      <Button href={GRATKA.advisoryScopeSummaryPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        Scope summary (PDF) ↓
      </Button>
      <Button href={GRATKA.advisoryAvgLayerPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        AVG / data layer (PDF) ↓
      </Button>
      <Button href={GRATKA.advisoryDeliveryTimelineSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
        Delivery timeline (SVG) ↓
      </Button>
      <Button href={GRATKA.advisoryDeliveryTimelinePdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        Delivery timeline (PDF) ↓
      </Button>
    </>
  );

  return (
    <CaseStudyLayout
      study={{
        ...study,
        context: advisoryCaseContextAnonymised,
      }}
      problemBefore={[...advisoryModernisationBeforeItems]}
      problemAfter={[...advisoryModernisationAfterItems]}
      architectureDiagramSvgUrl={GRATKA.advisoryDeliveryTimelineSvg}
      architectureDiagramAlt={advisoryModernisationArchitectureAlt}
      architectureDescription={
        <>
          <p className="mb-6 max-w-[var(--qf-maxw-narrow)]">{advisoryModernisationArchitectureIntro}</p>
          <Card className="mb-4 p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
              {advisoryModernisationWebUpgradeBridge.eyebrow}
            </p>
            <p className="mb-3 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
              {advisoryModernisationWebUpgradeBridge.title}
            </p>
            <p className="mb-4 max-w-[var(--qf-maxw-narrow)] text-sm text-[var(--qf-text-dim)]">
              {advisoryModernisationWebUpgradeBridge.lead}
            </p>
            <Button href={advisoryModernisationWebUpgradeBridge.href} variant="ghost">
              {advisoryModernisationWebUpgradeBridge.cta}
            </Button>
          </Card>
        </>
      }
      buildModules={[...advisoryModernisationDeliveryPhases]}
      buildDescription={<p>{advisoryModernisationBuildDescription}</p>}
      stack={[...advisoryModernisationStack]}
      manifestKey="advisory"
      screenKey="portalAssistant"
      downloadButtons={downloadButtons}
    >
      <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-3 mt-12">
        {advisoryModernisationPillars.map((pillar) => (
          <Card
            key={pillar.title}
            className={
              pillar.highlight
                ? 'border-[var(--qf-warn)] bg-[var(--qf-bg-inset)] p-6'
                : 'p-6'
            }
          >
            <h3 className="mb-4 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
              {pillar.title}
            </h3>
            <ul className="m-0 list-none space-y-2 p-0">
              {pillar.items.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-accent)]">·</span> {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          AVG &amp; data safety
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          {advisoryModernisationSafetyIntro}
        </p>
        <div className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-3">
          {advisoryModernisationSafetyItems.map((item) => (
            <Card key={item.title} className="p-5">
              <h3 className="mb-2 text-sm font-bold text-[var(--qf-text)]">{item.title}</h3>
              <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{item.detail}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-none text-sm text-[var(--qf-text-dim)]">
          {advisoryModernisationSafetyPlaybook.prefix}{' '}
          <Link
            href={advisoryModernisationSafetyPlaybook.href}
            download
            className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
          >
            {advisoryModernisationSafetyPlaybook.label}
          </Link>
          . {advisoryModernisationSafetyPlaybook.suffix}
        </p>
      </div>

      <Card className="mt-8 border-[var(--qf-warn)] bg-[var(--qf-bg-inset)] p-5 md:p-6">
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
          {advisoryModernisationHardBoundary.eyebrow}
        </p>
        <p className="max-w-none text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
          {advisoryModernisationHardBoundary.title}
        </p>
        <p className="mt-2 max-w-none text-sm text-[var(--qf-text-dim)]">
          {advisoryModernisationHardBoundary.body}
        </p>
      </Card>
    </CaseStudyLayout>
  );
}

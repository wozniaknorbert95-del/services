import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import {
  inboxKillerAfterItems,
  inboxKillerArchitectureAlt,
  inboxKillerArchitectureIntro,
  inboxKillerBeforeItems,
  inboxKillerBuildDescription,
  inboxKillerCaseMeta,
  inboxKillerFlowSteps,
  inboxKillerJadziaBridge,
  inboxKillerLanes,
  inboxKillerLanesIntro,
  inboxKillerSolutionBridge,
  inboxKillerStack,
  INBOX_KILLER_SLUG,
} from '@/content/inbox-killer-case-study';

export const metadata: Metadata = {
  title: inboxKillerCaseMeta.title,
  description: inboxKillerCaseMeta.description,
  openGraph: {
    title: inboxKillerCaseMeta.openGraphTitle,
    description: inboxKillerCaseMeta.openGraphDescription,
    url: `${SITE_URL}/results/inbox-killer`,
    images: [
      {
        url: '/og/results-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: inboxKillerCaseMeta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: inboxKillerCaseMeta.openGraphTitle,
    description: inboxKillerCaseMeta.twitterDescription,
    images: ['/og/results-inbox-killer.svg'],
  },
};

export default function InboxKillerCaseStudyPage() {
  const study = getCaseStudyBySlug(INBOX_KILLER_SLUG);

  if (!study) {
    return null;
  }

  const downloadButtons = (
    <>
      <Button href={GRATKA.inboxKillerFlowSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
        Flow diagram (SVG) ↓
      </Button>
      <Button href={GRATKA.inboxKillerBeforeAfterPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
        Before/after (PDF) ↓
      </Button>
    </>
  );

  return (
    <CaseStudyLayout
      study={study}
      problemBefore={[...inboxKillerBeforeItems]}
      problemAfter={[...inboxKillerAfterItems]}
      architectureDiagramSvgUrl={GRATKA.inboxKillerFlowSvg}
      architectureDiagramAlt={inboxKillerArchitectureAlt}
      architectureDescription={
        <>
          <p className="mb-6 max-w-[var(--qf-maxw-narrow)]">{inboxKillerArchitectureIntro}</p>
          <Card className="qf-panel--spearhead mb-6 p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
              {inboxKillerSolutionBridge.eyebrow}
            </p>
            <p className="mb-3 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
              {inboxKillerSolutionBridge.title}
            </p>
            <p className="mb-4 max-w-[var(--qf-maxw-narrow)] text-sm text-[var(--qf-text-dim)]">
              {inboxKillerSolutionBridge.lead}
            </p>
            <Button href={inboxKillerSolutionBridge.href} variant="primary">
              {inboxKillerSolutionBridge.cta}
            </Button>
          </Card>
          <Card className="mb-4 p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
              {inboxKillerJadziaBridge.eyebrow}
            </p>
            <p className="mb-3 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
              {inboxKillerJadziaBridge.title}
            </p>
            <p className="mb-4 max-w-[var(--qf-maxw-narrow)] text-sm text-[var(--qf-text-dim)]">
              {inboxKillerJadziaBridge.lead}
            </p>
            <Button href={inboxKillerJadziaBridge.href} variant="ghost">
              {inboxKillerJadziaBridge.cta}
            </Button>
          </Card>
        </>
      }
      buildModules={[...inboxKillerFlowSteps]}
      buildDescription={<p>{inboxKillerBuildDescription}</p>}
      stack={[...inboxKillerStack]}
      manifestKey="inboxKiller"
      videoKey="inboxKiller"
      screenKey="inboxLanes"
      downloadButtons={downloadButtons}
    >
      <h2 className="mt-8 text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
        Classification lanes
      </h2>
      <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
        {inboxKillerLanesIntro}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--qf-border)]">
              <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                Lane
              </th>
              <th className="py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                Routing intent
              </th>
            </tr>
          </thead>
          <tbody>
            {inboxKillerLanes.map((row) => (
              <tr key={row.lane} className="border-b border-[var(--qf-border)]">
                <td className="py-3 pr-4 font-semibold text-[var(--qf-text)]">{row.lane}</td>
                <td className="py-3 text-[var(--qf-text-dim)]">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CaseStudyLayout>
  );
}

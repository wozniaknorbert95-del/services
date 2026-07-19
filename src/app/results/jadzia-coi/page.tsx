import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ROUTES, SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';
import JadziaWorkflowDiagram from '@/components/results/JadziaWorkflowDiagram';
import JadziaProofGallery from '@/components/results/JadziaProofGallery';
import {
  JADZIA_COI_SLUG,
  jadziaCoiArchitectureAlt,
  jadziaCoiBeforeItems,
  jadziaCoiAfterItems,
  jadziaCoiCaseMeta,
  jadziaCoiIntegrations,
  jadziaCoiLoopIntro,
  jadziaCoiLoopNodes,
  jadziaCoiMetricStatusClass,
  jadziaCoiStack,
  jadziaCoiSupervisionNote,
  jadziaCoiVerifiedMetrics,
} from '@/content/jadzia-coi-case-study';
import { JADZIA_COI_CAPABILITIES, jadziaCoiCapabilityStatusClass } from '@/content/jadzia-coi';

export const metadata: Metadata = {
  title: jadziaCoiCaseMeta.title,
  description: jadziaCoiCaseMeta.description,
  openGraph: {
    title: jadziaCoiCaseMeta.openGraphTitle,
    description: jadziaCoiCaseMeta.openGraphDescription,
    url: `${SITE_URL}/results/jadzia-coi`,
    images: [
      {
        url: '/og/results-jadzia-coi.svg',
        width: 1200,
        height: 630,
        alt: jadziaCoiCaseMeta.ogAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: jadziaCoiCaseMeta.openGraphTitle,
    description: jadziaCoiCaseMeta.twitterDescription,
    images: ['/og/results-jadzia-coi.svg'],
  },
};

export default function JadziaCoiCaseStudyPage() {
  const study = getCaseStudyBySlug(JADZIA_COI_SLUG);

  if (!study) {
    return null;
  }

  const buildModules = JADZIA_COI_CAPABILITIES.map((cap, index) => ({
    step: String(index + 1).padStart(2, '0'),
    title: cap.title,
    detail: cap.detail,
    status: cap.status,
    statusClass: jadziaCoiCapabilityStatusClass(cap.status),
    highlight: cap.id === 'orders' || cap.id === 'cockpit' || cap.id === 'marketing-brain',
  }));

  const downloadButtons = (
    <>
      <Button href={GRATKA.jadziaCoiArchitectureSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
        COI architecture diagram (SVG) ↓
      </Button>
      <Button href={ROUTES.resultsOwnerEcosystem} variant="ghost">
        Full owner ecosystem map →
      </Button>
      <Button href={ROUTES.inboxKiller} variant="ghost">
        Inbox Killer — B2B product →
      </Button>
    </>
  );

  return (
    <CaseStudyLayout
      study={study}
      problemBefore={[...jadziaCoiBeforeItems]}
      problemAfter={[...jadziaCoiAfterItems]}
      architectureDiagramSvgUrl={GRATKA.jadziaCoiArchitectureSvg}
      architectureDiagramAlt={jadziaCoiArchitectureAlt}
      architectureDescription={
        <>
          <p className="mb-4">{study.system}</p>
          <p className="mb-6 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)] italic">
            {jadziaCoiLoopIntro}
          </p>
          <h3 className="mb-3 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">COI loop at a glance</h3>
          <p className="mb-4 max-w-[var(--qf-maxw-narrow)] text-sm text-[var(--qf-text-dim)]">
            {jadziaCoiLoopNodes.map((n) => n.phase).join(' → ')} — propose in Commander, approve with HITL,
            bounded Act only.
          </p>
          <p className="mb-6">
            <a
              href="#proof"
              className="font-semibold text-[var(--qf-accent)] underline-offset-2 hover:underline"
            >
              Explore the interactive workflow in Proof ↓
            </a>
          </p>
          <p className="max-w-[var(--qf-maxw-narrow)] text-sm text-[var(--qf-text-dim)]">
            {jadziaCoiSupervisionNote}
          </p>
        </>
      }
      buildModules={buildModules}
      buildDescription={
        <p>
          Operations Command Layer — Commander cockpit, operational spine, Marketing Brain shadow and weekly
          brief for multi-system owners. Same governed pattern is available for Dutch ZZP and SME deployments
          via Quietforge.
        </p>
      }
      stack={[...jadziaCoiStack]}
      manifestKey="jadziaCoi"
      screenKey="jadziaCommander"
      screenSlot={<JadziaProofGallery />}
      workflowSlot={<JadziaWorkflowDiagram />}
      downloadButtons={downloadButtons}
    >
      <Card className="mb-6 p-5">
        <h3 className="mb-4 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
          Verified production surface
        </h3>
        <ul className="flex flex-wrap gap-2">
          {jadziaCoiVerifiedMetrics.map((m) => (
            <li
              key={m.label}
              className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-3 py-1 font-mono text-xs text-[var(--qf-text-dim)]"
            >
              {m.label}:{' '}
              <span className={jadziaCoiMetricStatusClass(m.status)}>{m.value}</span>
            </li>
          ))}
        </ul>
      </Card>

      <h3 className="mb-4 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">Ecosystem integrations</h3>
      <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)]">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-text-dim)]">
                System
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-text-dim)]">
                Direction
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-text-dim)]">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {jadziaCoiIntegrations.map((row) => (
              <tr key={row.system} className="border-b border-[var(--qf-border)] last:border-0">
                <td className="px-4 py-3 font-semibold text-[var(--qf-text)]">{row.system}</td>
                <td className="px-4 py-3 font-mono text-xs text-[var(--qf-accent)]">{row.direction}</td>
                <td className="px-4 py-3 text-[var(--qf-text-dim)]">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CaseStudyLayout>
  );
}

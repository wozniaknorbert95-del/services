import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { ROUTES, ARTEFACTS, SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';

const SLUG = 'advisory-modernisation';

const BEFORE_ITEMS = [
  'Outdated site — strong offer, weak first impression',
  'Enquiries handled ad hoc — no structured lead capture',
  'Same qualifying questions asked by phone, repeatedly',
  'Content depends on one person — no approval pipeline',
  'No documented data-processing agreement for digital tools',
];

const AFTER_ITEMS = [
  'Modern mobile-first site with structured enquiry pathways',
  'AI assistant qualifies intent — hands off to a human adviser',
  'Hard guardrail: qualification only, no tax advice',
  'Content engine: draft → human approve → publish',
  'AVG layer signed before live data processing begins',
];

const PILLARS = [
  {
    title: 'Web upgrade & lead capture',
    items: [
      'Mobile-first site aligned with professional advisory positioning',
      'Structured enquiry forms — not a generic contact box',
      'Architecture ready for an embedded qualification layer',
    ],
  },
  {
    title: 'Lead-qualifying AI assistant',
    highlight: true,
    items: [
      'Intent routing: new client, existing client, general topic',
      'Collects only what is needed to qualify — not tax records',
      'Cannot provide tax, legal or financial advice — enforced in design',
      'Human handoff with full context for the adviser',
    ],
  },
  {
    title: 'Human-approved content engine',
    items: [
      'AI-assisted drafts aligned with firm voice',
      'Every piece reviewed before publish — nothing auto-publishes',
      'Audit trail: who approved what, when — on request',
    ],
  },
];

const DELIVERY_PHASES = [
  { step: '01', title: 'Map & scope', detail: 'Automation Map, scope lock, AVG requirements. Gate: signed scope document.' },
  { step: '02', title: 'Web foundation', detail: 'Modern site, lead capture, staging review. Gate: client approves staging.' },
  { step: '03', title: 'Qualification assistant', detail: 'AI intake, no-tax-advice guardrails, UAT. Gate: assistant behaviour signed off.', highlight: true },
  { step: '04', title: 'Content engine', detail: 'Draft → human approve → publish pipeline. Gate: first piece approved.' },
  { step: '05', title: 'Security & AVG', detail: 'Verwerkersovereenkomst, scoped access, EU hosting. Gate: AVG signed.' },
  { step: '06', title: 'Verify & handover', detail: 'UAT, README, optional care. Gate: client sign-off — go-live when ready.', highlight: true },
];

const SAFETY_ITEMS = [
  { title: 'Human-in-the-loop', detail: 'Nothing publishes or deploys without your approval.' },
  { title: 'Service accounts', detail: 'Scoped permissions — no passwords over chat.' },
  { title: 'EU data', detail: 'Hosting and processing within the EU.' },
  { title: 'Data minimisation', detail: 'Assistant collects enquiry metadata, not client dossiers.' },
  { title: 'Logged & auditable', detail: 'Who did what, when — available on request.' },
  { title: 'No lock-in', detail: 'README + handover to any developer.' },
];

export const metadata: Metadata = {
  title: 'Case study — Advisory firm modernisation',
  description:
    'How a Rotterdam accounting office (anonymised) is modernising with web upgrade, a qualification-only AI assistant and human-approved content — with AVG layer. In delivery.',
  openGraph: {
    title: 'Case study — Advisory firm modernisation',
    description:
      'Web upgrade + qualification-only assistant + content engine. AVG layer specified. In delivery — no fabricated outcomes.',
    url: `${SITE_URL}/results/advisory-modernisation`,
    images: [
      {
        url: '/og/results-advisory-modernisation.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Advisory firm modernisation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Advisory firm modernisation',
    description: 'Qualification only — no tax advice. Staged delivery with AVG layer. In delivery.',
    images: ['/og/results-advisory-modernisation.svg'],
  },
};

export default function AdvisoryModernisationCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

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
        context: `Client anonymised throughout — described only as a Rotterdam accounting
          office. Outcomes will be reported once live; nothing is invented here.`
      }}
      problemBefore={BEFORE_ITEMS}
      problemAfter={AFTER_ITEMS}
      architectureDiagramSvgUrl={GRATKA.advisoryDeliveryTimelineSvg}
      architectureDiagramAlt="Staged delivery timeline: six phases with sign-off gates for advisory firm modernisation including web upgrade, qualification assistant and AVG layer"
      architectureDescription={
        <p>
          Staged delivery — six phases. Sequential sign-off gates. No launch dates claimed — go-live when the client is ready.
          Download the timeline for a printable version to share internally.
        </p>
      }
      buildModules={DELIVERY_PHASES}
      buildDescription={<p>Three integrated systems being built across six delivery phases.</p>}
      stack={['Next.js', 'FastAPI', 'LangGraph', 'Tailwind', 'EU VPS']}
      manifestKey="advisory"
      screenKey="portalAssistant"
      downloadButtons={downloadButtons}
    >
      <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-3 mt-12">
        {PILLARS.map((pillar) => (
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
          For advisory firms, data handling is not optional. The AVG layer is specified before any
          live processing begins. This is process documentation — not legal advice.
        </p>
        <div className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY_ITEMS.map((item) => (
            <Card key={item.title} className="p-5">
              <h3 className="mb-2 text-sm font-bold text-[var(--qf-text)]">{item.title}</h3>
              <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{item.detail}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-none text-sm text-[var(--qf-text-dim)]">
          General playbook for all engagements:{' '}
          <Link
            href={ARTEFACTS.dataSafetyPlaybook}
            download
            className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
          >
            How we keep your data safe (PDF) ↓
          </Link>
          . Engagement-specific AVG detail in the downloadable sheet above.
        </p>
      </div>

      <Card className="mt-8 border-[var(--qf-warn)] bg-[var(--qf-bg-inset)] p-5 md:p-6">
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
          Hard boundary
        </p>
        <p className="max-w-none text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
          Qualification only — no tax advice
        </p>
        <p className="mt-2 max-w-none text-sm text-[var(--qf-text-dim)]">
          The AI assistant routes and structures enquiries. It does not interpret legislation,
          access client filings or replace a qualified adviser. This boundary is enforced in system
          design — not buried in small print.
        </p>
      </Card>
    </CaseStudyLayout>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import GratkaDiagram from '@/components/ui/GratkaDiagram';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES, ARTEFACTS } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';

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
  { number: '01', title: 'Map & scope', detail: 'Automation Map, scope lock, AVG requirements. Gate: signed scope document.' },
  { number: '02', title: 'Web foundation', detail: 'Modern site, lead capture, staging review. Gate: client approves staging.' },
  { number: '03', title: 'Qualification assistant', detail: 'AI intake, no-tax-advice guardrails, UAT. Gate: assistant behaviour signed off.', highlight: true },
  { number: '04', title: 'Content engine', detail: 'Draft → approve → publish pipeline. Gate: first piece approved.' },
  { number: '05', title: 'Security & AVG', detail: 'Verwerkersovereenkomst, scoped access, EU hosting. Gate: AVG signed.' },
  { number: '06', title: 'Verify & handover', detail: 'UAT, README, optional care. Gate: client sign-off — go-live when ready.', highlight: true },
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
  title: 'Case study — Advisory firm modernisation | Quietforge',
  description:
    'How a Rotterdam accounting office (anonymised) is modernising with web upgrade, a qualification-only AI assistant and human-approved content — with AVG layer. In delivery.',
  openGraph: {
    title: 'Case study — Advisory firm modernisation | Quietforge',
    description:
      'Web upgrade + qualification-only assistant + content engine. AVG layer specified. In delivery — no fabricated outcomes.',
    url: 'https://services.flexgrafik.nl/results/advisory-modernisation',
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
    title: 'Case study — Advisory firm modernisation | Quietforge',
    description: 'Qualification only — no tax advice. Staged delivery with AVG layer. In delivery.',
    images: ['/og/results-advisory-modernisation.svg'],
  },
};

export default function AdvisoryModernisationCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  return (
    <>
      <Section padding="large">
        <Link
          href={ROUTES.results}
          className="mb-6 inline-block text-sm text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)]"
        >
          ← All results
        </Link>
        <Eyebrow>Case study {study.number} · in delivery</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4 max-w-3xl">
          {study.title}
        </h1>
        <p className="mb-2 font-mono text-sm text-[var(--qf-accent)]">{study.meta}</p>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          {study.context} Client anonymised throughout — described only as a Rotterdam accounting
          office. Outcomes will be reported once live; nothing is invented here.
        </p>

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

        <div className="mt-8 flex flex-wrap gap-4">
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
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Before vs after
        </h2>
        <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-2">
          <Card className="border-[var(--qf-warn)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
              Before — outdated digital presence
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-warn)]">✕</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-[var(--qf-ok)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-ok)]">
              After — modernised programme (in delivery)
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-ok)]">✓</span> {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Three integrated systems
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          {study.system}
        </p>
        <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-3">
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
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Staged delivery — six phases
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          Sequential sign-off gates. No launch dates claimed — go-live when the client is ready.
          Download the timeline for a printable version to share internally.
        </p>
        <div className="mb-8 overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4">
          <GratkaDiagram
            src={GRATKA.advisoryDeliveryTimelineSvg}
            alt="Staged delivery timeline: six phases with sign-off gates for advisory firm modernisation including web upgrade, qualification assistant and AVG layer"
            width={1200}
            height={820}
          />
        </div>
        <div className="grid gap-[var(--qf-sp-4)] sm:grid-cols-2">
          {DELIVERY_PHASES.map((phase) => (
            <Card
              key={phase.number}
              className={phase.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]' : ''}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <span className="shrink-0 font-mono text-lg font-bold text-[var(--qf-accent)]">
                  {phase.number}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1 font-bold text-[var(--qf-text)]">{phase.title}</h3>
                  <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{phase.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="large">
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
      </Section>

      <Section background="surface" padding="large">
        <Card className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            What&apos;s real today
          </p>
          <p className="mb-4 max-w-none text-[var(--qf-text)]">{study.real}</p>
          <p className="max-w-none font-mono text-sm text-[var(--qf-text-faint)]">
            Measurement: {study.measurement}
          </p>
        </Card>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Running an advisory or professional services firm?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. We&apos;ll score whether web + assistant + content is the
          right first build for your firm — and what AVG agreements you need before go-live.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

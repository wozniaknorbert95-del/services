import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES, EXTERNAL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';

const SLUG = 'sales-funnel';

const BEFORE_ITEMS = [
  'The same pricing questions answered by hand, all day',
  'Prospects wait days for a number — then go cold',
  'Details chased by email before you can even quote',
  'No clean record of who asked for what',
];

const AFTER_ITEMS = [
  'Guided 7-step configurator — client self-qualifies',
  'Open pricing visible before checkout — no phone call required',
  'Logo and specs uploaded in-flow — structured every time',
  'Qualified lead lands in inbox / CRM / sheet automatically',
];

const JOURNEY_STEPS = [
  { step: '00', title: 'Welcome', detail: 'Orient the client — what they will configure and how long it takes.' },
  { step: '01', title: 'Foundation', detail: 'Core package choices — the build-your-own base every other step builds on.' },
  { step: '02', title: 'Vehicle', detail: 'Mobile branding options — upsell without a sales call.' },
  { step: '03', title: 'Workwear', detail: 'Clothing branding — captured with the same logic as every other category.' },
  { step: '04', title: 'First impression', detail: 'Print and physical materials — no "what did you want again?" emails.' },
  { step: '05', title: 'Visibility', detail: 'On-site presence options — structured option data, not free text.' },
  { step: '06', title: 'Tools', detail: 'Equipment branding — dependencies and minimums enforced in the flow.' },
  { step: '07', title: 'Premium', detail: 'Finishing touches — final upsell inside the journey, not in your inbox.' },
  { step: '08', title: 'Checkout', detail: 'Summary, open price, upload assets, pay or book. Sticky cart visible throughout.', highlight: true },
];

const ROI_ROWS = [
  { manual: 'Same questions typed again and again', selfService: 'Flow asks once — answers stored in structure' },
  { manual: 'Number arrives days later via email', selfService: 'Open price visible in-session' },
  { manual: 'Every quote captured differently', selfService: 'Same fields, same format, every lead' },
  { manual: 'Prospect drops off — next step unclear', selfService: 'Progress bar + sticky cart keep orientation' },
];

export const metadata: Metadata = {
  title: 'Case study — Self-service quote & onboarding | Quietforge',
  description:
    'How a 7-step configurator with open pricing qualifies, quotes and books without manual email ping-pong. Process-proof case study with downloadable journey map.',
  openGraph: {
    title: 'Case study — Self-service quote & onboarding | Quietforge',
    description:
      '7-step configurator · progress bar · sticky cart · open pricing at checkout. Live production proof.',
    url: 'https://services.flexgrafik.nl/results/sales-funnel',
    images: [
      {
        url: '/og/results-sales-funnel.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Sales Funnel Engine configurator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Self-service quote & onboarding | Quietforge',
    description: 'Qualify · configure · price · pay — without typing the same reply again.',
    images: ['/og/results-sales-funnel.svg'],
  },
};

export default function SalesFunnelCaseStudyPage() {
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
        <Eyebrow>Case study {study.number} · production pattern</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4 max-w-3xl">
          {study.title}
        </h1>
        <p className="mb-2 font-mono text-sm text-[var(--qf-accent)]">{study.meta}</p>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          {study.context} This case study describes a live production wizard in the owner ecosystem —
          step names verified against source code, described generically so you can forward the
          downloads internally.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={GRATKA.salesFunnelJourneySvg} target="_blank" rel="noopener noreferrer" variant="secondary">
            Journey diagram (SVG) ↓
          </Button>
          <Button href={GRATKA.salesFunnelJourneyPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            Journey map (PDF) ↓
          </Button>
          <Button href={GRATKA.salesFunnelRoiPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            ROI framing sheet (PDF) ↓
          </Button>
          <Button href={EXTERNAL.zzpackageWizard} target="_blank" rel="noopener noreferrer" variant="ghost">
            See the live wizard →
          </Button>
        </div>
        <p className="mt-4 max-w-none text-sm text-[var(--qf-text-faint)]">
          Live wizard in the owner ecosystem (NL). Opens zzpackage.flexgrafik.nl — a working
          7-step configurator, not a mockup.
        </p>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Before vs after
        </h2>
        <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-2">
          <Card className="border-[var(--qf-warn)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
              Before — manual quoting
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
              After — self-service funnel
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
          Configurator journey — 7 steps + checkout
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          {study.system} Progress bar and sticky cart stay visible on every configuration step —
          per product rules, these elements are never removed or bypassed.
        </p>
        <div className="mb-8 overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4">
          <Image
            src={GRATKA.salesFunnelJourneySvg}
            alt="Self-service configurator journey: welcome, seven configuration steps with progress bar and sticky cart, then checkout with open pricing"
            width={1200}
            height={900}
            className="h-auto w-full min-w-[640px]"
          />
        </div>
        <div className="grid gap-[var(--qf-sp-4)]">
          {JOURNEY_STEPS.map((step) => (
            <Card
              key={step.step}
              className={step.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]' : ''}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="shrink-0 font-mono text-lg font-bold text-[var(--qf-accent)]">
                  {step.step}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                    {step.title}
                  </h3>
                  <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{step.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          ROI framing — qualitative only
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          No invented conversion rates or € saved. This is an honest process comparison you can use
          internally to decide whether a configurator is the right first build.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--qf-border)]">
                <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
                  Manual quote
                </th>
                <th className="py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-ok)]">
                  Self-service funnel
                </th>
              </tr>
            </thead>
            <tbody>
              {ROI_ROWS.map((row) => (
                <tr key={row.manual} className="border-b border-[var(--qf-border)]">
                  <td className="py-3 pr-4 text-[var(--qf-text-dim)]">{row.manual}</td>
                  <td className="py-3 text-[var(--qf-text-dim)]">{row.selfService}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-none text-sm text-[var(--qf-text-faint)]">
          Download the full framing sheet (PDF) for a printable version to share with a partner or
          accountant.
        </p>
      </Section>

      <Section padding="large">
        <Card className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            What&apos;s real
          </p>
          <p className="mb-4 max-w-none text-[var(--qf-text)]">{study.real}</p>
          <p className="max-w-none font-mono text-sm text-[var(--qf-text-faint)]">
            Measurement: {study.measurement}
          </p>
        </Card>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Want a funnel shaped around your offer?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. We&apos;ll map your quoting leaks and recommend whether
          a 7-step configurator — or something lighter — is the right first system.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { ROUTES, EXTERNAL, SITE_URL } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';
import CaseStudyLayout from '@/components/casestudy/CaseStudyLayout';

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
  title: 'Case study — Self-service quote & onboarding',
  description:
    'How a 7-step configurator with open pricing qualifies, quotes and books without manual email ping-pong. Process-proof case study with downloadable journey map.',
  openGraph: {
    title: 'Case study — Self-service quote & onboarding',
    description:
      '7-step configurator · progress bar · sticky cart · open pricing at checkout. Live production proof.',
    url: `${SITE_URL}/results/sales-funnel`,
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
    title: 'Case study — Self-service quote & onboarding',
    description: 'Qualify · configure · price · pay — without typing the same reply again.',
    images: ['/og/results-sales-funnel.svg'],
  },
};

export default function SalesFunnelCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  const downloadButtons = (
    <>
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
    </>
  );

  return (
    <CaseStudyLayout
      study={study}
      problemBefore={BEFORE_ITEMS}
      problemAfter={AFTER_ITEMS}
      architectureDiagramSvgUrl={GRATKA.salesFunnelJourneySvg}
      architectureDiagramAlt="Self-service configurator journey: welcome, seven configuration steps with progress bar and sticky cart, then checkout with open pricing"
      architectureDescription={
        <p>
          {study.system} Progress bar and sticky cart stay visible on every configuration step —
          per product rules, these elements are never removed or bypassed.
        </p>
      }
      buildModules={JOURNEY_STEPS}
      buildDescription={<p>Configurator journey — 7 steps + checkout.</p>}
      stack={['Next.js', 'React', 'Tailwind', 'Stripe', 'Webhook integration']}
      manifestKey="salesFunnel"
      videoKey="wizard"
      screenKey="wizardCheckout"
      downloadButtons={downloadButtons}
    >
      <h2 className="mt-8 text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
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
    </CaseStudyLayout>
  );
}

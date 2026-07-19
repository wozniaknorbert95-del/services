import type { Metadata } from 'next';
import { pricing } from '@/content/proof';
import { WEBSITE_ONLY_EXCEPTION, CTAS } from '@/content/conversion-copy';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/ui/FaqItem';
import AnalyticsPageView from '@/components/analytics/AnalyticsPageView';
import { ROUTES, PRODUCT_TIER_RANGES, SITE_URL } from '@/lib/constants';
import { PRICING_MATRIX } from '@/content/pricing';

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'Pricing — Automation Map & Conversion Systems',
  description:
    `Transparent pricing for small-business systems. Start with a ${PRICING_MATRIX.automationMap.price} Automation Map (credited toward your project). Builds from ${PRICING_MATRIX.inboxKiller.range}. Managed Automation ${PRICING_MATRIX.managedAutomation.range}. No lock-in.`,
  openGraph: {
    title: 'Pricing — Automation Map & Conversion Systems',
    description:
      `Transparent pricing for small-business systems. Start with a ${PRICING_MATRIX.automationMap.price} Automation Map (credited toward your project). Managed Automation ${PRICING_MATRIX.managedAutomation.range}.`,
    url: `${SITE_URL}/pricing`,
    images: [
      {
        url: '/og/pricing.svg',
        width: 1200,
        height: 630,
        alt: 'Pricing — clear, no surprises',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — clear, no surprises',
    description:
      'Transparent pricing for small-business systems. Start with a €290 Automation Map.',
    images: ['/og/pricing.svg'],
  },
};

/* ── data ── */
const SETUP_TIERS = [
  { name: 'Automation Map', desc: 'A focused working session plus a written roadmap.', price: pricing.discovery.price, note: pricing.discovery.note, timeline: '60–90 min session' },
  { name: 'Single System Build', desc: 'One module live + handover', price: pricing.singleSystem.from !== null ? `from ${pricing.singleSystem.from}` : 'Quoted', note: 'after Map', timeline: pricing.singleSystem.timeline !== null ? pricing.singleSystem.timeline : 'Varies' },
  { name: 'Ecosystem / Multi-System', desc: pricing.ecosystem.summary, price: pricing.ecosystem.from !== null ? `from ${pricing.ecosystem.from}` : 'Quoted', note: 'after Map', timeline: pricing.ecosystem.timeline !== null ? pricing.ecosystem.timeline : 'Varies', star: true },
];

const MRR_TIERS = [
  {
    name: 'Managed Automation',
    for: 'Keep it healthy & monitored',
    price: PRICING_MATRIX.managedAutomation.range,
  },
];

const FAQS = [
  {
    question: 'Is the Automation Map really credited?',
    answer: 'Yes — the full €290 comes off your first project.',
  },
  {
    question: 'Are there contracts?',
    answer: 'No. Setup is one-time; Managed Automation is monthly and you can cancel anytime.',
  },
  {
    question: 'Why "from"?',
    answer: 'Final setup price is fixed after the Map, once scope and ROI are clear. No surprises after that.',
  },
  {
    question: 'Do I have to take a monthly plan?',
    answer: "No. It's optional — most clients add it once they see the value.",
  },
  {
    question: 'What about usage costs?',
    answer: 'Any third-party/API costs are transparent and itemised — no hidden overages.',
  },
];

/* ── page ── */
export default function PricingPage() {
  return (
    <>
      <AnalyticsPageView event="pricing_view" />
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Clear pricing. No surprises.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-4">
          Start with a paid Automation Map. Then choose a build that fits the size of the problem — not the size of a retainer.
        </p>
        <p className="text-[var(--qf-text-dim)] text-sm max-w-[var(--qf-maxw-narrow)] mb-4 border-l-2 border-[var(--qf-accent)] pl-4">
          {WEBSITE_ONLY_EXCEPTION}
        </p>
        <p className="text-[var(--qf-text-dim)] text-sm max-w-[var(--qf-maxw-narrow)] mb-8">
          Budget below €1,200? Start with the Automation Map to scope before committing.{' '}
          <a href="/artefacts/automation-map-sample.pdf" className="text-[var(--qf-accent)] hover:underline">
            Download sample Map
          </a>
          . Not ready for a paid Map yet? Read the practical notes in the{' '}
          <a href={ROUTES.blog} className="text-[var(--qf-accent)] hover:underline">
            blog
          </a>
          .
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg" analyticsEvent="cta_book_map_click" analyticsDetail={{ location: 'pricing_hero' }}>
          {CTAS.bookAutomationMap}
        </Button>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B2 — PRODUCT TIERS (ranges)
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Eyebrow>Build tiers</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Starting ranges per system
        </h2>
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full text-left border-collapse max-w-3xl">
            <thead>
              <tr className="border-b border-[var(--qf-border)]">
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-wider text-[var(--qf-text-dim)]">
                  System
                </th>
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-wider text-[var(--qf-text-dim)]">
                  Example scope
                </th>
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-wider text-[var(--qf-text-dim)] text-right">
                  Range
                </th>
              </tr>
            </thead>
            <tbody>
              {PRODUCT_TIER_RANGES.map((tier) => (
                <tr key={tier.name} className="border-b border-[var(--qf-border)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--qf-text)] align-top">{tier.name}</td>
                  <td className="py-4 pr-4 text-sm text-[var(--qf-text-dim)] align-top">
                    <ul className="space-y-1">
                      {tier.examples.map((ex) => (
                        <li key={ex}>· {ex}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 pr-4 text-right font-mono text-[var(--qf-text)] align-top whitespace-nowrap">
                    €{tier.from.toLocaleString('en-NL')}–€{tier.to.toLocaleString('en-NL')}
                    {tier.perMonth ? '/mo' : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 gap-4 md:hidden max-w-3xl">
          {PRODUCT_TIER_RANGES.map((tier) => (
            <Card key={tier.name} className="p-4">
              <h3 className="font-semibold text-[var(--qf-text)]">{tier.name}</h3>
              <p className="mt-2 font-mono text-[var(--qf-accent)]">
                €{tier.from.toLocaleString('en-NL')}–€{tier.to.toLocaleString('en-NL')}
                {tier.perMonth ? '/mo' : ''}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-[var(--qf-text-dim)]">
                {tier.examples.map((ex) => (
                  <li key={ex}>· {ex}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--qf-text-faint)] max-w-2xl">
          Final quote fixed after your Automation Map — priced to outcome, not hourly billing.
          Multi-system builds can include an Operations Command Layer (owner cockpit + lead/order spine).
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — THE PATH
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-10">
          How working together is priced
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ① Map
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">Automation Map</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              A focused working session plus a written roadmap.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              {pricing.discovery.price}
            </div>
            <p className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">credited toward project</p>
          </Card>

          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ② Build (Single)
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">Single System Build</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              One module live + handover.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              {pricing.singleSystem.from !== null ? `from ${pricing.singleSystem.from}` : 'Quoted after Map'}
            </div>
            <p className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">quoted after Map</p>
          </Card>

          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ② Build (Ecosystem)
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">Multi-System</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              {pricing.ecosystem.summary} Example: Wizard + Inbox, or Operations Command Layer + two modules.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              {pricing.ecosystem.from !== null ? `from ${pricing.ecosystem.from}` : 'Quoted after Map'}
            </div>
            <p className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">quoted after Map</p>
          </Card>

          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ③ Run
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">Managed Automation</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              Keep it healthy & monitored.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              {pricing.managedAutomation.from}
            </div>
            <p className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">cancel anytime</p>
          </Card>
        </div>
        <p className="text-[var(--qf-text-dim)] text-sm max-w-[var(--qf-maxw-narrow)]">
          Low-risk first step. Pay for the build once. Keep it sharp monthly — only if you want to.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — STEP 1: AUTOMATION MAP
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>Step 1</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          Automation Map · <span className="text-[var(--qf-accent)]">{pricing.discovery.price}</span>
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-6">
          A focused 60–90 minute working session plus a written roadmap. We find your two or three
          biggest time-and-money leaks, calculate the ROI, and recommend the right first build.
        </p>
        <ul className="space-y-2 max-w-2xl mb-8">
          {[
            'Written Automation Map you keep — whatever you decide next.',
            'Clear ROI per recommendation — no vague promises.',
            'Fee credited toward your first project.',
            'No obligation to go further.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[var(--qf-text-dim)]">
              <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg" analyticsEvent="cta_book_map_click" analyticsDetail={{ location: 'pricing_discovery' }}>
          {CTAS.bookAutomationMap}
        </Button>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § D — STEP 2: BUILD
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Eyebrow>Step 2</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Build your system (one-time)
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--qf-border)]">
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold">
                  System
                </th>
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold">
                  What it does
                </th>
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold text-right">
                  From
                </th>
              </tr>
            </thead>
            <tbody>
              {SETUP_TIERS.map((tier) => (
                <tr key={tier.name} className="border-b border-[var(--qf-border)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--qf-text)]">
                    {tier.name} {('star' in tier && Boolean(tier.star)) && <span className="text-[var(--qf-accent)]">★</span>}
                  </td>
                  <td className="py-4 pr-4 text-[var(--qf-text-dim)] text-sm">{tier.desc}</td>
                  <td className="py-4 pr-4 text-[var(--qf-text)] font-bold text-right">{tier.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mb-6">
          <Card className="p-6">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Timeline
            </span>
            <h4 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-1">Single System Build</h4>
            <div className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-accent)]">
              {pricing.singleSystem.timeline !== null ? pricing.singleSystem.timeline : 'Varies by scope'}
            </div>
          </Card>
          <Card className="p-6">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Timeline
            </span>
            <h4 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-1">Multi-System</h4>
            <div className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-accent)]">
              {pricing.ecosystem.timeline !== null ? pricing.ecosystem.timeline : 'Varies by scope'}
            </div>
          </Card>
        </div>

        <p className="text-[var(--qf-text-faint)] text-sm italic max-w-2xl">
          Final quote is fixed after your Automation Map — priced to the value it creates, never by
          the hour.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § E — STEP 3: RUN
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>Step 3</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          Keep it running (optional, monthly)
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Your systems stay sharp as your business changes. Choose the level of care you want —
          cancel anytime.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--qf-border)]">
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold">
                  Plan
                </th>
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold">
                  For
                </th>
                <th className="py-3 pr-4 text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold text-right">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {MRR_TIERS.map((tier) => (
                <tr key={tier.name} className="border-b border-[var(--qf-border)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--qf-text)]">{tier.name}</td>
                  <td className="py-4 pr-4 text-[var(--qf-text-dim)] text-sm">{tier.for}</td>
                  <td className="py-4 pr-4 text-[var(--qf-text)] font-bold text-right">{tier.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button href={ROUTES.managedAutomation} variant="secondary" withArrow>
          See what Managed Automation includes
        </Button>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — WHY IT'S PRICED THIS WAY
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Why it&apos;s priced this way
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'You\u2019re buying an outcome, not hours.',
              body: 'Pricing reflects the time and money the system saves you — not how long it takes to build.',
            },
            {
              title: 'Architecture built for control, priced for SMB.',
              body: 'Governance, scan gates and human review — patterns usually reserved for large ops teams, without enterprise theatre.',
            },
            {
              title: 'Proven before it reaches you.',
              body: "Every module already runs a live business — you're not paying to be an experiment.",
            },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--qf-text-dim)]">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § G — PRICING FAQ
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Questions, answered.
        </h2>
        <div className="space-y-4 max-w-3xl">
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § H — FINAL CTA
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Start with {pricing.discovery.price} and total clarity.
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          No big commitment, no guesswork. Book an Automation Map, see the ROI, and decide
          from there.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg" analyticsEvent="cta_book_map_click" analyticsDetail={{ location: 'pricing_footer' }}>
          {CTAS.bookAutomationMap}
        </Button>
      </Section>
    </>
  );
}

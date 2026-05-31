import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES, PRICING } from '@/lib/constants';

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'Pricing — clear, no surprises | Quietforge',
  description:
    'Transparent pricing for small-business systems. Start with a €290 Automation Map (credited toward your project). Builds from €1,200. Managed plans from €99/mo. No lock-in.',
  openGraph: {
    title: 'Pricing — clear, no surprises | Quietforge',
    description:
      'Transparent pricing for small-business systems. Start with a €290 Automation Map (credited toward your project). Builds from €1,200. Managed plans from €99/mo.',
    url: 'https://services.flexgrafik.nl/pricing',
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
    title: 'Pricing — clear, no surprises | Quietforge',
    description:
      'Transparent pricing for small-business systems. Start with a €290 Automation Map.',
    images: ['/og/pricing.svg'],
  },
};

/* ── data ── */
const SETUP_TIERS = [
  { name: 'Inbox Killer', desc: 'Email that sorts, prioritises & drafts', price: `€${PRICING.inboxKiller.from.toLocaleString()}`, star: true },
  { name: 'Conversion Web Upgrade', desc: 'A fast site that captures and converts', price: `€${PRICING.webUpgrade.from.toLocaleString()}` },
  { name: 'Lead Magnet Game', desc: 'A branded quiz/game that collects leads', price: `€${PRICING.leadMagnetGame.from.toLocaleString()}` },
  { name: 'Sales Funnel Engine', desc: 'A step-by-step flow that quotes & books', price: `€${PRICING.salesFunnel.from.toLocaleString()}` },
];

const MRR_TIERS = [
  { name: 'Care', for: 'Keep it healthy & monitored', price: `€${PRICING.care}/mo` },
  { name: 'Manage', for: 'Actively tuned & improved', price: `€${PRICING.manage}/mo` },
  { name: 'Partner', for: 'Your ongoing AI operations', price: `€${PRICING.partner}/mo` },
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
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Clear pricing. No surprises.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start small, prove the value, then scale. Every engagement begins with a paid Automation
          Map — and its fee comes off your first project.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map — €290
        </Button>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — THE PATH
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-10">
          How working together is priced
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ① Map
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">Automation Map</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              A focused working session plus a written roadmap.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              €{PRICING.discovery}
            </div>
            <p className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">credited toward project</p>
          </Card>

          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ② Build
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">One-time setup</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              Productised systems, fixed price.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              from €{PRICING.inboxKiller.from.toLocaleString()}
            </div>
            <p className="text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">quoted after Map</p>
          </Card>

          <Card className="p-6">
            <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] mb-2">
              ③ Run
            </div>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">Managed Automation</h3>
            <p className="text-[var(--qf-text-dim)] text-sm mb-4">
              Keep it sharp, month after month.
            </p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              from €{PRICING.care}/mo
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
          Automation Map · <span className="text-[var(--qf-accent)]">€{PRICING.discovery}</span>
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
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
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
                    {tier.name} {tier.star && <span className="text-[var(--qf-accent)]">★</span>}
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
              Bundle
            </span>
            <h4 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-1">Growth</h4>
            <p className="text-sm text-[var(--qf-text-dim)] mb-3">Any 2 systems</p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              from €{PRICING.bundleGrowth.from.toLocaleString()}
            </div>
          </Card>
          <Card className="p-6">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Bundle
            </span>
            <h4 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-1">Pro</h4>
            <p className="text-sm text-[var(--qf-text-dim)] mb-3">Any 3 systems</p>
            <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)]">
              from €{PRICING.bundlePro.from.toLocaleString()}
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
              title: 'Enterprise-grade, small-business price.',
              body: 'My systems do the heavy lifting, so you get architecture usually reserved for big budgets, at a fraction of the cost.',
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
          Start with €{PRICING.discovery} and total clarity.
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          No big commitment, no guesswork. Book your Automation Map, see the ROI, and decide
          from there.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

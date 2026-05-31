import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES, PRICING } from '@/lib/constants';

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'Managed Automation — your systems, kept sharp | Quietforge',
  description:
    'Keep your automations healthy and improving. Monitoring, tuning and optimisation from €99/mo. Human-in-the-loop, no lock-in, cancel anytime.',
  openGraph: {
    title: 'Managed Automation — your systems, kept sharp | Quietforge',
    description:
      'Keep your automations healthy and improving. Monitoring, tuning and optimisation from €99/mo. Human-in-the-loop, no lock-in, cancel anytime.',
    url: 'https://services.flexgrafik.nl/solutions/managed-automation',
    images: [
      {
        url: '/og/managed-automation.svg',
        width: 1200,
        height: 630,
        alt: 'Managed Automation — your systems, kept sharp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Automation — your systems, kept sharp | Quietforge',
    description:
      'Keep your automations healthy and improving. Monitoring, tuning and optimisation from €99/mo.',
    images: ['/og/managed-automation.svg'],
  },
};

/* ── data ── */
const PLANS = [
  {
    name: 'Care',
    price: `€${PRICING.care}`,
    period: '/mo',
    tagline: 'Peace of mind.',
    features: [
      'Continuous monitoring & uptime checks',
      'Minor fixes & adjustments',
      'Monthly health report',
    ],
  },
  {
    name: 'Manage',
    price: `€${PRICING.manage}`,
    period: '/mo',
    tagline: 'Actively improved.',
    highlighted: true,
    badge: 'most popular',
    features: [
      'Everything in Care',
      'Active tuning (lanes, drafts, flows)',
      'Priority support',
      'Small enhancements included',
    ],
  },
  {
    name: 'Partner',
    price: `€${PRICING.partner}`,
    period: '/mo',
    tagline: 'Your AI operations, handled.',
    features: [
      'Everything in Manage',
      'Drift monitoring & proactive optimisation',
      'New automations as you grow',
      'Strategic advisory ("AI COO" on call)',
    ],
  },
];

const ALWAYS_INCLUDED = [
  'Human-in-the-loop — nothing acts without your approval.',
  'Transparent reporting — you see what changed and why.',
  'Your data stays yours.',
  'A real person who knows your system (not a ticket queue).',
];

const FAQS = [
  {
    question: 'Do I need a plan?',
    answer: "No — it's optional. But systems improve fastest when they're cared for.",
  },
  {
    question: 'Can I change plans?',
    answer: 'Anytime, up or down.',
  },
  {
    question: 'What if something breaks?',
    answer: 'Care and above include monitoring and fixes — usually before you notice.',
  },
  {
    question: 'Will it act without me?',
    answer: 'Never. Human-in-the-loop is built into every plan.',
  },
];

/* ── page ── */
export default function ManagedAutomationPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>Managed Automation</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Your systems, kept sharp — month after month.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Software isn&apos;t &quot;set and forget&quot;. Your AI worker keeps learning as your
          business changes — monitored, tuned and improved, so it stays as good on day 300 as it
          was on day one.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — WHY A LIVING SYSTEM NEEDS CARE
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          A living system, not a one-off
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Inboxes change. Offers change. Customers change. A system left untouched slowly drifts out
          of step with your business. Managed Automation keeps yours aligned, accurate and improving
          — without you lifting a finger.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — THE THREE PLANS
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Choose your level of care
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.highlighted ? 'accent' : 'default'}
              className="flex flex-col p-6 h-full"
            >
              {plan.badge && (
                <span className="mb-2 inline-block w-fit text-[var(--qf-fs-xs)] uppercase tracking-[0.08em] text-[var(--qf-bg)] bg-[var(--qf-accent)] px-2 py-0.5 rounded-[var(--qf-radius)]">
                  {plan.badge}
                </span>
              )}
              <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)]">
                {plan.name}
              </span>
              <div className="my-2 text-[var(--qf-fs-2xl)] text-[var(--qf-text)]">
                {plan.price}
                <span className="text-[var(--qf-fs-sm)] text-[var(--qf-text-faint)]">
                  {plan.period}
                </span>
              </div>
              <p className="text-sm text-[var(--qf-text-dim)] mb-4 italic">{plan.tagline}</p>
              <ul className="mb-6 flex-1 list-none space-y-2 p-0">
                {plan.features.map((feature) => (
                  <li key={feature} className="relative pl-6 text-[var(--qf-text-dim)] text-sm">
                    <span className="absolute left-0 text-[var(--qf-ok)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={ROUTES.bookDiscovery}
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full justify-center"
              >
                Book your Automation Map
              </Button>
            </Card>
          ))}
        </div>
        <p className="text-center text-[var(--qf-text-dim)] text-sm">
          Not sure which? Your Automation Map will recommend one.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § D — WHAT'S ALWAYS INCLUDED
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h3 className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)] mb-6">
          Always included, every plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {ALWAYS_INCLUDED.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
              <p className="text-[var(--qf-text-dim)]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § E — NO LOCK-IN
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          No contracts. No lock-in.
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Stay because it works, not because you&apos;re trapped. Cancel anytime — your systems
          remain yours.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — FAQ
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
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
          § G — FINAL CTA
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Keep your systems working as hard as you do.
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button href={ROUTES.bookDiscovery} withArrow size="lg">
            Book your Automation Map
          </Button>
          <Button href={ROUTES.pricing} variant="secondary" withArrow>
            Talk through the plans
          </Button>
        </div>
      </Section>
    </>
  );
}

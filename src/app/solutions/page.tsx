'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import IntentRouter from '@/components/home/IntentRouter';
import { HomeIntentProvider } from '@/lib/home-intent';
import { fadeIn, slideUp, staggerContainer } from '@/lib/motion';
import { ROUTES, PRICING } from '@/lib/constants';
import { formatRange } from '@/content/pricing';
import { SOLUTIONS_NAV } from '@/lib/navigation';
import { CTAS } from '@/content/conversion-copy';

const M = {
  div: motion.div,
};

const [SALES_NAV, WEB_NAV, LEAD_NAV, INBOX_NAV, MRR_NAV] = SOLUTIONS_NAV;

const SPEARHEAD = {
  label: 'QUOTE & CLOSE — Live proof #1',
  title: SALES_NAV.label,
  badge: SALES_NAV.badge ?? 'Spearhead',
  who: 'Owners stuck in quote ping-pong — print, branding, trades, and any custom product that needs a priced path to payment.',
  what: 'A guided configurator with open pricing and checkout — plus an optional Complex Quote & Design Intake (INSPIRE pattern): structured request → visual direction → priced Wizard handoff.',
  outcomes: [
    'End repeated manual quoting',
    'Prospects see price and next step without phone tennis',
    'Optional design intake before checkout (supervised lab proof)',
  ],
  price: SALES_NAV.price ?? formatRange(PRICING.salesFunnel.from, PRICING.salesFunnel.to),
  href: SALES_NAV.href,
};

const CAPTURE = [
  {
    title: WEB_NAV.label,
    what: 'A conversion-ready trust site: clear CTAs, mobile-ready presence, and a path into quoting — qualification-ready architecture without pretending a full portal agent is live.',
    outcomes: ['Wizard-first routing', 'Lead capture and clear next steps', 'Supervised sales chat where it fits'],
    price: WEB_NAV.price ?? formatRange(PRICING.webUpgrade.from, PRICING.webUpgrade.to),
    href: WEB_NAV.href,
  },
  {
    title: LEAD_NAV.label,
    what: 'Selective acquisition: register, play, earn a reward, then bridge into the Wizard. Best when engagement fits the buyer — not a default after every website project.',
    outcomes: ['Qualified contacts over cold forms', 'Tracked handoff to quoting', 'Reward ladder tied to the buying path'],
    price: LEAD_NAV.price ?? formatRange(PRICING.leadMagnetGame.from, PRICING.leadMagnetGame.to),
    href: LEAD_NAV.href,
  },
];

const OPERATE = {
  label: 'OPERATE & RESPOND',
  title: INBOX_NAV.label,
  badge: INBOX_NAV.badge ?? 'Operate',
  who: 'Teams drowning in mixed inboxes — consultants, accountants, agencies and service businesses.',
  what: 'Inbox classified into clear lanes, draft replies prepared, every send waiting for human approval. Separate from the Operations Command Layer (multi-system ops cockpit after a Map).',
  outcomes: [
    'Hours back every week',
    'Fewer lost leads and invoices',
    'Full control — nothing sends without approval',
  ],
  price: INBOX_NAV.price ?? formatRange(PRICING.inboxKiller.from, PRICING.inboxKiller.to),
  href: INBOX_NAV.href,
};

const MRR = {
  label: 'KEEP IMPROVING',
  title: MRR_NAV.label,
  badge: MRR_NAV.badge,
  what: 'Monitoring, supervised content hygiene, weekly owner brief options, and scoped improvements — without a bloated retainer. Care / Manage / Partner tiers spell out what changes.',
  outcomes: [
    'Health checks and change allowance by tier',
    'Optional supervised content prepare → approve → publish',
    'Weekly decision brief on higher tiers',
  ],
  price: MRR_NAV.price ?? formatRange(PRICING.managedAutomation.from, PRICING.managedAutomation.to, true),
  href: MRR_NAV.href,
};

export default function SolutionsPage() {
  return (
    <>
      <Section padding="large">
        <M.div variants={fadeIn} initial="initial" animate="animate">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6">
            Quote and close first. Then capture, operate, and keep improving.
          </h1>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
            Quietforge deploys conversion systems proven inside FlexGrafik — starting with the Wizard
            Cash Engine. An Automation Map (€290, credited) decides fit before any build.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={ROUTES.bookDiscovery}
              withArrow
              size="lg"
              analyticsEvent="cta_book_map_click"
              analyticsDetail={{ location: 'solutions_hero' }}
            >
              {CTAS.bookAutomationMap}
            </Button>
            <Button href={ROUTES.howItWorks} variant="ghost" withArrow>
              See how it works
            </Button>
          </div>
        </M.div>
      </Section>

      {/* Module picker — moved off home (site-map §3 v4.0) */}
      <HomeIntentProvider>
        <IntentRouter />
      </HomeIntentProvider>

      {/* Spearhead: Wizard */}
      <Section background="surface" padding="large">
        <div className="mb-6">
          <Eyebrow>{SPEARHEAD.label}</Eyebrow>
        </div>

        <Card variant="spearhead" className="p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight">{SPEARHEAD.title}</h2>
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-mono font-semibold bg-[var(--qf-accent)] text-[var(--qf-bg)]">
                  {SPEARHEAD.badge}
                </span>
              </div>
              <p className="text-[var(--qf-text-dim)] mb-2">{SPEARHEAD.who}</p>
              <p className="text-[var(--qf-text)] mb-6">{SPEARHEAD.what}</p>

              <ul className="space-y-2 mb-8">
                {SPEARHEAD.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-[var(--qf-text)]">
                    <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
                    {o}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={ROUTES.bookDiscovery}
                  withArrow
                  size="lg"
                  analyticsEvent="cta_book_map_click"
                  analyticsDetail={{ location: 'solutions_spearhead' }}
                >
                  {CTAS.bookAutomationMap}
                </Button>
                <Button href={SPEARHEAD.href} variant="secondary" withArrow>
                  Learn more
                </Button>
                <span className="text-[var(--qf-text-faint)] text-sm font-mono">{SPEARHEAD.price}</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-2 w-64 shrink-0">
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4">
                <div className="text-[var(--qf-text-faint)] text-xs font-mono mb-2">configure</div>
                <div className="space-y-1.5">
                  {['Package', 'Options', 'Open price'].map((label) => (
                    <div
                      key={label}
                      className="h-5 rounded-sm border border-[var(--qf-border)] px-2 text-[10px] font-mono text-[var(--qf-text-dim)] flex items-center"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center text-[var(--qf-text-faint)] text-xs">↓</div>
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-4">
                <div className="text-[var(--qf-accent)] text-xs font-mono mb-2">checkout · Mollie</div>
                <p className="text-[10px] text-[var(--qf-text-dim)] font-mono">
                  Optional: design intake → mockup direction → wizard
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Capture */}
      <Section padding="large">
        <div className="mb-8">
          <Eyebrow>CAPTURE & QUALIFY</Eyebrow>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
            Get the right visitors onto a clear path — website first, game when the engagement model fits.
          </p>
        </div>

        <M.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CAPTURE.map((item) => (
            <M.div key={item.title} variants={slideUp}>
              <Card hover interactive className="h-full flex flex-col p-6">
                <h3 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-2">{item.title}</h3>
                <p className="text-[var(--qf-text-dim)] text-sm mb-4 flex-1">{item.what}</p>
                <ul className="space-y-1.5 mb-6">
                  {item.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-[var(--qf-text)]">
                      <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--qf-border)]">
                  <span className="text-[var(--qf-text-faint)] text-xs font-mono">{item.price}</span>
                  <Link
                    href={item.href}
                    className="text-[var(--qf-accent)] text-sm font-semibold hover:text-[var(--qf-text)] transition-colors inline-flex items-center gap-1"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Card>
            </M.div>
          ))}
        </M.div>
      </Section>

      {/* Operate: Inbox */}
      <Section background="surface" padding="large">
        <div className="mb-6">
          <Eyebrow>{OPERATE.label}</Eyebrow>
        </div>
        <Card className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight">{OPERATE.title}</h2>
            <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-mono font-semibold border border-[var(--qf-border)] text-[var(--qf-text-dim)]">
              {OPERATE.badge}
            </span>
          </div>
          <p className="text-[var(--qf-text-dim)] mb-2 max-w-2xl">{OPERATE.who}</p>
          <p className="text-[var(--qf-text)] mb-6 max-w-2xl">{OPERATE.what}</p>
          <ul className="space-y-2 mb-8 max-w-xl">
            {OPERATE.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-[var(--qf-text)]">
                <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
                {o}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={OPERATE.href} withArrow>
              Learn more
            </Button>
            <span className="text-[var(--qf-text-faint)] text-sm font-mono">{OPERATE.price}</span>
          </div>
          <p className="mt-6 text-sm text-[var(--qf-text-faint)] max-w-2xl">
            Need leads, orders and approvals in one owner cockpit? That is the{' '}
            <strong className="text-[var(--qf-text-dim)] font-semibold">Operations Command Layer</strong>{' '}
            — scoped after a Map under multi-system builds. See{' '}
            <Link href={ROUTES.resultsJadziaCoi} className="text-[var(--qf-accent)] hover:underline">
              Jadzia COI proof
            </Link>
            .
          </p>
        </Card>
      </Section>

      {/* Managed */}
      <Section padding="large">
        <div className="mb-6">
          <Eyebrow>{MRR.label}</Eyebrow>
        </div>
        <Card variant="accent" className="p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-3">{MRR.title}</h2>
              <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-6">{MRR.what}</p>
              <ul className="space-y-2 mb-8">
                {MRR.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-[var(--qf-text)]">
                    <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Button href={MRR.href} withArrow size="lg">
                  See Managed Automation
                </Button>
                <span className="text-[var(--qf-text-faint)] text-sm font-mono">{MRR.price}</span>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section background="surface" padding="large">
        <div className="max-w-2xl">
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
            Not sure which system fits?
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            That is what the Automation Map is for. In 60–90 minutes we find your 2–3 biggest leaks,
            show ROI logic, and recommend Wizard, capture, inbox ops — or a clear no-build. The fee
            is credited toward your first project.
          </p>
          <Button
            href={ROUTES.bookDiscovery}
            withArrow
            size="xl"
            analyticsEvent="cta_book_map_click"
            analyticsDetail={{ location: 'solutions_footer' }}
          >
            {CTAS.bookAutomationMap}
          </Button>
        </div>
      </Section>
    </>
  );
}

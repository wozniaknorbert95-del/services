'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { fadeIn, slideUp, staggerContainer } from '@/lib/motion';
import { ROUTES, PRICING } from '@/lib/constants';
import { formatRange } from '@/content/pricing';
import { SOLUTIONS_NAV } from '@/lib/navigation';
import { CTAS } from '@/content/conversion-copy';

/* ── local motion wrappers ── */
const M = {
  div: motion.div,
};

const [INBOX_NAV, WEB_NAV, SALES_NAV, LEAD_NAV, MRR_NAV] = SOLUTIONS_NAV;

/* ── data — routes/labels from navigation.ts; copy from route-content-patches §2 ── */
const STEP_1 = {
  label: 'STEP 1 — Tame the chaos',
  title: INBOX_NAV.label,
  badge: INBOX_NAV.badge ?? 'Start here',
  who: 'Small businesses drowning in email — consultants, accountants, agencies and service teams.',
  what: 'Your inbox is classified into clear lanes, draft replies are prepared, and every send waits for human approval.',
  outcomes: [
    'Hours back every week',
    'Fewer lost leads and invoices',
    'Full control — nothing sends without approval',
  ],
  price: INBOX_NAV.price ?? formatRange(PRICING.inboxKiller.from, PRICING.inboxKiller.to),
  href: INBOX_NAV.href,
};

const STEP_2 = [
  {
    title: WEB_NAV.label,
    what: 'A modern conversion-ready website for businesses whose current site looks outdated, fails on mobile or gives visitors no clear next step.',
    outcomes: ['Modern, trustworthy presence', 'Lead capture and clear CTAs built in', 'Analytics-ready structure'],
    price: WEB_NAV.price ?? formatRange(PRICING.webUpgrade.from, PRICING.webUpgrade.to),
    href: WEB_NAV.href,
  },
  {
    title: SALES_NAV.label,
    what: 'Quotes, bookings and qualifying handled by a guided flow — the visitor answers the right questions, sees the next step, and reaches checkout or a human-approved handoff.',
    outcomes: [
      'End repeated manual quoting',
      'Structure lead qualification before your time is spent',
      'Checkout, quote or CRM handoff',
    ],
    price: SALES_NAV.price ?? formatRange(PRICING.salesFunnel.from, PRICING.salesFunnel.to),
    href: SALES_NAV.href,
  },
  {
    title: LEAD_NAV.label,
    what: 'Experience-first lead capture for Dutch ZZP: register, play, earn a reward, then move into a self-service wizard handoff.',
    outcomes: [
      'Qualified contacts, not cold forms',
      'Longer sessions before the ask',
      'Tracked funnel to quoting',
    ],
    price: LEAD_NAV.price ?? formatRange(PRICING.leadMagnetGame.from, PRICING.leadMagnetGame.to),
    href: LEAD_NAV.href,
  },
];

const MRR = {
  label: 'KEEP IT RUNNING',
  title: MRR_NAV.label,
  badge: MRR_NAV.badge,
  what: 'Your system stays monitored, tuned and improving after launch — without locking you into a bloated retainer.',
  outcomes: ['Monitoring and health checks', 'Small improvements as your business changes', 'Priority support and quarterly review options'],
  price: MRR_NAV.price ?? formatRange(PRICING.managedAutomation.from, PRICING.managedAutomation.to, true),
  href: MRR_NAV.href,
};

/* ── page ── */
export default function SolutionsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <Section padding="large">
        <M.div variants={fadeIn} initial="initial" animate="animate">
          <Eyebrow>Solutions</Eyebrow>
          <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6">
            A few sharp systems for the business leak that hurts most.
          </h1>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
            Start with the problem: inbox chaos, an outdated website, manual quoting, cold traffic or
            systems that decay after launch. Each solution is built from modules already running in my
            own production ecosystem.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={ROUTES.bookDiscovery} withArrow size="lg" analyticsEvent="cta_book_map_click">
              {CTAS.bookAutomationMap}
            </Button>
            <Button href={ROUTES.howItWorks} variant="ghost" withArrow>
              See how it works
            </Button>
          </div>
        </M.div>
      </Section>

      {/* ── STEP 1: INBOX KILLER (spearhead) ── */}
      <Section background="surface" padding="large">
        <div className="mb-6">
          <Eyebrow>{STEP_1.label}</Eyebrow>
        </div>

        <Card variant="spearhead" className="p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight">
                  {STEP_1.title}
                </h2>
                <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-mono font-semibold bg-[var(--qf-accent)] text-[var(--qf-bg)]">
                  {STEP_1.badge}
                </span>
              </div>
              <p className="text-[var(--qf-text-dim)] mb-2">{STEP_1.who}</p>
              <p className="text-[var(--qf-text)] mb-6">{STEP_1.what}</p>

              <ul className="space-y-2 mb-8">
                {STEP_1.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-[var(--qf-text)]">
                    <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
                    {o}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <Button href={STEP_1.href} withArrow size="lg">
                  Learn more
                </Button>
                <span className="text-[var(--qf-text-faint)] text-sm font-mono">
                  {STEP_1.price}
                </span>
              </div>
            </div>

            {/* Visual placeholder: inbox → sorted lanes */}
            <div className="hidden lg:flex flex-col gap-2 w-64 shrink-0">
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4">
                <div className="text-[var(--qf-text-faint)] text-xs font-mono mb-2">inbox</div>
                <div className="space-y-1.5">
                  {['Re: Quote request', 'Invoice #4421', 'Newsletter', 'Urgent: lead'].map(
                    (label, i) => (
                      <div
                        key={label}
                        className={`h-5 rounded-sm bg-[var(--qf-border)] ${['opacity-100', 'opacity-80', 'opacity-60', 'opacity-40'][i] ?? 'opacity-40'}`}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="text-center text-[var(--qf-text-faint)] text-xs">↓</div>
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-4">
                <div className="text-[var(--qf-accent)] text-xs font-mono mb-2">sorted</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {['lead', 'client', 'invoice', 'noise'].map((lane) => (
                    <div
                      key={lane}
                      className="rounded-sm border border-[var(--qf-border)] px-2 py-1 text-[10px] text-[var(--qf-text-dim)] font-mono uppercase"
                    >
                      {lane}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ── STEP 2: LADDER (3 cards) ── */}
      <Section padding="large">
        <div className="mb-8">
          <Eyebrow>STEP 2 — Win more clients</Eyebrow>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
            Once your inbox is calm, these are the next steps. Each one builds on the last.
          </p>
        </div>

        <M.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STEP_2.map((item) => (
            <M.div key={item.title} variants={slideUp}>
              <Card hover interactive className="h-full flex flex-col p-6">
                <h3 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-2">
                  {item.title}
                </h3>
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

      {/* ── KEEP IT RUNNING: Managed Automation ── */}
      <Section background="surface" padding="large">
        <div className="mb-6">
          <Eyebrow>{MRR.label}</Eyebrow>
        </div>

        <Card variant="accent" className="p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-3">
                {MRR.title}
              </h2>
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

            {/* Visual: statusbar-style meta strip */}
            <div className="hidden lg:flex flex-col gap-3 w-56 shrink-0">
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--qf-text-faint)]">status</span>
                  <span className="text-[var(--qf-ok)]">● healthy</span>
                </div>
              </div>
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--qf-text-faint)]">uptime</span>
                  <span className="text-[var(--qf-text-dim)]">monitored</span>
                </div>
              </div>
              <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--qf-text-faint)]">response</span>
                  <span className="text-[var(--qf-text-dim)]">&lt; 4h</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ── FINAL CTA BAND ── */}
      <Section padding="large">
        <div className="max-w-2xl">
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
            Not sure where to start?
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            That is exactly what the Automation Map is for. In 60–90 minutes we find your 2–3 biggest
            time and money leaks — and show you the ROI before you commit to anything bigger. The
            fee is credited toward your first project.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow size="xl" analyticsEvent="cta_book_map_click">
            {CTAS.bookAutomationMap}
          </Button>
        </div>
      </Section>
    </>
  );
}

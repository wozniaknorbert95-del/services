import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES, PRICING } from '@/lib/constants';

const FAQS = [
  {
    question: 'Do I need to start from scratch?',
    answer: 'Not always — we assess in your Automation Map whether to upgrade or rebuild.',
  },
  {
    question: 'Will I be able to edit it?',
    answer: 'Yes — you get a simple way to update content, plus optional monthly care.',
  },
  {
    question: 'How long does it take?',
    answer: 'Typically days to a couple of weeks, depending on scope — confirmed after the Map.',
  },
];

export default function WebUpgradePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-2xl">
            <Eyebrow>Ladder · grow from here</Eyebrow>
            <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6">
              A website that{' '}
              <span className="text-[var(--qf-text-dim)]">finally earns its keep.</span>
            </h1>
            <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
              A fast, modern site built to turn visitors into enquiries — clear actions, captured
              leads, and real tracking, so you finally know what&apos;s working.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button href={ROUTES.bookDiscovery} withArrow size="lg">
                Book your Automation Map
              </Button>
              <Button href={ROUTES.howItWorks} variant="ghost" withArrow>
                See how it works
              </Button>
            </div>
            <p className="text-sm text-[var(--qf-ok)]">
              <span className="mr-1">✓</span> Lightweight and fast — no bloated page-builders.
            </p>
          </div>

          {/* Visual: before → after site */}
          <div className="hidden lg:flex flex-col gap-3 w-72 shrink-0">
            <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-5">
              <div className="text-[var(--qf-text-faint)] text-xs font-mono mb-3">before</div>
              <div className="space-y-2 opacity-60">
                <div className="h-3 w-3/4 rounded-sm bg-[var(--qf-border)]" />
                <div className="h-3 w-1/2 rounded-sm bg-[var(--qf-border)]" />
                <div className="h-20 rounded-sm bg-[var(--qf-border)]" />
                <div className="h-3 w-full rounded-sm bg-[var(--qf-border)]" />
                <div className="h-3 w-2/3 rounded-sm bg-[var(--qf-border)]" />
              </div>
            </div>
            <div className="text-center text-[var(--qf-text-faint)] text-xs font-mono">↓ web upgrade ↓</div>
            <div className="rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-5">
              <div className="text-[var(--qf-accent)] text-xs font-mono mb-3">after</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded-sm bg-[var(--qf-border)]" />
                  <div className="h-3 w-16 rounded-sm bg-[var(--qf-accent)] opacity-40" />
                </div>
                <div className="h-20 rounded-sm border border-[var(--qf-border)] flex items-center justify-center">
                  <span className="text-[10px] text-[var(--qf-text-faint)] font-mono">hero + cta</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 rounded-sm bg-[var(--qf-border)]" />
                  <div className="h-8 rounded-sm bg-[var(--qf-border)]" />
                  <div className="h-8 rounded-sm bg-[var(--qf-border)]" />
                </div>
                <div className="h-6 rounded-sm bg-[var(--qf-accent)] opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — THE PROBLEM
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          When your site quietly costs you clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            'It looks dated — and first impressions decide.',
            "It's slow or clumsy on a phone, where most people land.",
            "There's no clear next step, so visitors leave without acting.",
            'You have no idea where your enquiries actually come from.',
          ].map((pain) => (
            <Card key={pain} className="p-6">
              <p className="text-[var(--qf-text)]">{pain}</p>
            </Card>
          ))}
        </div>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          A site that doesn&apos;t convert isn&apos;t neutral — it&apos;s a leak you pay for in lost
          clients every single month.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — WHAT WE DO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          What a Web Upgrade includes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Audit',
              body: 'UX, content and technical health of your current site.',
            },
            {
              title: 'Mobile-first layout',
              body: 'Clean, fast, and built around one clear action.',
            },
            {
              title: 'Lead capture',
              body: 'Forms wired to your inbox / CRM, with instant confirmation emails.',
            },
            {
              title: 'Real tracking',
              body: 'GA4 set up so you see what brings clients in.',
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
          § D — WHAT YOU GET
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Eyebrow>What you get</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          What changes for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "A site you're proud to share.",
              body: 'No more apologising for it.',
            },
            {
              title: 'More enquiries.',
              body: 'Clear paths that guide visitors to act.',
            },
            {
              title: 'Clarity.',
              body: "You finally see what's working and what isn't.",
            },
            {
              title: 'Speed.',
              body: 'Pages that load fast and feel effortless.',
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
          § E — SETUP + KEPT RUNNING
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Set up once. Kept sharp every month.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Setup (one-time)
            </span>
            <h3 className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)] mb-4">
              From €{PRICING.webUpgrade.from.toLocaleString()}
            </h3>
            <p className="text-[var(--qf-text-dim)] mb-6">
              Audit, design, build, tracking, handover.
            </p>
            <Button href={ROUTES.bookDiscovery} withArrow>
              Book your Automation Map
            </Button>
          </Card>

          <Card variant="accent" className="p-8">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Managed Automation (monthly)
            </span>
            <h3 className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)] mb-4">
              From €{PRICING.care}/mo
            </h3>
            <p className="text-[var(--qf-text-dim)] mb-6">
              Content tweaks, performance monitoring, ongoing conversion improvements.
            </p>
            <Button href={ROUTES.managedAutomation} variant="secondary" withArrow>
              See Managed Automation
            </Button>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — UNDER THE HOOD
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Card className="p-8 bg-[var(--qf-bg-inset)] border-[var(--qf-border)]">
          <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-3">
            For the technically curious
          </h3>
          <p className="text-[var(--qf-text-dim)] max-w-[var(--qf-maxw-narrow)] mb-4">
            Built on a lean, single-source-of-truth pipeline (the same discipline behind my
            larger systems) — no heavyweight page-builders, just fast, maintainable code.
          </p>
          <a
            href="https://portfolio.flexgrafik.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--qf-accent)] text-sm font-semibold hover:text-[var(--qf-text)] transition-colors"
          >
            Explore Pillar 3 →
          </a>
        </Card>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § G — FAQ
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
        <div className="max-w-2xl">
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
            Turn your site into your hardest-working salesperson.
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            Start with a paid Automation Map (€{PRICING.discovery}, credited). We&apos;ll show you
            exactly what&apos;s leaking and what an upgrade would return.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow size="xl">
            Book your Automation Map
          </Button>
        </div>
      </Section>
    </>
  );
}

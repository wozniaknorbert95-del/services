import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES, PRICING } from '@/lib/constants';

const FAQS = [
  {
    question: 'Is it a lot to maintain?',
    answer: 'No — it runs on its own, and optional monthly care keeps it fresh.',
  },
  {
    question: 'Will it match my brand?',
    answer: 'Fully — visuals and content are built around you.',
  },
  {
    question: 'Does it work on mobile?',
    answer: 'Yes — built mobile-first and fast.',
  },
];

export default function LeadMagnetGamePage() {
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
              Turn visitors into leads{' '}
              <span className="text-[var(--qf-text-dim)]">— and give them a reason to stay.</span>
            </h1>
            <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
              A branded quiz or mini-game that captures contacts the moment people are most
              engaged, rewards them, and feeds your list automatically.
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
              <span className="mr-1">✓</span> Built on my own game engine — not a plug-in template.
            </p>
          </div>

          {/* Visual: game → lead capture */}
          <div className="hidden lg:flex flex-col items-center gap-3 w-64 shrink-0">
            <div className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-5">
              <div className="text-[var(--qf-accent)] text-xs font-mono mb-3 text-center">play</div>
              <div className="flex items-center justify-center gap-3">
                <div className="h-8 w-8 rounded-sm border border-[var(--qf-border)] flex items-center justify-center text-[var(--qf-text-dim)] text-xs">?</div>
                <div className="h-8 w-8 rounded-sm border border-[var(--qf-border)] flex items-center justify-center text-[var(--qf-text-dim)] text-xs">?</div>
                <div className="h-8 w-8 rounded-sm border border-[var(--qf-border)] flex items-center justify-center text-[var(--qf-text-dim)] text-xs">?</div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-1 w-8 rounded-full bg-[var(--qf-accent)]" />
                <div className="h-1 w-8 rounded-full bg-[var(--qf-border)]" />
                <div className="h-1 w-8 rounded-full bg-[var(--qf-border)]" />
              </div>
            </div>
            <span className="text-[var(--qf-text-faint)] text-xs font-mono">capture</span>
            <div className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-5">
              <div className="text-[var(--qf-text-faint)] text-xs font-mono mb-3 text-center">lead</div>
              <div className="space-y-2">
                <div className="h-6 w-full rounded-sm bg-[var(--qf-border)]" />
                <div className="h-6 w-full rounded-sm bg-[var(--qf-border)]" />
                <div className="h-8 w-full rounded-sm bg-[var(--qf-accent)] opacity-40" />
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
          Traffic that never turns into contacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            'People visit, look, and leave — no reason to engage.',
            'Plain forms get ignored.',
            'Your competitors all look and sound the same.',
          ].map((pain) => (
            <Card key={pain} className="p-6">
              <p className="text-[var(--qf-text)]">{pain}</p>
            </Card>
          ))}
        </div>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Attention is the hardest thing to earn — wasting it on a page no one interacts with is
          the most expensive miss of all.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — WHAT WE DO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          How the Lead Magnet Game works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'A simple, on-brand mechanic',
              body: 'A quiz or a quick mini-game — built around your brand.',
            },
            {
              title: 'Lead capture built in',
              body: 'Name and email, exactly when engagement peaks.',
            },
            {
              title: 'A reward',
              body: 'A discount, a free consult, a result worth sharing.',
            },
            {
              title: 'Connected',
              body: 'Every lead flows to your list / CRM, with metrics on plays and sign-ups.',
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
              title: 'More leads.',
              body: 'Interaction converts far better than a static form.',
            },
            {
              title: 'More time on page.',
              body: 'Engagement that search engines and clients both reward.',
            },
            {
              title: 'Something to talk about.',
              body: 'A memorable, shareable asset.',
            },
            {
              title: 'Real numbers.',
              body: 'Plays, completions and conversions, tracked.',
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
              From €{PRICING.leadMagnetGame.from.toLocaleString()}
            </h3>
            <p className="text-[var(--qf-text-dim)] mb-6">
              Mechanic, branding, build, integration, analytics.
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
              New themes/seasons, reward updates, optimisation.
            </p>
            <Button href={ROUTES.managedAutomation} variant="secondary" withArrow>
              See Managed Automation
            </Button>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — DIFFERENTIATOR
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Card className="p-8 bg-[var(--qf-bg-inset)] border-[var(--qf-border)]">
          <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-3">
            Why this is different
          </h3>
          <p className="text-[var(--qf-text-dim)] max-w-[var(--qf-maxw-narrow)] mb-4">
            Most &quot;gamification&quot; is a generic plug-in. This runs on a custom game engine I
            built from scratch — fast, mobile-first, and genuinely yours. It&apos;s a real asset,
            not a widget.
          </p>
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
            Make engagement your lead engine.
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            Start with a paid Automation Map (€{PRICING.discovery}, credited). We&apos;ll find
            where your traffic leaks and whether a game or quiz is the right catch.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow size="xl">
            Book your Automation Map
          </Button>
        </div>
      </Section>
    </>
  );
}

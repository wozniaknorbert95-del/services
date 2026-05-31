import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES, PRICING } from '@/lib/constants';

const FAQS = [
  {
    question: 'Can it take payments?',
    answer: 'Yes — or just bookings / callbacks, whatever suits you.',
  },
  {
    question: 'Will it fit my services?',
    answer: 'The flow is shaped around your offer during setup.',
  },
  {
    question: 'Does it work with my tools?',
    answer: 'It connects to standard inboxes, CRMs and sheets — confirmed in your Map.',
  },
];

export default function SalesFunnelPage() {
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
              Quotes, bookings and qualifying{' '}
              <span className="text-[var(--qf-text-dim)]">— handled.</span>
            </h1>
            <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
              A simple step-by-step flow that guides clients from &quot;interested&quot; to
              &quot;booked&quot;, collects exactly what you need, and ends the endless
              &quot;how much is it?&quot; emails.
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
              <span className="mr-1">✓</span> As simple for your client as it is for you.
            </p>
          </div>

          {/* Visual: funnel flow mock */}
          <div className="hidden lg:flex flex-col items-center gap-2 w-64 shrink-0">
            <div className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4 text-center">
              <span className="text-[10px] text-[var(--qf-text-faint)] font-mono uppercase">interested</span>
            </div>
            <span className="text-[var(--qf-text-faint)] text-xs">↓</span>
            <div className="w-5/6 rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4 text-center">
              <span className="text-[10px] text-[var(--qf-text-faint)] font-mono uppercase">qualify</span>
            </div>
            <span className="text-[var(--qf-text-faint)] text-xs">↓</span>
            <div className="w-3/4 rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-4 text-center">
              <span className="text-[10px] text-[var(--qf-text-faint)] font-mono uppercase">configure</span>
            </div>
            <span className="text-[var(--qf-text-faint)] text-xs">↓</span>
            <div className="w-1/2 rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-4 text-center">
              <span className="text-[10px] text-[var(--qf-accent)] font-mono uppercase font-semibold">booked</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — THE PROBLEM
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          When every quote is a manual job
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            'The same questions, the same answers, all day.',
            'Prospects drop off because the next step isn\'t obvious.',
            'You chase details by email before you can even quote.',
            'No clean record of who asked for what.',
          ].map((pain) => (
            <Card key={pain} className="p-6">
              <p className="text-[var(--qf-text)]">{pain}</p>
            </Card>
          ))}
        </div>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Manual quoting doesn&apos;t just eat hours — it loses the clients who wanted an answer
          now, not next week.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — WHAT WE DO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          What the Sales Funnel Engine does
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'A guided 3–5 step flow',
              body: 'Client picks options, you collect clean data.',
            },
            {
              title: 'Built-in logic',
              body: 'Minimum values, options and rules, like a smart configurator.',
            },
            {
              title: 'Connected',
              body: 'Pushes to your inbox / CRM / sheet automatically.',
            },
            {
              title: 'A clear close',
              body: 'Payment, booking, or "call me back" — whatever fits your business.',
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
              title: 'Fewer back-and-forth emails.',
              body: 'The flow asks the right questions for you.',
            },
            {
              title: 'More completed enquiries.',
              body: 'A clear path means fewer drop-offs.',
            },
            {
              title: 'Clean, structured data.',
              body: 'Every lead captured the same way.',
            },
            {
              title: 'A tidy pipeline.',
              body: 'You always know what\'s in motion.',
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
              From €{PRICING.salesFunnel.from.toLocaleString()}
            </h3>
            <p className="text-[var(--qf-text-dim)] mb-6">
              Flow design, build, integrations, testing, handover.
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
              Flow tuning, new options, conversion improvements.
            </p>
            <Button href={ROUTES.managedAutomation} variant="secondary" withArrow>
              See Managed Automation
            </Button>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — PROOF ASSET
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Card className="p-8 bg-[var(--qf-bg-inset)] border-[var(--qf-border)]">
          <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-3">
            Built on a proven engine
          </h3>
          <p className="text-[var(--qf-text-dim)] max-w-[var(--qf-maxw-narrow)] mb-4">
            This is a lighter version of a full sales wizard I built and run live — complete with
            step logic, guardrails and a single source of truth. You&apos;re getting a battle-tested
            pattern, scaled to your business.
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
            Let the funnel do the asking.
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            Start with a paid Automation Map (€{PRICING.discovery}, credited). We&apos;ll map your
            current quoting process and what a funnel would save you.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow size="xl">
            Book your Automation Map
          </Button>
        </div>
      </Section>
    </>
  );
}

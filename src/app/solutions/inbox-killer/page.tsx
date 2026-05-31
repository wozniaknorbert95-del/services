import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ProcessStepHorizontal from '@/components/ui/ProcessStepHorizontal';
import FaqItem from '@/components/ui/FaqItem';
import { ROUTES, PRICING } from '@/lib/constants';

/* ── data ── */
const HOW_IT_WORKS_STEPS = [
  { number: '1', title: 'Reads', description: 'It watches the inboxes you choose. Nothing else.' },
  { number: '2', title: 'Sorts', description: 'Every message lands in a clear lane: lead, client, invoice, or noise.' },
  { number: '3', title: 'Prioritises', description: 'The messages that earn you money rise to the top.' },
  { number: '4', title: 'Drafts', description: 'Ready-to-send replies appear, written in your voice.' },
  { number: '5', title: 'You approve', description: 'You send with one click. It never sends on its own.', highlight: true },
];

const FAQS = [
  {
    question: 'Does it send emails on its own?',
    answer: 'No. Every reply waits for your one-click approval. Approval-by-default is the core design.',
  },
  {
    question: 'Will it work with my email?',
    answer: 'Yes — it connects to standard inboxes (the ones you already use). We confirm compatibility during your Automation Map.',
  },
  {
    question: 'Will the replies sound like me?',
    answer: "They're tuned to your voice during setup, and you refine them any time. You approve before anything goes out.",
  },
  {
    question: 'How long until it\'s running?',
    answer: 'Most setups go live in days, not weeks — because the system is already built and proven; we adapt it to you.',
  },
  {
    question: 'Why is the Automation Map paid?',
    answer: "Because it's real work that delivers real value: we find your two or three biggest leaks and the ROI before you commit. The fee is credited toward your project.",
  },
];

/* ── page ── */
export default function InboxKillerPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-2xl">
            <Eyebrow>Spearhead · Start here</Eyebrow>
            <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6">
              Inbox Killer{' '}
              <span className="text-[var(--qf-text-dim)]">— get your mornings back.</span>
            </h1>
            <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
              Your inbox sorts itself, surfaces what matters, and drafts your replies — so you
              spend minutes on email, not hours. You approve every send.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button href={ROUTES.bookDiscovery} withArrow size="lg">
                Book your Automation Map
              </Button>
              <Button href="#how-it-works" variant="ghost" withArrow>
                See how it works
              </Button>
            </div>
            <p className="text-sm text-[var(--qf-ok)]">
              <span className="mr-1">✓</span> Nothing is sent without your approval.
            </p>
          </div>

          {/* Visual: cluttered inbox → sorted lanes */}
          <div className="hidden lg:flex flex-col gap-3 w-72 shrink-0">
            <div className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] p-5">
              <div className="text-[var(--qf-text-faint)] text-xs font-mono mb-3">inbox (chaos)</div>
              <div className="space-y-2">
                {['Re: Quote request', 'Invoice #4421', 'Newsletter May', 'Urgent: new lead', 'Fwd: meeting'].map(
                  (label, i) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-xs text-[var(--qf-text-dim)]"
                    >
                      <span className="inline-block h-2 w-2 rounded-full bg-[var(--qf-border)]" />
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="text-center text-[var(--qf-text-faint)] text-xs font-mono">↓ inbox killer ↓</div>
            <div className="rounded-[var(--qf-radius)] border border-[var(--qf-accent)] bg-[var(--qf-bg-raised)] p-5">
              <div className="text-[var(--qf-accent)] text-xs font-mono mb-3">sorted</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'lead', count: 1 },
                  { label: 'client', count: 2 },
                  { label: 'invoice', count: 1 },
                  { label: 'noise', count: 1 },
                ].map((lane) => (
                  <div
                    key={lane.label}
                    className="rounded-sm border border-[var(--qf-border)] px-2 py-1.5 text-[10px] text-[var(--qf-text-dim)] font-mono uppercase flex items-center justify-between"
                  >
                    <span>{lane.label}</span>
                    <span className="text-[var(--qf-accent)]">{lane.count}</span>
                  </div>
                ))}
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
          If your inbox runs your day, this is for you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            'Important enquiries buried under invoices, newsletters and spam.',
            'The same replies, typed again and again.',
            'Leads that quietly go cold because no one got back in time.',
          ].map((pain) => (
            <Card key={pain} className="p-6">
              <p className="text-[var(--qf-text)]">{pain}</p>
            </Card>
          ))}
        </div>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Every hour in your inbox is an hour not spent on clients, delivery or growth — and every
          missed enquiry is revenue that simply walks away.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — HOW IT WORKS
         ═══════════════════════════════════════════════════════════ */}
      <Section id="how-it-works" padding="large">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Five quiet steps.
        </h2>
        <ProcessStepHorizontal steps={HOW_IT_WORKS_STEPS} />
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
              title: 'Hours back, every week.',
              body: 'Triage that took the morning now takes minutes.',
            },
            {
              title: 'No more lost leads.',
              body: 'Every enquiry is caught, sorted and queued for reply.',
            },
            {
              title: 'A calmer business.',
              body: 'Open your inbox to order, not overwhelm.',
            },
            {
              title: 'You, in charge.',
              body: 'Full visibility, full approval — always.',
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
          § E — CONTROL & SAFETY
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Eyebrow>Control & Safety</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          Built so you stay in control
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Inbox Killer is designed around one principle: it assists, you decide. It reads only the
          inboxes you choose, drafts only what you ask, and sends only what you approve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Approval by default',
              body: 'Every outgoing message waits for your one-click sign-off.',
            },
            {
              title: 'Your data, your boundaries',
              body: 'It touches only the folders you nominate.',
            },
            {
              title: 'Always reversible',
              body: 'Change the rules, the lanes or the voice at any time.',
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
          § F — SETUP + KEPT RUNNING
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Set up once. Kept sharp every month.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Setup */}
          <Card className="p-8">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Setup (one-time)
            </span>
            <h3 className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)] mb-4">
              From €{PRICING.inboxKiller.from.toLocaleString()}
            </h3>
            <p className="text-[var(--qf-text-dim)] mb-6">
              We map your inbox, define your lanes, tune the drafts to your voice, and hand you a
              system that works from day one.
            </p>
            <Button href={ROUTES.bookDiscovery} withArrow>
              Book your Automation Map
            </Button>
          </Card>

          {/* Managed Automation */}
          <Card variant="accent" className="p-8">
            <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] block mb-2">
              Managed Automation (monthly)
            </span>
            <h3 className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-text)] mb-4">
              From €{PRICING.care}/mo
            </h3>
            <p className="text-[var(--qf-text-dim)] mb-6">
              Your inbox keeps learning as your business changes. We monitor, fine-tune the lanes, and
              keep everything healthy — like an assistant who never takes a day off.
            </p>
            <Button href={ROUTES.managedAutomation} variant="secondary" withArrow>
              See Managed Automation
            </Button>
          </Card>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § G — UNDER THE HOOD
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <Card className="p-8 bg-[var(--qf-bg-inset)] border-[var(--qf-border)]">
          <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-3">
            For the technically curious
          </h3>
          <p className="text-[var(--qf-text-dim)] max-w-[var(--qf-maxw-narrow)] mb-4">
            Under the surface, Inbox Killer runs on a human-in-the-loop AI engine (the same
            architecture behind my larger systems): it classifies messages, plans a response, and
            shows you the draft before anything happens — Plan → Review → Approve.
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
          § H — FAQ
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
          § I — FINAL CTA BAND
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <div className="max-w-2xl">
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
            Get your inbox — and your mornings — back.
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            Start with a paid Automation Map. In 60–90 minutes we&apos;ll show you exactly how much
            time and how many leads your inbox is costing you — and what it takes to fix it. The
            fee is credited toward your setup.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow size="xl">
            Book your Automation Map
          </Button>
        </div>
      </Section>
    </>
  );
}

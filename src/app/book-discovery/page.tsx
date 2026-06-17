import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { PRICING, EMAIL } from '@/lib/constants';
import BookDiscoveryForm from './BookDiscoveryForm';

/* ── metadata ── */
export const metadata: Metadata = {
  title: `Book your Automation Map — €${PRICING.discovery}, credited`,
  description:
    'Book a paid Automation Map: 60–90 minutes to find your biggest time and money leaks, with ROI and a recommended first step. Fee credited toward your project. Remote.',
  openGraph: {
    title: `Book your Automation Map — €${PRICING.discovery}, credited`,
    description:
      'Book a paid Automation Map: 60–90 minutes to find your biggest time and money leaks, with ROI and a recommended first step.',
    url: 'https://services.flexgrafik.nl/book-discovery',
    images: [
      {
        url: '/og/book-discovery.svg',
        width: 1200,
        height: 630,
        alt: 'Book your Automation Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Book your Automation Map — €${PRICING.discovery}, credited`,
    description: '60–90 minutes to find your biggest leaks. Fee credited toward your project.',
    images: ['/og/book-discovery.svg'],
  },
};

/* ── page ── */
export default function BookDiscoveryPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Start with a paid Automation Map — €{PRICING.discovery}.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-4">
          In 60–90 minutes we find your two or three biggest time-and-money leaks, calculate the
          ROI, and recommend the right first step. The fee is credited toward your project.
        </p>
        <p className="text-[var(--qf-text-dim)] text-sm max-w-[var(--qf-maxw-narrow)] mb-8 border-l-2 border-[var(--qf-accent)] pl-4">
          Already downloaded the Automation Map sample? Mention it when you book — skip the basics,
          go straight to scoping.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — WHAT YOU GET
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          What you get for €{PRICING.discovery}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {[
            'A focused 60–90 minute working session.',
            'A written Automation Map — yours to keep, whatever you decide.',
            'Clear ROI on each recommendation.',
            'A recommended first build, with a fixed quote to follow.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
              <p className="text-[var(--qf-text-dim)]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — HOW IT WORKS
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Three steps to clarity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            {
              step: '1',
              title: 'Pay & pick a slot',
              body: 'Secure your session in under two minutes.',
            },
            {
              step: '2',
              title: 'Tell me about your business',
              body: 'A short form so I arrive prepared.',
            },
            {
              step: '3',
              title: 'We meet',
              body: 'You walk away with a roadmap, not a sales pitch.',
            },
          ].map((item) => (
            <Card key={item.step} className="p-6">
              <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-accent)] font-bold mb-2">
                Step {item.step}
              </div>
              <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--qf-text-dim)]">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § D — RISK REVERSAL
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          No risk, no pressure
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          The €{PRICING.discovery} is credited toward your first project. You keep the written Map
          either way. And if there&apos;s genuinely nothing worth automating, you owe nothing further
          — that&apos;s the honest outcome, and I&apos;ll say so.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § E — FORM
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Book your session
        </h2>
        <BookDiscoveryForm />
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § F — ALT CONTACT
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
          Prefer to ask something first?
        </h2>
        <p className="text-[var(--qf-text-dim)] mb-4">
          Send an email to{' '}
          <a href={`mailto:${EMAIL}`} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)] transition-colors">
            {EMAIL}
          </a>
          . I read and reply to every message.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § G — MICRO-FAQ
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-8">
          Quick questions
        </h2>
        <div className="space-y-6 max-w-3xl">
          {[
            {
              q: 'Why is it paid?',
              a: "Because it's real work that gives you real value — and it means we both take it seriously. It's credited toward your project.",
            },
            {
              q: "What if I'm not ready to build?",
              a: 'Perfectly fine. You keep the Map and decide in your own time.',
            },
            {
              q: 'Is it remote?',
              a: 'Yes — online, wherever you are.',
            },
          ].map((item) => (
            <div key={item.q}>
              <h3 className="text-[var(--qf-text)] font-semibold mb-1">{item.q}</h3>
              <p className="text-[var(--qf-text-dim)] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

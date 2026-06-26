import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import AnalyticsPageView from '@/components/analytics/AnalyticsPageView';
import { PRICING, EMAIL, SITE_URL, ROUTES, ARTEFACTS } from '@/lib/constants';
import BookDiscoveryForm from './BookDiscoveryForm';

/* ── metadata ── */
export const metadata: Metadata = {
  title: `Book Automation Map — €${PRICING.discovery} Credited`,
  description:
    'Request your Automation Map slot: 60–90 minutes to find your biggest time and money leaks, with ROI and a recommended first step. €290 credited toward your project after fit check.',
  openGraph: {
    title: `Book Automation Map — €${PRICING.discovery} Credited`,
    description:
      'Request your Automation Map slot: 60–90 minutes to find your biggest leaks. Payment link follows after fit check.',
    url: `${SITE_URL}/book-discovery`,
    images: [
      {
        url: '/og/book-discovery.svg',
        width: 1200,
        height: 630,
        alt: 'Book Automation Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Book Automation Map — €${PRICING.discovery} Credited`,
    description: 'Request your Automation Map slot. Fee credited toward your project.',
    images: ['/og/book-discovery.svg'],
  },
};

/* ── page ── */
export default function BookDiscoveryPage() {
  return (
    <>
      <AnalyticsPageView event="book_discovery_view" />
      <Section padding="large">
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Request your Automation Map slot — €{PRICING.discovery}, credited.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-4">
          In 60–90 minutes we find your two or three biggest time-and-money leaks, calculate the
          likely ROI, and decide the right first system to build. You keep the written Map either way.
        </p>
        <p className="text-[var(--qf-text-dim)] text-sm max-w-[var(--qf-maxw-narrow)] mb-4 border-l-2 border-[var(--qf-accent)] pl-4">
          The €{PRICING.discovery} fee is credited toward your first project. If there is nothing worth
          automating, you stop there and keep the document.
        </p>
        <p className="text-sm text-[var(--qf-text-faint)] max-w-[var(--qf-maxw-narrow)] mb-8">
          <Link href={ARTEFACTS.automationMapSample} className="text-[var(--qf-accent)] hover:underline">
            Download sample Map
          </Link>
          {' · '}
          <Link href={ROUTES.results} className="text-[var(--qf-accent)] hover:underline">
            See live systems
          </Link>
        </p>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          What you get for €{PRICING.discovery}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {[
            'A focused 60–90 minute working session',
            'A written Automation Map you keep',
            'Clear ROI logic for each recommendation',
            'A recommended first build with fixed quote to follow',
            'A no-build recommendation if automation is not worth it',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-[var(--qf-ok)] mt-0.5 shrink-0">✓</span>
              <p className="text-[var(--qf-text-dim)]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Three steps to clarity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {[
            {
              step: '1',
              title: 'Request your slot',
              body: 'Share your business context and biggest bottleneck.',
            },
            {
              step: '2',
              title: 'Fit check & payment link',
              body: 'If the fit is right, I send a payment link and available times within 24 hours.',
            },
            {
              step: '3',
              title: 'Leave with a Map',
              body: 'You get a written plan, not a sales pitch.',
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

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-2">
          Request your slot
        </h2>
        <p className="text-sm text-[var(--qf-text-dim)] mb-8 max-w-2xl">
          If the fit is right, I&apos;ll send a payment link and available times within 24 hours.
        </p>
        <BookDiscoveryForm />
      </Section>

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

import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';

/* ── metadata ── */
export const metadata: Metadata = {
  title: 'Results — what changes | Quietforge',
  description:
    'Real patterns: inbox chaos to control, old sites to converters, manual quotes to automated pipelines. See what a system actually does.',
  openGraph: {
    title: 'Results — what changes | Quietforge',
    description:
      'Real patterns: inbox chaos to control, old sites to converters, manual quotes to automated pipelines.',
    url: 'https://services.flexgrafik.nl/results',
    images: [
      {
        url: '/og/results.svg',
        width: 1200,
        height: 630,
        alt: 'Results — what changes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Results — what changes | Quietforge',
    description: 'Real patterns from chaos to control.',
    images: ['/og/results.svg'],
  },
};

/* ── data ── */
const CASES = [
  {
    problem: 'Inbox chaos — leads buried under newsletters, invoices and spam.',
    system: 'Inbox Killer',
    result: 'Every enquiry caught, sorted and queued for reply. Hours back, every week.',
    metric: '[X] hours saved per week · [X]% fewer lost leads',
  },
  {
    problem: 'A site that looks like 2012 and converts like it too.',
    system: 'Conversion Web Upgrade',
    result: 'A fast, mobile-first site with lead capture built in — one that earns its keep.',
    metric: '[X]% more enquiries · fewer manual “what do you charge?” emails',
  },
  {
    problem: 'Manual quotes eating half your day, every day.',
    system: 'Sales Funnel Engine',
    result: 'A structured configurator that qualifies, quotes and books — without you typing the same reply again.',
    metric: 'Structured pipeline · fewer “how much is it?” messages',
  },
  {
    problem: 'Traffic but no leads — a landing page that visitors bounce off.',
    system: 'Lead Magnet Game',
    result: 'A branded mini-game that collects leads while they play — an asset worth sharing.',
    metric: '[X]% more contacts · longer time on site',
  },
];

/* ── page ── */
export default function ResultsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          § A — HERO
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          What changes.
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          Every project starts with a pain: chaos, time, a site that doesn&apos;t sell. Here&apos;s what
          happens when the right system replaces it.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § B — USE CASES
         ═══════════════════════════════════════════════════════════ */}
      <Section background="surface" padding="large">
        <div className="space-y-8 max-w-4xl">
          {CASES.map((c, i) => (
            <Card key={c.system} className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--qf-bg-inset)] text-[var(--qf-accent)] text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-[var(--qf-fs-xs)] uppercase tracking-[0.1em] text-[var(--qf-text-dim)] font-semibold">
                  {c.system}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.08em] text-[var(--qf-warn)] mb-1">
                    Problem
                  </div>
                  <p className="text-[var(--qf-text)]">{c.problem}</p>
                </div>
                <div>
                  <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.08em] text-[var(--qf-accent)] mb-1">
                    System
                  </div>
                  <p className="text-[var(--qf-text)] font-semibold">{c.system}</p>
                </div>
                <div>
                  <div className="text-[var(--qf-fs-xs)] uppercase tracking-[0.08em] text-[var(--qf-ok)] mb-1">
                    Result
                  </div>
                  <p className="text-[var(--qf-text)]">{c.result}</p>
                </div>
              </div>
              <div className="rounded-sm bg-[var(--qf-bg-inset)] px-4 py-3 text-sm text-[var(--qf-text-faint)] font-mono">
                {c.metric}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          § C — FINAL CTA
         ═══════════════════════════════════════════════════════════ */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Let&apos;s find what&apos;s worth automating in your business.
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. In 60–90 minutes we&apos;ll pinpoint your biggest leaks and
          show you the ROI — before you commit to anything bigger.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

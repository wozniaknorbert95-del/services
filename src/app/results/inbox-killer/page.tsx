import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES } from '@/lib/constants';
import { GRATKA } from '@/lib/gratka';
import { getCaseStudyBySlug } from '@/lib/case-studies';

const SLUG = 'inbox-killer';

const BEFORE_ITEMS = [
  'Leads buried under newsletters and vendor mail',
  'Invoices missed in the morning scroll',
  'Same replies typed again and again',
  'Follow-ups forgotten — revenue leaks quietly',
];

const AFTER_ITEMS = [
  'Every message classified: lead · client · invoice · noise',
  'Noise archived automatically — you see what earns money',
  'Drafts ready in your voice — minutes, not hours',
  'Nothing sends until you approve — one click',
];

const FLOW_STEPS = [
  { step: '01', title: 'Read', detail: 'Watches the inboxes you choose. 100+ messages per scan on a live mailbox.' },
  { step: '02', title: 'Classify', detail: 'Intent by context — a lead question is not treated like vendor spam.' },
  { step: '03', title: 'Sort', detail: 'Clear lanes: lead, client, invoice. Noise goes to archive.' },
  { step: '04', title: 'Draft', detail: 'Reply prepared from conversation context and your tone.' },
  { step: '05', title: 'You approve', detail: 'Edit, send or delete. The system never acts alone.', highlight: true },
];

export const metadata: Metadata = {
  title: 'Case study — Inbox Killer | Quietforge',
  description:
    'How a live inbox agent classifies mixed email, drafts replies and waits for your approval. Process-proof case study with downloadable flow diagram.',
  openGraph: {
    title: 'Case study — Inbox Killer | Quietforge',
    description:
      'classify → plan → diff → approve. A self-running back-office with human-in-the-loop on every send.',
    url: 'https://services.flexgrafik.nl/results/inbox-killer',
    images: [
      {
        url: '/og/results-inbox-killer.svg',
        width: 1200,
        height: 630,
        alt: 'Case study — Inbox Killer flow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study — Inbox Killer | Quietforge',
    description: 'Process-proof inbox automation with human approval gates.',
    images: ['/og/results-inbox-killer.svg'],
  },
};

export default function InboxKillerCaseStudyPage() {
  const study = getCaseStudyBySlug(SLUG);

  if (!study) {
    return null;
  }

  return (
    <>
      <Section padding="large">
        <Link
          href={ROUTES.results}
          className="mb-6 inline-block text-sm text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)]"
        >
          ← All results
        </Link>
        <Eyebrow>Case study {study.number} · live</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4 max-w-3xl">
          {study.title}
        </h1>
        <p className="mb-2 font-mono text-sm text-[var(--qf-accent)]">{study.meta}</p>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          {study.context} This page is the deeper proof behind card {study.number} on{' '}
          <Link href={ROUTES.results} className="text-[var(--qf-accent)] hover:text-[var(--qf-text)]">
            Results
          </Link>
          — share it internally or forward the downloads below.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={GRATKA.inboxKillerFlowSvg} target="_blank" rel="noopener noreferrer" variant="secondary">
            Flow diagram (SVG) ↓
          </Button>
          <Button href={GRATKA.inboxKillerBeforeAfterPdf} target="_blank" rel="noopener noreferrer" variant="secondary">
            Before/after (PDF) ↓
          </Button>
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Before vs after
        </h2>
        <div className="grid gap-[var(--qf-sp-6)] md:grid-cols-2">
          <Card className="border-[var(--qf-warn)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
              Before — as-is
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-warn)]">✕</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-[var(--qf-ok)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-ok)]">
              After — with Inbox Killer
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-ok)]">✓</span> {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          The flow — visual
        </h2>
        <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          One page you can forward: what happens from mixed inbox to approved send. No auto-send —
          the approval gate is the architecture, not a setting.
        </p>
        <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4">
          <Image
            src={GRATKA.inboxKillerFlowSvg}
            alt="Inbox Killer flow diagram: read, classify, sort into lanes, draft reply, human approval gate, then send"
            width={1200}
            height={720}
            className="h-auto w-full min-w-[640px]"
            priority
          />
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Five steps under the hood
        </h2>
        <div className="grid gap-[var(--qf-sp-4)]">
          {FLOW_STEPS.map((item) => (
            <Card
              key={item.step}
              className={item.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]' : ''}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="shrink-0 font-mono text-lg font-bold text-[var(--qf-accent)]">
                  {item.step}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                    {item.title}
                  </h3>
                  <p className="max-w-none text-sm text-[var(--qf-text-dim)]">{item.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-none text-sm text-[var(--qf-text-dim)]">
          Want the technical write-up?{' '}
          <Link href="/blog/under-the-hood-how-inbox-killer-works/" className="text-[var(--qf-accent)]">
            Read the blog post →
          </Link>
        </p>
      </Section>

      <Section padding="large">
        <Card className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            What&apos;s real
          </p>
          <p className="mb-4 max-w-none text-[var(--qf-text)]">{study.real}</p>
          <p className="max-w-none font-mono text-sm text-[var(--qf-text-faint)]">
            Measurement: {study.measurement}
          </p>
        </Card>
      </Section>

      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Could this work for your inbox?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. In 60–90 minutes we map your exact setup, score the
          ROI, and recommend whether Inbox Killer is the right first system — before you commit
          to anything bigger.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

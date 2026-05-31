import type { Metadata } from 'next';
import { Check, ArrowLeft, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Inbox Killer — AI Lead Qualification | FlexGrafik Digital',
  description:
    'AI reads your inbox, classifies hot leads, drafts replies, and archives noise. €497 setup + €147/mo. Live in 48 hours.',
  openGraph: {
    title: 'Inbox Killer — AI Lead Qualification',
    description: 'Your inbox is 80% noise. We surface the 20% that pays. Live in 48 hours.',
    url: 'https://services.flexgrafik.nl/inbox-killer',
  },
};

const features = [
  'Real-time email classification by intent (lead, support, noise)',
  'Hot lead queue with priority scoring and urgency flags',
  'AI-generated reply drafts in your tone and style',
  'Daily summary email — what needs your attention today',
  'Automatic archiving of newsletters, spam, and cold outreach',
  'Self-improving — the system learns your business over time',
];

const faqs = [
  {
    q: 'What email providers are supported?',
    a: 'Gmail and Microsoft 365 (Outlook) via secure OAuth. No password sharing required.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. We use read-only access where possible. You own your data. Cancel anytime and we export everything.',
  },
  {
    q: 'What if the AI misclassifies an email?',
    a: 'You train it. One-click corrections teach the system your preferences. Accuracy improves weekly.',
  },
];

export default function InboxKillerPage() {
  return (
    <main className="flex flex-col">
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <div className="mb-4 inline-flex rounded-md bg-[var(--color-accent-dim)] px-2.5 py-1 text-xs font-mono font-medium text-[var(--color-accent)]">
            Flagship Product
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Inbox Killer
          </h1>
          <p className="mt-4 text-xl text-[var(--color-text-secondary)]">
            AI lead qualification that replaces your VA — at a fraction of the cost.
          </p>

          <div className="mt-8 flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold text-[var(--color-text-primary)]">€497</span>
            <span className="text-[var(--color-text-muted)]">setup</span>
            <span className="text-[var(--color-text-muted)]">+</span>
            <span className="text-4xl font-bold text-[var(--color-text-primary)]">€147</span>
            <span className="text-[var(--color-text-muted)]">/mo</span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-amber)]">
            First 5 clients: month 1 free. Cancel anytime.
          </p>

          <div className="mt-8">
            <Button
              href="https://calendly.com/flexgrafik/20min"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-surface)] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">What you get</h2>
          <div className="mt-6 space-y-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-green)]" />
                <span className="text-[var(--color-text-secondary)]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-[var(--color-text-primary)]">{faq.q}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-surface)] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Ready to reclaim your inbox?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-text-secondary)]">
            Book a free 20-minute demo. We will show you exactly what your inbox is costing you.
          </p>
          <div className="mt-8">
            <Button
              href="https://calendly.com/flexgrafik/20min"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

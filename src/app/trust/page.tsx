import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { ARTEFACTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Trust & Safety | Quietforge',
  description: 'AI in a real business should reduce risk, not add it. Every system is built to survive a small business owner\'s worst week — and a regulator\'s question.',
};

export default function TrustPage() {
  const safetyItems = [
    { title: 'Human-in-the-loop', detail: 'Nothing sends, publishes or deploys without your approval. The system proposes; you decide.' },
    { title: 'Service accounts', detail: 'Access goes through dedicated accounts with scoped permissions. No passwords over WhatsApp, ever.' },
    { title: 'Start on a test inbox', detail: 'We can run first on a separate test address (e.g. test@yourdomain.nl) before touching anything live.' },
    { title: 'EU data, scoped access', detail: 'Hosting and data stay in the EU. Access is limited to you and me, and revoked cleanly after handover.' },
    { title: 'Logged & auditable', detail: 'Who did what, when. Logs are available on request so any review or audit is straightforward.' },
    { title: 'AVG / DPA', detail: 'Verwerkersovereenkomst and data layer specified before any live processing begins.' },
    { title: 'No lock-in', detail: 'Built on tools you already own. You get the README and can hand it to any developer — this is never a trap.' },
  ];

  return (
    <>
      <Section padding="large">
        <Eyebrow>Safe enough to hand your inbox to</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          Trust &amp; Safety
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          AI in a real business should reduce risk, not add it. Every system is built to survive a small business owner&apos;s worst week — and a regulator&apos;s question.
        </p>
        <p className="font-mono text-sm text-[var(--qf-info)] mb-12">
          For ZZP &amp; small businesses in NL — services, e-commerce, advisory, regulated.
        </p>
      </Section>

      <Section background="surface" padding="large">
        <div className="grid gap-[var(--qf-sp-6)] sm:grid-cols-2 lg:grid-cols-3">
          {safetyItems.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--qf-text-dim)]">{item.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="large">
        <div className="max-w-2xl border-l-2 border-[var(--qf-border)] pl-4">
          <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-4">
            Get the playbook
          </h2>
          <p className="text-[var(--qf-text-dim)] mb-4">
            Want the detail on how data is handled? Read the one-page summary — yours to forward to anyone, no strings attached.
          </p>
          <Link
            href={ARTEFACTS.dataSafetyPlaybook}
            download
            className="inline-flex font-mono text-sm text-[var(--qf-accent)] hover:text-[var(--qf-text)] transition-colors"
          >
            Download &ldquo;How we keep your data safe&rdquo; (PDF) ↓
          </Link>
        </div>
      </Section>
    </>
  );
}

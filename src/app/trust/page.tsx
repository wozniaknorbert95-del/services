import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import ProofScreenImage from '@/components/ui/ProofScreenImage';
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { screens } from '@/content/proof';

export const metadata: Metadata = {
  title: 'Trust & Safety',
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

  const adminScreen = screens.adminDashboard;

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

      {adminScreen.ready && adminScreen.src && (
        <Section padding="large">
          <Eyebrow>Observability</Eyebrow>
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
            See what the system is doing
          </h2>
          <p className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
            Task approvals and system health stay visible — part of the agent-os-ui governance layer in the owner ecosystem.
          </p>
          <Card className="max-w-3xl overflow-hidden p-0">
            <div className="aspect-[16/10] w-full overflow-hidden border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
              <ProofScreenImage
                src={adminScreen.src}
                alt={adminScreen.alt}
                width={960}
                height={600}
              />
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-[var(--qf-accent)]">{adminScreen.alt}</p>
              <p className="mt-2 text-sm text-[var(--qf-text-dim)]">{adminScreen.caption}</p>
              <Link
                href={ROUTES.managedAutomation}
                className="mt-4 inline-block text-sm text-[var(--qf-accent)] hover:text-[var(--qf-text)]"
              >
                Managed Automation →
              </Link>
            </div>
          </Card>
        </Section>
      )}

      <Section background="surface" padding="large">
        <Eyebrow>Before go-live</Eyebrow>
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-6">
          AVG / DPA checklist
        </h2>
        <ol className="max-w-2xl space-y-3 list-decimal list-inside text-[var(--qf-text-dim)]">
          {[
            'Scope what data the system reads, stores and sends.',
            'Sign verwerkersovereenkomst before live processing.',
            'Use service accounts and scoped permissions — no password sharing.',
            'Run on EU hosting; document retention and deletion.',
            'Keep human approval on every consequential outbound action.',
            'Hand over logs and README so you stay in control after delivery.',
          ].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
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

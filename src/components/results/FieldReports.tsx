import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';

const REPORTS = [
  {
    date: 'Production week',
    text: 'Last Tuesday the wizard scored 14 leads in 6 hours; I closed 3 without a single email exchange.',
  },
  {
    date: 'Inbox run',
    text: '142 messages scanned, 18 drafts queued — every send waited on my approval before it left.',
  },
  {
    date: 'VCMS scan',
    text: 'Eight repos checked in one pass; conflicts flagged before anything touched production.',
  },
] as const;

export default function FieldReports() {
  return (
    <Section padding="large">
      <Eyebrow>Field reports</Eyebrow>
      <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
        Notes from a running system — not client testimonials.
      </h2>
      <p className="text-[var(--qf-text-dim)] text-sm max-w-2xl mb-8">
        Self-reports from production. Verifiable patterns from my own ecosystem — the same stack I
        deploy for clients.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {REPORTS.map((report) => (
          <Card key={report.date} className="p-6">
            <span className="font-mono text-xs uppercase text-[var(--qf-accent)]">{report.date}</span>
            <p className="mt-3 text-sm text-[var(--qf-text-dim)]">{report.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

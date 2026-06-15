import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';
import VideoSlot from '@/components/ui/VideoSlot';

export const metadata: Metadata = {
  title: "The Founder's System",
  description: 'Built for real use, not pitch decks. Why I built my own system to run my business, and why I install the exact same architecture for other small businesses.',
};

export default function FounderPage() {
  const points = [
    {
      title: 'Built for real use, not pitch decks',
      body: "I didn't invent this to sell to you. I built it because I needed it to run my own agency. It handles real invoices, real clients, and real leads every day.",
    },
    {
      title: 'Single source of truth',
      body: 'Off-the-shelf tools scatter your data across a dozen tabs. This architecture forces everything into one clean, manageable pipeline.',
    },
    {
      title: 'Scalable without head-count',
      body: 'The goal of automation isn\'t to replace people; it\'s to decouple your revenue growth from your payroll size.',
    },
  ];

  return (
    <>
      <Section padding="large">
        <Eyebrow>Behind the scenes</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          The Founder&apos;s System
        </h1>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-2xl mb-12">
          I didn&apos;t start an agency to build websites. I built a system to run my own business — the CRM, the pipeline, the AI routing — because off-the-shelf tools were too scattered. Now, I install that exact same architecture for other small businesses.
        </p>

        <div className="mb-16 max-w-4xl">
          <VideoSlot videoKey="founder" />
        </div>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Why this architecture works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((point) => (
            <Card key={point.title} className="p-6">
              <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
                {point.title}
              </h3>
              <p className="text-sm text-[var(--qf-text-dim)]">{point.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section padding="large">
        <div className="max-w-2xl">
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
            Stop working for your tools.
          </h2>
          <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] mb-8">
            Let your tools work for you. Start with an Automation Map and we&apos;ll see if this architecture fits your business.
          </p>
          <Button href={ROUTES.bookDiscovery} withArrow size="xl">
            Book your Automation Map
          </Button>
        </div>
      </Section>
    </>
  );
}

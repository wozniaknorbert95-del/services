import { pricing } from '@/content/proof';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';

export default function PricingSection() {
  const tiers = [
    {
      name: 'Automation Map',
      price: pricing.discovery.price,
      timeline: '60–90 min session',
      includes: ['ROI scoring', 'System roadmap', 'Build recommendation'],
      note: pricing.discovery.note,
    },
    {
      name: 'Single System Build',
      price: pricing.singleSystem.from !== null ? `from ${pricing.singleSystem.from}` : '[FILL]',
      timeline: pricing.singleSystem.timeline !== null ? pricing.singleSystem.timeline : '[FILL]',
      includes: pricing.singleSystem.includes !== null ? [pricing.singleSystem.includes, 'Setup & integration', 'Handover'] : ['[FILL]', '[FILL]'],
    },
    {
      name: 'Ecosystem Build',
      price: pricing.ecosystem.from !== null ? `from ${pricing.ecosystem.from}` : '[FILL]',
      timeline: pricing.ecosystem.timeline !== null ? pricing.ecosystem.timeline : '[FILL]',
      includes: pricing.ecosystem.includes !== null ? [pricing.ecosystem.includes, 'Agent OS setup', 'AVG/HITL layer'] : ['[FILL]', '[FILL]'],
    },
    {
      name: 'Maintenance',
      price: pricing.maintenance.from !== null ? `from ${pricing.maintenance.from}/mo` : '[FILL]',
      timeline: 'Monthly',
      includes: ['Active tuning', 'Health monitoring', 'Priority support'],
      note: pricing.maintenance.note,
    },
  ];

  return (
    <Section background="surface" padding="large">
      <div className="mb-[var(--qf-sp-12)] text-center">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-[var(--qf-sp-4)]">
          Start with a paid Automation Map.
        </h2>
        <p className="mx-auto max-w-2xl text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)]">
          Then choose a build that fits the size of the problem — not the size of a retainer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col p-6 h-full">
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
              {tier.name}
            </h3>
            <div className="text-[var(--qf-fs-2xl)] font-bold text-[var(--qf-accent)] mb-1">
              {tier.price}
            </div>
            <p className="font-mono text-xs text-[var(--qf-text-dim)] mb-6 min-h-[1.5rem]">
              {tier.timeline}
            </p>
            
            <ul className="flex-1 space-y-3 mb-8 m-0 p-0 list-none">
              {tier.includes.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-ok)] mr-2 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {tier.note && (
              <p className="font-mono text-xs text-[var(--qf-text-faint)] mb-4 italic">
                {tier.note}
              </p>
            )}

            <Button href={ROUTES.bookDiscovery} className="w-full justify-center">
              Book Automation Map
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

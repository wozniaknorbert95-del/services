import { pricing } from '@/content/proof';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';

type TierCta = {
  label: string;
  variant: 'primary' | 'secondary';
};

interface PricingTier {
  name: string;
  price: string;
  timeline: string;
  includes: string[];
  note?: string;
  featured?: boolean;
  cta: TierCta;
}

export default function PricingSection() {
  const tiers: PricingTier[] = [
    {
      name: 'Automation Map',
      price: pricing.discovery.price,
      timeline: '60–90 min session',
      includes: ['ROI scoring', 'System roadmap', 'Build recommendation'],
      note: pricing.discovery.note,
      cta: { label: CTAS.bookAutomationMap, variant: 'primary' },
    },
    {
      name: 'Single System Build',
      price: pricing.singleSystem.from !== null ? `from ${pricing.singleSystem.from}` : 'Quoted after Map',
      timeline: pricing.singleSystem.timeline !== null ? pricing.singleSystem.timeline : 'Varies by scope',
      includes:
        pricing.singleSystem.includes !== null
          ? [pricing.singleSystem.includes, 'Setup & integration', 'Handover']
          : ['Custom implementation', 'Setup & integration', 'Handover'],
      featured: true,
      cta: { label: 'Scoped in your Map', variant: 'secondary' },
    },
    {
      name: 'Ecosystem Build',
      price: pricing.ecosystem.from !== null ? `from ${pricing.ecosystem.from}` : 'Quoted after Map',
      timeline: pricing.ecosystem.timeline !== null ? pricing.ecosystem.timeline : 'Varies by scope',
      includes:
        pricing.ecosystem.includes !== null
          ? [pricing.ecosystem.includes, 'Agent OS setup', 'AVG/HITL layer']
          : ['Multi-module setup', 'Agent OS setup', 'AVG/HITL layer'],
      cta: { label: 'Scoped in your Map', variant: 'secondary' },
    },
    {
      name: 'Managed Automation',
      price: pricing.managedAutomation.from,
      timeline: 'Monthly',
      includes: ['Active tuning', 'Health monitoring', 'Priority support'],
      note: pricing.managedAutomation.note,
      cta: { label: 'Add after build', variant: 'secondary' },
    },
  ];

  return (
    <Section background="surface" padding="large" data-home-section="pricing">
      <div className="mb-[var(--qf-sp-12)] text-center">
        <h2 className="mb-[var(--qf-sp-4)] text-[var(--qf-fs-2xl)] font-bold tracking-tight">
          Start with a paid Automation Map.
        </h2>
        <p className="mx-auto max-w-2xl text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
          Then choose a build that fits the size of the problem — not the size of a retainer.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex h-full flex-col p-6 ${
              tier.featured
                ? 'border-[var(--qf-accent)] shadow-[0_0_0_1px_var(--qf-accent-glow)]'
                : ''
            }`}
          >
            {tier.featured ? (
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                Most popular entry
              </p>
            ) : null}
            <h3 className="mb-2 text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">{tier.name}</h3>
            <div className="mb-1 text-[var(--qf-fs-2xl)] font-bold text-[var(--qf-accent)]">{tier.price}</div>
            <p className="mb-6 min-h-[1.5rem] font-mono text-xs text-[var(--qf-text-dim)]">{tier.timeline}</p>

            <ul className="m-0 mb-8 flex-1 list-none space-y-3 p-0">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start text-sm text-[var(--qf-text-dim)]">
                  <span className="mr-2 shrink-0 text-[var(--qf-ok)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {tier.note ? (
              <p className="mb-4 font-mono text-xs italic text-[var(--qf-text-faint)]">{tier.note}</p>
            ) : null}

            <Button
              href={ROUTES.bookDiscovery}
              variant={tier.cta.variant}
              className="w-full justify-center"
            >
              {tier.cta.label}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

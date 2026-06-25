import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import {
  whatsappPilotCaseMeta,
  whatsappPilotCta,
  whatsappPilotHero,
  whatsappPilotVideoPlaceholder,
} from '@/content/whatsapp-discovery-pilot-case-study';

export const metadata: Metadata = {
  title: whatsappPilotCaseMeta.title,
  description: whatsappPilotCaseMeta.description,
  robots: { index: false, follow: false },
  openGraph: {
    title: whatsappPilotCaseMeta.openGraphTitle,
    description: whatsappPilotCaseMeta.openGraphDescription,
    images: [{ url: '/og/results.svg', width: 1200, height: 630, alt: whatsappPilotCaseMeta.ogAlt }],
  },
};

export default function WhatsappDiscoveryPilotPage() {
  return (
    <>
      <Section padding="large">
        <Eyebrow>{whatsappPilotHero.eyebrow}</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight mb-6 max-w-3xl">
          {whatsappPilotHero.headline}
        </h1>
        <p className="text-[var(--qf-text-dim)] text-lg max-w-2xl mb-8">{whatsappPilotHero.lead}</p>
      </Section>

      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold mb-4">{whatsappPilotVideoPlaceholder.title}</h2>
        <div className="aspect-video max-w-3xl overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <p className="font-mono text-sm text-[var(--qf-text-dim)]">{whatsappPilotVideoPlaceholder.body}</p>
            <p className="mt-2 text-xs text-[var(--qf-text-faint)]">{whatsappPilotVideoPlaceholder.statusNote}</p>
          </div>
        </div>
      </Section>

      <Section padding="large">
        <div className="flex flex-wrap gap-4">
          <Button href={whatsappPilotCta.href} withArrow size="lg" target="_blank" rel="noopener noreferrer">
            {whatsappPilotCta.label}
          </Button>
          <Link href={whatsappPilotCta.backHref} className="text-sm text-[var(--qf-accent)] hover:underline">
            {whatsappPilotCta.backLabel}
          </Link>
        </div>
      </Section>
    </>
  );
}

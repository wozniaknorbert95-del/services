import { ReactNode } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { ROUTES } from '@/lib/constants';
import { screens, videos, pricing } from '@/content/proof';
import VideoSlot from '@/components/ui/VideoSlot';
import ProofScreenImage from '@/components/ui/ProofScreenImage';

interface SolutionLayoutProps {
  title: string;
  problem: string;
  systemItems: { title: string; body: string }[];
  effectItems?: { title: string; body: string }[];
  effectBeforeAfter?: { before: string[]; after: string[] };
  screenKey: keyof typeof screens;
  videoKey?: keyof typeof videos;
  caseStudyHref: string;
  priceKey: keyof typeof pricing;
}

export default function SolutionLayout({
  title,
  problem,
  systemItems,
  effectItems,
  effectBeforeAfter,
  screenKey,
  videoKey,
  caseStudyHref,
  priceKey,
}: SolutionLayoutProps) {
  const screen = screens[screenKey];
  const priceData = pricing[priceKey] as any;

  return (
    <>
      <Section padding="large">
        <Eyebrow>Solution</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-6 max-w-3xl">
          {title}
        </h1>
        
        {/* 1. Problem */}
        <div className="mb-12 rounded-[var(--qf-radius)] border-l-4 border-[var(--qf-warn)] bg-[var(--qf-bg-inset)] p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)] mb-2">The Problem</p>
          <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text)] font-semibold">{problem}</p>
        </div>

        {/* 2. System */}
        <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-6">
          The System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {systemItems.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--qf-text-dim)]">{item.body}</p>
            </Card>
          ))}
        </div>

        {/* 3. Effect */}
        <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-6">
          The Effect
        </h2>
        {effectBeforeAfter ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="border-[var(--qf-warn)] p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">Before</p>
              <ul className="space-y-3">
                {effectBeforeAfter.before.map((item) => (
                  <li key={item} className="text-sm text-[var(--qf-text-dim)] flex gap-2">
                    <span className="text-[var(--qf-warn)]">✕</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-[var(--qf-ok)] p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-ok)]">After</p>
              <ul className="space-y-3">
                {effectBeforeAfter.after.map((item) => (
                  <li key={item} className="text-sm text-[var(--qf-text-dim)] flex gap-2">
                    <span className="text-[var(--qf-ok)]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {effectItems?.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--qf-text-dim)]">{item.body}</p>
              </Card>
            ))}
          </div>
        )}

        {/* 4. Proof */}
        <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-6">
          Proof
        </h2>
        <div className="grid gap-[var(--qf-sp-8)] md:grid-cols-2 mb-8">
          <div className="flex flex-col gap-4">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)]">
              {screen && screen.ready && screen.src ? (
                <ProofScreenImage
                  src={screen.src}
                  alt={screen.alt}
                  width={800}
                  height={500}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-4 text-center">
                  <span className="font-mono text-sm text-[var(--qf-text-faint)]">
                    [FILL: Screen — {screen?.alt || screenKey}]
                  </span>
                </div>
              )}
            </div>
            <div>
              <p className="font-mono text-xs text-[var(--qf-accent)]">{screen?.alt}</p>
              <p className="mt-1 text-sm text-[var(--qf-text-dim)]">{screen?.caption}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {videoKey ? (
              <VideoSlot videoKey={videoKey} />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-surface)]">
                <span className="font-mono text-sm text-[var(--qf-text-faint)]">
                  [No video selected]
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mb-16">
          <Button href={caseStudyHref} variant="secondary" withArrow>
            Read the full case study
          </Button>
        </div>

        {/* 5 & 6. Price from & CTA */}
        <Card className="p-8 bg-[var(--qf-bg-raised)] border-[var(--qf-border)] text-center">
          <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-2">
            Ready to implement?
          </h2>
          <div className="text-[var(--qf-fs-xl)] font-bold text-[var(--qf-accent)] mb-6">
            {priceData?.from !== undefined && priceData?.from !== null 
              ? `from ${priceData.from}` 
              : '[FILL: pricing]'}
          </div>
          <p className="text-[var(--qf-text-dim)] max-w-xl mx-auto mb-8">
            Start with a paid Automation Map. In 60–90 minutes we map your setup, score the ROI, 
            and confirm if this system is the right first build.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href={ROUTES.bookDiscovery} size="xl" withArrow>
              Book your Automation Map
            </Button>
            <p className="text-sm text-[var(--qf-text-faint)]">
              See full <a href={ROUTES.pricing} className="underline hover:text-[var(--qf-text)]">Pricing</a>
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
}

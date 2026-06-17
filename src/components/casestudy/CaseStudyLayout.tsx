'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import GratkaDiagram from '@/components/ui/GratkaDiagram';
import VideoSlot from '@/components/ui/VideoSlot';
import ProofScreenImage from '@/components/ui/ProofScreenImage';
import { ROUTES } from '@/lib/constants';
import { caseMeasurements, screens, videos } from '@/content/proof';

interface CaseStudyLayoutProps {
  study: any;
  problemBefore: string[];
  problemAfter: string[];
  architectureDiagramSvgUrl: string;
  architectureDiagramAlt: string;
  architectureDescription: ReactNode;
  buildModules: { title: string; detail: string; highlight?: boolean; number?: string; step?: string }[];
  buildDescription: ReactNode;
  stack: string[];
  manifestKey: keyof typeof caseMeasurements;
  videoKey?: keyof typeof videos;
  screenKey: keyof typeof screens;
  downloadButtons?: ReactNode;
  children?: ReactNode;
}

export default function CaseStudyLayout({
  study,
  problemBefore,
  problemAfter,
  architectureDiagramSvgUrl,
  architectureDiagramAlt,
  architectureDescription,
  buildModules,
  buildDescription,
  stack,
  manifestKey,
  videoKey,
  screenKey,
  downloadButtons,
  children,
}: CaseStudyLayoutProps) {
  const measurement = caseMeasurements[manifestKey];
  const screen = screens[screenKey];

  return (
    <>
      {/* 1. Context / Problem */}
      <Section padding="large">
        <Link
          href={ROUTES.results}
          className="mb-6 inline-block text-sm text-[var(--qf-text-dim)] hover:text-[var(--qf-accent)]"
        >
          ← All results
        </Link>
        <Eyebrow>Case study {study.number} · {study.meta}</Eyebrow>
        <h1 className="text-[var(--qf-fs-3xl)] font-bold tracking-tight leading-[var(--qf-lh-tight)] mb-4 max-w-3xl">
          {study.title}
        </h1>
        <p className="mb-2 font-mono text-sm text-[var(--qf-accent)]">{study.meta}</p>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]">
          {study.context}
        </p>

        {downloadButtons && (
          <div className="mt-8 flex flex-wrap gap-4">
            {downloadButtons}
          </div>
        )}

        <div className="mt-12 grid gap-[var(--qf-sp-6)] md:grid-cols-2">
          <Card className="border-[var(--qf-warn)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-warn)]">
              Before — Problem
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {problemBefore.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-warn)]">✕</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-[var(--qf-ok)] p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--qf-ok)]">
              After — Resolution
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {problemAfter.map((item) => (
                <li key={item} className="text-sm text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-ok)]">✓</span> {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* 2. Architecture */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Architecture
        </h2>
        <div className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          {architectureDescription}
        </div>
        <div className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4">
          <GratkaDiagram
            src={architectureDiagramSvgUrl}
            alt={architectureDiagramAlt}
            width={1200}
            height={800}
            priority
            className="h-auto w-full min-w-[700px]"
          />
        </div>
      </Section>

      {/* 3. Build */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          The Build
        </h2>
        <div className="mb-8 max-w-[var(--qf-maxw-narrow)] text-[var(--qf-text-dim)]">
          {buildDescription}
        </div>
        <div className="grid gap-[var(--qf-sp-4)]">
          {buildModules.map((item, idx) => (
            <Card
              key={idx}
              className={item.highlight ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]' : ''}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="shrink-0 font-mono text-lg font-bold text-[var(--qf-accent)]">
                  {item.step || item.number || String(idx + 1).padStart(2, '0')}
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
        
        {/* Additional custom sections from children */}
        {children && <div className="mt-8">{children}</div>}
      </Section>

      {/* 5. Stack */}
      <Section background="surface" padding="large">
        <h2 className="text-[var(--qf-fs-xl)] font-bold tracking-tight mb-6">
          Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--qf-border)] bg-[var(--qf-bg)] px-4 py-1.5 font-mono text-sm text-[var(--qf-text-dim)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* 6. Proof (Screen + Video) */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-8">
          Proof
        </h2>
        <div className="grid gap-[var(--qf-sp-8)] md:grid-cols-2">
          {/* Screen slot */}
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
          
          {/* Video slot */}
          <div className="flex flex-col gap-4">
            {videoKey ? (
              <VideoSlot videoKey={videoKey} />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-surface)]">
                <span className="font-mono text-sm text-[var(--qf-text-faint)]">
                  [FILL: video slot — no key assigned]
                </span>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* 4 & 7. Result & Measurement line */}
      <Section background="surface" padding="large">
        <Card className="p-6 md:p-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
            Measurement
          </p>
          <div className="max-w-none text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">
            {measurement && measurement.ready && measurement.value !== null ? (
              measurement.value
            ) : (
              <span className="text-[var(--qf-text-faint)]">[FILL: result metric or capability]</span>
            )}
          </div>
        </Card>
      </Section>

      {/* Final CTA for every case study */}
      <Section padding="large">
        <h2 className="text-[var(--qf-fs-2xl)] font-bold tracking-tight mb-4">
          Could this work for your business?
        </h2>
        <p className="text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)] mb-8">
          Start with a paid Automation Map. In 60–90 minutes we map your exact setup, score the
          ROI, and recommend whether this is the right first system — before you commit
          to anything bigger.
        </p>
        <Button href={ROUTES.bookDiscovery} withArrow size="lg">
          Book your Automation Map
        </Button>
      </Section>
    </>
  );
}

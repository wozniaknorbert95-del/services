import type { ReactNode } from 'react';
import type { ScreenKey } from '@/content/ecosystem';
import type { ScreenShot, videos } from '@/content/proof';
import ProofScreenSlot from '@/components/ui/ProofScreenSlot';
import VideoSlot from '@/components/ui/VideoSlot';

interface ProofMediaGridProps {
  screen: ScreenShot | undefined;
  screenKey: ScreenKey | string;
  videoKey?: keyof typeof videos;
  /** Replaces video column when provided (e.g. interactive workflow). */
  workflowSlot?: ReactNode;
  /** Replaces default ProofScreenSlot when provided (e.g. gallery). */
  screenSlot?: ReactNode;
  emptyCtaHref?: string;
  emptyCtaLabel?: string;
  screenPriority?: boolean;
}

export default function ProofMediaGrid({
  screen,
  screenKey,
  videoKey,
  workflowSlot,
  screenSlot,
  emptyCtaHref,
  emptyCtaLabel = 'View case study',
  screenPriority = false,
}: ProofMediaGridProps) {
  const showRight = Boolean(workflowSlot) || Boolean(videoKey && !workflowSlot);

  return (
    <div className={`grid gap-[var(--qf-sp-8)] ${showRight ? 'md:grid-cols-2' : ''}`}>
      <div className="flex flex-col gap-[var(--qf-sp-3)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">
          {'// Screenshot'}
        </p>
        {screenSlot ? (
          screenSlot
        ) : (
          <ProofScreenSlot
            screen={screen}
            screenKey={screenKey}
            emptyCtaHref={emptyCtaHref}
            priority={screenPriority}
          />
        )}
      </div>
      {workflowSlot ? (
        <div className="flex flex-col gap-[var(--qf-sp-3)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">
            {'// Workflow'}
          </p>
          {workflowSlot}
        </div>
      ) : videoKey ? (
        <div className="flex flex-col gap-[var(--qf-sp-3)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">
            {'// Demo'}
          </p>
          <VideoSlot
            videoKey={videoKey}
            emptyCtaHref={emptyCtaHref}
            emptyCtaLabel={emptyCtaLabel}
          />
        </div>
      ) : null}
    </div>
  );
}

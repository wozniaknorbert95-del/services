import type { ScreenKey } from '@/content/ecosystem';
import type { ScreenShot, videos } from '@/content/proof';
import ProofScreenSlot from '@/components/ui/ProofScreenSlot';
import VideoSlot from '@/components/ui/VideoSlot';

interface ProofMediaGridProps {
  screen: ScreenShot | undefined;
  screenKey: ScreenKey | string;
  videoKey?: keyof typeof videos;
  emptyCtaHref?: string;
  emptyCtaLabel?: string;
  screenPriority?: boolean;
}

export default function ProofMediaGrid({
  screen,
  screenKey,
  videoKey,
  emptyCtaHref,
  emptyCtaLabel = 'View case study',
  screenPriority = false,
}: ProofMediaGridProps) {
  return (
    <div className={`grid gap-[var(--qf-sp-8)] ${videoKey ? 'md:grid-cols-2' : ''}`}>
      <div className="flex flex-col gap-[var(--qf-sp-3)]">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">
          // Screenshot
        </p>
        <ProofScreenSlot
          screen={screen}
          screenKey={screenKey}
          emptyCtaHref={emptyCtaHref}
          priority={screenPriority}
        />
      </div>
      {videoKey ? (
        <div className="flex flex-col gap-[var(--qf-sp-3)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--qf-text-faint)]">
            // Demo
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

import { videos } from '@/content/proof';
import ProofEmptyState from '@/components/ui/ProofEmptyState';

interface VideoSlotProps {
  videoKey: keyof typeof videos;
  /** When true, renders nothing if video is not ready (no placeholder). */
  hideWhenEmpty?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyCtaLabel?: string;
  emptyCtaHref?: string;
}

const DEFAULT_EMPTY: Record<
  keyof typeof videos,
  { title: string; description: string }
> = {
  ecosystem: {
    title: 'Ecosystem walkthrough',
    description: 'A full-stack tour is in production. Explore the architecture map and live case studies meanwhile.',
  },
  inboxKiller: {
    title: 'Inbox Killer walkthrough',
    description: 'Screen recording is in production. The classification lanes screenshot and flow diagram show how it works today.',
  },
  wizard: {
    title: 'Wizard demo',
    description: 'Live demo at zzpackage.flexgrafik.nl — configure, price, and pay without a phone call.',
  },
  leadMagnet: {
    title: 'Lead magnet game',
    description: 'Play the live game on app.flexgrafik.nl or read the case study for capture flow proof.',
  },
  agentOs: {
    title: 'Agent orchestrator',
    description: 'Architecture diagram and agent cards in the case study document the live VPS engine.',
  },
  vcms: {
    title: 'VCMS governance',
    description: 'Governance dashboard and conflict scan proof are on the owner ecosystem case study.',
  },
  founder: {
    title: 'Founder walkthrough',
    description: 'Video is in production. Read how FLEXGRAFIK runs this stack in production on the About and Results pages.',
  },
};

export default function VideoSlot({
  videoKey,
  hideWhenEmpty = false,
  emptyTitle,
  emptyDescription,
  emptyCtaLabel,
  emptyCtaHref,
}: VideoSlotProps) {
  const video = videos[videoKey];

  if (!video) {
    return (
      <ProofEmptyState
        eyebrow="// Media"
        title="Media unavailable"
        description={`Unknown video key: ${videoKey}`}
        aspect="video"
      />
    );
  }

  if (!video.ready || !video.url) {
    if (hideWhenEmpty) {
      return null;
    }
    const defaults = DEFAULT_EMPTY[videoKey];
    return (
      <ProofEmptyState
        eyebrow="// Video"
        title={emptyTitle ?? defaults.title}
        description={emptyDescription ?? defaults.description}
        ctaLabel={emptyCtaLabel}
        ctaHref={emptyCtaHref}
        aspect="video"
      />
    );
  }

  const isLocalAsset = video.url.startsWith('/');

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[#000]">
      {isLocalAsset ? (
        <video
          src={video.url}
          title={`${videoKey} video`}
          controls
          playsInline
          preload="metadata"
          poster={video.poster ?? undefined}
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : (
        <iframe
          src={video.url}
          title={`${videoKey} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      )}
    </div>
  );
}

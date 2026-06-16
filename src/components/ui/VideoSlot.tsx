import { videos } from '@/content/proof';

interface VideoSlotProps {
  videoKey: keyof typeof videos;
}

export default function VideoSlot({ videoKey }: VideoSlotProps) {
  const video = videos[videoKey];

  if (!video) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-surface)]">
        <span className="font-mono text-sm text-[var(--qf-text-faint)]">
          [ERROR: Invalid video key: {videoKey}]
        </span>
      </div>
    );
  }

  if (!video.ready || !video.url) {
    return null;
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

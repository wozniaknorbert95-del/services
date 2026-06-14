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
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-surface)]">
        <span className="font-mono text-sm text-[var(--qf-text-faint)]">
          [FILL: {videoKey} video — {video.duration}]
        </span>
        {video.poster && (
          <span className="mt-2 font-mono text-xs text-[var(--qf-text-faint)]">
            Poster: {video.poster}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[#000]">
      <iframe
        src={video.url}
        title={`${videoKey} video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

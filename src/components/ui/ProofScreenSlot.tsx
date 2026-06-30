import type { ScreenKey } from '@/content/ecosystem';
import type { ScreenShot } from '@/content/proof';
import ProofScreenImage from '@/components/ui/ProofScreenImage';
import ProofEmptyState from '@/components/ui/ProofEmptyState';

interface ProofScreenSlotProps {
  screen: ScreenShot | undefined;
  screenKey: ScreenKey | string;
  emptyCtaHref?: string;
  priority?: boolean;
}

export default function ProofScreenSlot({
  screen,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  screenKey,
  emptyCtaHref,
  priority = false,
}: ProofScreenSlotProps) {
  const ready = screen?.ready && screen.src;

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)]">
        {ready ? (
          <ProofScreenImage
            src={screen.src!}
            alt={screen.alt}
            width={800}
            height={500}
            priority={priority}
          />
        ) : (
          <ProofEmptyState
            eyebrow="// Proof"
            title="Screenshot coming soon"
            description="The live system screenshot is being refreshed. See the case study for diagrams and process proof."
            ctaLabel={emptyCtaHref ? 'View case study' : undefined}
            ctaHref={emptyCtaHref}
            aspect="screen"
          />
        )}
      </div>
      {ready ? (
        <div>
          <p className="font-mono text-xs text-[var(--qf-accent)]">{screen.alt}</p>
          <p className="mt-1 text-sm text-[var(--qf-text-dim)]">{screen.caption}</p>
        </div>
      ) : null}
    </div>
  );
}

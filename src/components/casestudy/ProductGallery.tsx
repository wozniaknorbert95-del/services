import Card from '@/components/ui/Card';
import ProofScreenImage from '@/components/ui/ProofScreenImage';
import type { ProductGalleryShot } from '@/content/proof';

interface ProductGalleryProps {
  shots: readonly ProductGalleryShot[];
}

/**
 * Numbered product screenshot gallery for portfolio case studies.
 * Used in: LeadMagnetCaseStudyLayout
 */
export default function ProductGallery({ shots }: ProductGalleryProps) {
  const readyShots = shots.filter((s) => s.ready && s.src);

  return (
    <div className="grid grid-cols-1 gap-[var(--qf-sp-6)] md:grid-cols-2">
      {readyShots.map((shot) => (
        <Card key={shot.order} className="overflow-hidden p-0">
          <div className="border-b border-[var(--qf-border)] px-4 py-3">
            <p className="font-mono text-xs text-[var(--qf-accent)]">{shot.order}</p>
            <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-text)]">{shot.label}</h3>
          </div>
          <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--qf-bg-inset)]">
            <ProofScreenImage src={shot.src} alt={shot.alt} width={960} height={600} />
          </div>
          <p className="p-4 text-sm text-[var(--qf-text-dim)]">{shot.caption}</p>
        </Card>
      ))}
    </div>
  );
}

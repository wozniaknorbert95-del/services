import type { ScreenKey } from '@/content/ecosystem';
import { screens } from '@/content/proof';
import ProofScreenImage from '@/components/ui/ProofScreenImage';

interface ModulePreviewThumbProps {
  screenKey?: ScreenKey;
  size?: 'default' | 'sm';
  className?: string;
}

export default function ModulePreviewThumb({
  screenKey,
  size = 'default',
  className = '',
}: ModulePreviewThumbProps) {
  if (!screenKey) return null;

  const screen = screens[screenKey];
  if (!screen?.ready || !screen.src) return null;

  const isSm = size === 'sm';

  return (
    <div
      className={`overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] ${
        isSm ? 'mb-3 aspect-[16/10]' : 'mb-4 aspect-[16/10]'
      } ${className}`}
    >
      <ProofScreenImage
        src={screen.src}
        alt={screen.alt}
        width={isSm ? 400 : 640}
        height={isSm ? 250 : 400}
      />
    </div>
  );
}

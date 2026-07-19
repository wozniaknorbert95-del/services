'use client';

import { useState } from 'react';
import { screens } from '@/content/proof';
import type { ScreenKey } from '@/content/ecosystem';
import ProofScreenImage from '@/components/ui/ProofScreenImage';
import ProofEmptyState from '@/components/ui/ProofEmptyState';

const GALLERY_KEYS = ['jadziaCommander', 'jadziaDataHealth'] as const satisfies readonly ScreenKey[];

type GalleryKey = (typeof GALLERY_KEYS)[number];

const LABELS: Record<GalleryKey, string> = {
  jadziaCommander: 'Start',
  jadziaDataHealth: 'Data Health',
};

export default function JadziaProofGallery() {
  const [active, setActive] = useState<GalleryKey>('jadziaCommander');
  const screen = screens[active];
  const ready = Boolean(screen?.ready && screen.src);

  return (
    <div className="qf-coi-gallery">
      <div className="qf-coi-gallery-tabs" role="tablist" aria-label="Commander screenshots">
        {GALLERY_KEYS.map((key) => {
          const selected = active === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              id={`jadzia-shot-${key}`}
              aria-selected={selected}
              aria-controls="jadzia-shot-panel"
              tabIndex={selected ? 0 : -1}
              className="qf-coi-gallery-tab"
              onClick={() => setActive(key)}
            >
              {LABELS[key]}
            </button>
          );
        })}
      </div>

      <div
        id="jadzia-shot-panel"
        role="tabpanel"
        aria-labelledby={`jadzia-shot-${active}`}
        className="qf-coi-gallery-frame"
      >
        {ready ? (
          <ProofScreenImage
            src={screen.src!}
            alt={screen.alt}
            width={800}
            height={500}
            priority={active === 'jadziaCommander'}
          />
        ) : (
          <ProofEmptyState
            eyebrow="// Proof"
            title="Screenshot coming soon"
            description="Commander capture is being refreshed."
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

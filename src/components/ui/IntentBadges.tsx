import type { IntentId } from '@/content/ecosystem';
import { getIntentMeta } from '@/content/ecosystem';

interface IntentBadgesProps {
  intents: IntentId[];
  size?: 'sm' | 'md';
}

export default function IntentBadges({ intents, size = 'sm' }: IntentBadgesProps) {
  const dot = size === 'sm' ? 'h-2.5 w-2.5' : 'h-3 w-3';

  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Business outcomes">
      {intents.map((id) => {
        const meta = getIntentMeta(id);
        return (
          <span
            key={id}
            className={`${dot} rounded-full border border-black/20 shadow-sm`}
            style={{ backgroundColor: meta.cssVar }}
            title={meta.legend}
          />
        );
      })}
    </div>
  );
}

'use client';

import { trackEvent, type AnalyticsEvent } from '@/lib/analytics';

interface TrackedAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: AnalyticsEvent;
  detail?: Record<string, string>;
}

export default function TrackedAnchor({ event, detail, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, detail);
        onClick?.(e);
      }}
    />
  );
}

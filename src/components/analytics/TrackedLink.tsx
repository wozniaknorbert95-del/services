'use client';

import Link from 'next/link';
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics';

interface TrackedLinkProps extends React.ComponentProps<typeof Link> {
  event: AnalyticsEvent;
  detail?: Record<string, string>;
}

export default function TrackedLink({ event, detail, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, detail);
        onClick?.(e);
      }}
    />
  );
}

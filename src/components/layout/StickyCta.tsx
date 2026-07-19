'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { WHATSAPP } from '@/lib/constants';
import { HEADER_CTA } from '@/lib/navigation';
import { trackEvent } from '@/lib/analytics';

const OBSERVER_ROOT_MARGIN = '0px 0px -40% 0px';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector('[data-home-section="hero"]');
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show after hero leaves the viewport (sales lift — earlier sticky access)
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { rootMargin: OBSERVER_ROOT_MARGIN, threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="qf-sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-[var(--qf-border)] bg-[rgba(14,12,10,0.95)] px-[var(--qf-sp-4)] py-[var(--qf-sp-3)] backdrop-blur-[8px] lg:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-[var(--qf-maxw)] gap-[var(--qf-sp-3)]">
        <a
          href={WHATSAPP.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('cta_whatsapp_click', { location: 'sticky_mobile' })}
          className="flex flex-1 items-center justify-center border border-[var(--qf-border)] px-4 py-3 text-sm font-semibold text-[var(--qf-text)]"
        >
          {WHATSAPP.label}
        </a>
        <Link
          href={HEADER_CTA.href}
          onClick={() => trackEvent('cta_book_map_click', { location: 'sticky_mobile' })}
          className="flex flex-[1.4] items-center justify-center border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-4 py-3 text-sm font-semibold text-[var(--qf-bg)]"
        >
          {HEADER_CTA.label}
        </Link>
      </div>
    </div>
  );
}

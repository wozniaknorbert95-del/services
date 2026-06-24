'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { WHATSAPP } from '@/lib/constants';
import { HEADER_CTA } from '@/lib/navigation';

const OBSERVER_ROOT_MARGIN = '0px 0px -40% 0px';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector('[data-home-section="built-vs-planned"]');
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
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
          className="flex flex-1 items-center justify-center border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-4 py-3 text-sm font-semibold text-[var(--qf-bg)]"
        >
          {WHATSAPP.label}
        </a>
        <Link
          href={HEADER_CTA.href}
          className="flex items-center justify-center border border-[var(--qf-border)] px-4 py-3 text-sm font-semibold text-[var(--qf-text)]"
        >
          {HEADER_CTA.label}
        </Link>
      </div>
    </div>
  );
}

'use client';

import { useEffect } from 'react';

/**
 * Next.js App Router does not always scroll to hash targets after client hydration.
 * Re-run scroll once the DOM is ready so /#los-teaser and cross-page hashes land correctly.
 */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const navOffset =
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 64;

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) {
        return false;
      }
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 8;
      window.scrollTo({ top, behavior: 'auto' });
      return true;
    };

    if (scrollToTarget()) {
      return;
    }

    const t1 = window.setTimeout(scrollToTarget, 100);
    const t2 = window.setTimeout(scrollToTarget, 400);
    const t3 = window.setTimeout(scrollToTarget, 1200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return null;
}

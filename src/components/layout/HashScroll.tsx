'use client';

import { useEffect } from 'react';

/**
 * Next.js App Router does not always scroll to hash targets after client hydration.
 * Re-run scroll until the target is in view (footer Architecture LOS, /#los-teaser, etc.).
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

    const isInView = (target: HTMLElement) => {
      const r = target.getBoundingClientRect();
      return r.top >= navOffset && r.top < window.innerHeight * 0.85;
    };

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) {
        return false;
      }
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 8;
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
      return isInView(target);
    };

    let cancelled = false;
    const delays = [0, 100, 400, 1200, 2500];

    const timers = delays.map((delay) =>
      window.setTimeout(() => {
        if (!cancelled) {
          scrollToTarget();
        }
      }, delay)
    );

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}

'use client';

import { useEffect, useState } from 'react';

const PROGRESS_GROUPS = [
  { id: 'system', label: 'System', sections: ['hero', 'los-teaser', 'built-vs-planned'] },
  { id: 'route', label: 'Route', sections: ['repo-router', 'pain-grid', 'spearhead'] },
  { id: 'proof', label: 'Proof', sections: ['owner-ecosystem', 'system-metrics', 'results-teaser', 'behind-the-scenes'] },
  { id: 'process', label: 'Process', sections: ['how-i-work', 'why-this-works', 'trust-safety'] },
  { id: 'pricing', label: 'Pricing', sections: ['pricing', 'final-cta'] },
] as const;

export default function SectionProgress() {
  const [activeGroup, setActiveGroup] = useState<string>('system');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sectionElements = PROGRESS_GROUPS.flatMap((group) =>
      group.sections
        .map((section) => document.querySelector(`[data-home-section="${section}"]`))
        .filter((el): el is Element => el !== null)
    );

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) {
          return;
        }

        const sectionId = visible[0].target.getAttribute('data-home-section');
        if (!sectionId) {
          return;
        }

        const group = PROGRESS_GROUPS.find((g) => g.sections.includes(sectionId as never));
        if (group) {
          setActiveGroup(group.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] }
    );

    sectionElements.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 right-0 top-[var(--nav-height)] z-30 h-0.5 bg-[var(--qf-border)] lg:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[var(--qf-accent)] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
        aria-label="Page sections"
      >
        {PROGRESS_GROUPS.map((group) => {
          const isActive = activeGroup === group.id;
          return (
            <div key={group.id} className="flex items-center gap-2">
              <span
                className={`h-2 w-2 shrink-0 rounded-full border transition-colors ${
                  isActive
                    ? 'border-[var(--qf-accent)] bg-[var(--qf-accent)]'
                    : 'border-[var(--qf-border-bright)] bg-transparent'
                }`}
                aria-hidden="true"
              />
              <span
                className={`font-mono text-[10px] uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[var(--qf-accent)]' : 'text-[var(--qf-text-faint)]'
                }`}
              >
                {group.label}
              </span>
            </div>
          );
        })}
      </nav>
    </>
  );
}

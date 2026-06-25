'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HEADER_NAV, SOLUTIONS_NAV, HEADER_CTA } from '@/lib/navigation';
import BrandLogo from '@/components/ui/BrandLogo';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--qf-border)] bg-[rgba(14,12,10,0.85)] backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[var(--qf-maxw)] items-center justify-between px-[var(--qf-sp-6)] py-[var(--qf-sp-3)]">
        <BrandLogo size="header" />

        <nav className="hidden items-center gap-[var(--qf-sp-6)] lg:flex" aria-label="Primary">
          {HEADER_NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
            >
              {item.hasDropdown ? (
                <button
                  type="button"
                  className="flex items-center gap-1 text-[var(--qf-text-dim)] text-[var(--qf-fs-sm)] hover:text-[var(--qf-text)]"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className={cn('h-3 w-3 transition-transform', dropdownOpen && 'rotate-180')} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--qf-text-dim)] text-[var(--qf-fs-sm)] hover:text-[var(--qf-text)]"
                >
                  {item.label}
                </Link>
              )}

              {item.hasDropdown && dropdownOpen && (
                <div className="qf-dropdown absolute left-0 top-full mt-2 w-72 border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-2">
                  <Link
                    href={item.href}
                    className="mb-1 block rounded-[var(--qf-radius)] px-3 py-2 text-sm font-semibold text-[var(--qf-text)] hover:bg-[var(--qf-bg-inset)]"
                  >
                    All solutions
                  </Link>
                  {SOLUTIONS_NAV.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-start justify-between gap-3 rounded-[var(--qf-radius)] px-3 py-2 text-sm hover:bg-[var(--qf-bg-inset)]"
                    >
                      <span className="min-w-0">
                        <span className="block text-[var(--qf-text-dim)] hover:text-[var(--qf-text)]">
                          {sub.label}
                        </span>
                        {sub.price ? (
                          <span className="mt-0.5 block font-mono text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">
                            {sub.price}
                          </span>
                        ) : null}
                      </span>
                      {sub.badge ? (
                        <span className="shrink-0 text-[var(--qf-fs-xs)] text-[var(--qf-accent)]">
                          {sub.badge}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href={HEADER_CTA.href}
            className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
          >
            {HEADER_CTA.label} <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="min-h-11 min-w-11 text-[var(--qf-text-dim)] lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] px-[var(--qf-sp-6)] py-[var(--qf-sp-4)] lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {HEADER_NAV.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex min-h-11 items-center py-2 text-[var(--qf-text)] font-semibold hover:text-[var(--qf-accent)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-4 flex flex-col gap-1">
                      {SOLUTIONS_NAV.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex min-h-11 flex-col justify-center py-2 text-[var(--qf-text-dim)] text-sm hover:text-[var(--qf-text)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>
                            {sub.label}
                            {sub.badge ? (
                              <span className="ml-2 text-[var(--qf-accent)] text-xs">({sub.badge})</span>
                            ) : null}
                          </span>
                          {sub.price ? (
                            <span className="font-mono text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">
                              {sub.price}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center py-2 text-[var(--qf-text)] font-semibold hover:text-[var(--qf-accent)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href={HEADER_CTA.href}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)]"
              onClick={() => setMobileOpen(false)}
            >
              {HEADER_CTA.label} →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

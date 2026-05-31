'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SOLUTION_DROPDOWN, ROUTES } from '@/lib/constants';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--qf-border)] bg-[rgba(14,12,10,0.85)] backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[var(--qf-maxw)] items-center justify-between px-[var(--qf-sp-6)] py-[var(--qf-sp-3)]">
        {/* Logo */}
        <Link href={ROUTES.home} className="flex items-center text-[var(--qf-text)] font-bold tracking-[0.04em]">
          <span className="mr-[0.4em] text-[var(--qf-accent)]">▍</span>
          quietforge
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[var(--qf-sp-6)] lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)} onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}>
              {item.hasDropdown ? (
                <button
                  type="button"
                  className="flex items-center gap-1 text-[var(--qf-text-dim)] text-[var(--qf-fs-sm)] hover:text-[var(--qf-text)]"
                  onClick={() => setDropdownOpen((prev) => !prev)}
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

              {/* Dropdown */}
              {item.hasDropdown && dropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-2 shadow-lg">
                  {SOLUTION_DROPDOWN.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-center justify-between rounded-[var(--qf-radius)] px-3 py-2 text-sm text-[var(--qf-text-dim)] hover:bg-[var(--qf-bg-inset)] hover:text-[var(--qf-text)]"
                    >
                      <span>{sub.label}</span>
                      {sub.badge && (
                        <span className="text-[var(--qf-fs-xs)] text-[var(--qf-accent)]">{sub.badge}</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href={ROUTES.bookDiscovery}
            className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
          >
            Book Automation Map <span aria-hidden="true">→</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-[var(--qf-text-dim)] lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--qf-border)] bg-[var(--qf-bg-raised)] px-[var(--qf-sp-6)] py-[var(--qf-sp-4)] lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <span className="text-[var(--qf-text)] font-semibold">{item.label}</span>
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {SOLUTION_DROPDOWN.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="text-[var(--qf-text-dim)] text-sm hover:text-[var(--qf-text)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                          {sub.badge && <span className="ml-2 text-[var(--qf-accent)] text-xs">({sub.badge})</span>}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[var(--qf-text)] font-semibold hover:text-[var(--qf-accent)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href={ROUTES.bookDiscovery}
              className="mt-2 inline-flex items-center justify-center gap-2 border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)]"
              onClick={() => setMobileOpen(false)}
            >
              Book Automation Map →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

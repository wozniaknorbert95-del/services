import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

const SOLUTION_LINKS = [
  { label: 'Inbox Killer', href: ROUTES.inboxKiller },
  { label: 'Web Upgrade', href: ROUTES.webUpgrade },
  { label: 'Sales Funnel', href: ROUTES.salesFunnel },
  { label: 'Lead Magnet', href: ROUTES.leadMagnetGame },
  { label: 'Managed Automation', href: ROUTES.managedAutomation },
];

const COMPANY_LINKS = [
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Results', href: ROUTES.results },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'Trust & Safety', href: ROUTES.trust },
  { label: 'The Founder\'s System', href: ROUTES.founder },
  { label: 'About', href: ROUTES.about },
  { label: 'Blog', href: ROUTES.blog },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--qf-border)] bg-[var(--qf-bg)] py-[var(--qf-sp-12)] text-[var(--qf-text-dim)] text-[var(--qf-fs-sm)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <div className="grid gap-[var(--qf-sp-8)] sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <span className="flex items-center text-[var(--qf-text)] font-bold tracking-[0.04em]">
              <span className="mr-[0.4em] text-[var(--qf-accent)]">▍</span>
              quietforge
            </span>
            <p className="mt-[var(--qf-sp-3)] text-[var(--qf-text-faint)]">
              Systems that run your small business — quietly, in the background.
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="mb-[var(--qf-sp-4)] text-[var(--qf-text)] text-[var(--qf-fs-xs)] uppercase tracking-[0.1em]">
              Solutions
            </h4>
            <ul className="space-y-2">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[var(--qf-accent)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="mb-[var(--qf-sp-4)] text-[var(--qf-text)] text-[var(--qf-fs-xs)] uppercase tracking-[0.1em]">
              Company
            </h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[var(--qf-accent)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Get started */}
          <div>
            <h4 className="mb-[var(--qf-sp-4)] text-[var(--qf-text)] text-[var(--qf-fs-xs)] uppercase tracking-[0.1em]">
              Get started
            </h4>
            <p className="mb-2">
              <Link href={ROUTES.bookDiscovery} className="text-[var(--qf-accent)]">
                Book your Automation Map →
              </Link>
            </p>
            <p className="mb-2">
              <a href="mailto:hello@flexgrafik.nl" className="hover:text-[var(--qf-accent)]">
                hello@flexgrafik.nl
              </a>
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-[var(--qf-sp-8)] border-t border-[var(--qf-border)] pt-[var(--qf-sp-4)] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[var(--qf-text-faint)]">
            Building something bigger?{' '}
            <a
              href="https://portfolio.flexgrafik.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--qf-accent)]"
            >
              See how the full system works → Pillar 3
            </a>
          </p>
          <p className="text-[var(--qf-text-faint)]">
            &copy; {new Date().getFullYear()} Quietforge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-bg)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <div className="text-sm text-[var(--color-text-muted)]">
          &copy; 2026 FlexGrafik Digital. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://portfolio.flexgrafik.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            AI Systems Architect
          </a>
          <a
            href="https://flexgrafik.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            FlexGrafik Branding
          </a>
          <a
            href="/legal"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}

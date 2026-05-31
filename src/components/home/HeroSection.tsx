'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { ROUTES } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="py-[var(--qf-sp-24)]">
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <div className="grid items-center gap-[var(--qf-sp-12)] lg:grid-cols-2">
          {/* Left: copy */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, duration: 0.6 }}
          >
            <h1 className="mb-[var(--qf-sp-4)]">
              Your website and back-office,{' '}
              <span className="text-[var(--qf-accent)]">running on autopilot.</span>
            </h1>
            <p className="text-[var(--qf-fs-lg)] text-[var(--qf-text-dim)]">
              Done-for-you digital systems for small businesses — fewer emails, more clients,
              and no more apologising for an outdated site.
            </p>
            <div className="mt-[var(--qf-sp-6)] flex flex-wrap items-center gap-[var(--qf-sp-4)]">
              <a
                href={ROUTES.bookDiscovery}
                className="inline-flex items-center gap-[var(--qf-sp-2)] border border-[var(--qf-accent)] bg-[var(--qf-accent)] px-6 py-3 text-sm font-semibold text-[var(--qf-bg)] transition-all duration-[var(--qf-transition)] hover:bg-[var(--qf-accent-soft)] hover:border-[var(--qf-accent-soft)]"
              >
                Book your Automation Map <span aria-hidden="true">→</span>
              </a>
              <a
                href={ROUTES.solutions}
                className="text-[var(--qf-text-dim)] transition-colors hover:text-[var(--qf-text)]"
              >
                See what we fix →
              </a>
            </div>
            <p className="mt-[var(--qf-sp-4)] text-[var(--qf-fs-sm)] text-[var(--qf-text-faint)]">
              <span className="text-[var(--qf-accent)]">→ </span>
              Built on a live, battle-tested system — not a template.
            </p>
          </motion.div>

          {/* Right: terminal panel mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)]">
              {/* Title bar */}
              <div className="flex items-center gap-[var(--qf-sp-2)] border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-[var(--qf-sp-4)] py-[var(--qf-sp-2)] text-[var(--qf-fs-xs)] text-[var(--qf-text-dim)]">
                <span className="h-2 w-2 rounded-full bg-[var(--qf-accent)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--qf-border-bright)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--qf-border-bright)]" />
                <span className="ml-auto">inbox-killer · live</span>
              </div>
              {/* Body */}
              <div className="p-[var(--qf-sp-6)]">
                <pre className="overflow-x-auto whitespace-pre font-[family-name:var(--qf-mono)] text-[var(--qf-fs-sm)] text-[var(--qf-text-dim)]">
                  <span className="text-[var(--qf-accent)]">$</span> inbox.scan --folders inbox,leads
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> 142 messages read
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> sorted → lead(18) client(34) invoice(9) noise(81)
                  {'\n'}<span className="text-[var(--qf-ok)]">✓</span> 18 drafts ready · <span className="text-[var(--qf-accent)]">awaiting your approval</span>
                  {'\n'}<span className="text-[var(--qf-accent)]">$</span> _
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status bar */}
        <div className="mt-[var(--qf-sp-12)] flex flex-wrap items-center gap-[var(--qf-sp-4)] border-t border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-[var(--qf-sp-6)] py-[var(--qf-sp-2)] text-[var(--qf-fs-xs)] text-[var(--qf-text-faint)]">
          <span className="inline-flex items-center gap-1.5 text-[var(--qf-accent)]">
            <span className="text-[0.6em]">●</span> quietforge v1.0
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[0.6em] text-[var(--qf-border-bright)]">●</span> 5 systems
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[0.6em] text-[var(--qf-border-bright)]">●</span> human-in-the-loop
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5">
            <span className="text-[0.6em] text-[var(--qf-border-bright)]">●</span> ctx — ready
          </span>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import StatusBadge from '@/components/ui/StatusBadge';
import {
  READINESS_HEADER,
  READINESS_ROWS,
  type ReadinessStatus,
} from '@/content/readiness';
import { ROUTES } from '@/lib/constants';

const COMPACT_ROW_LIMIT = 4;

interface BuiltVsPlannedProps {
  variant?: 'default' | 'compact';
}

/**
 * Built vs Planned readiness table — honest inventory per repo.
 * Compact on home (max 4 rows); full table on owner-ecosystem.
 */
export default function BuiltVsPlanned({ variant = 'default' }: BuiltVsPlannedProps) {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();
  const isCompact = variant === 'compact';
  const rows = isCompact ? READINESS_ROWS.slice(0, COMPACT_ROW_LIMIT) : READINESS_ROWS;

  return (
    <section
      id="built-vs-planned"
      data-home-section="built-vs-planned"
      className={`border-t border-[var(--qf-border)] ${isCompact ? 'py-[var(--qf-sp-16)]' : 'py-[var(--qf-sp-24)]'}`}
      aria-labelledby="built-vs-planned-heading"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-8)]"
        >
          <span className="qf-eyebrow">{READINESS_HEADER.eyebrow}</span>
          <h2 id="built-vs-planned-heading" className="mt-[var(--qf-sp-4)]">
            {READINESS_HEADER.title}
          </h2>
          <p className="qf-lead mt-[var(--qf-sp-4)] max-w-2xl">{READINESS_HEADER.lead}</p>
        </motion.div>

        {isCompact ? (
          <div className="grid grid-cols-1 gap-[var(--qf-sp-3)] sm:grid-cols-2">
            {rows.map((row) => (
              <div
                key={row.repoKey}
                className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="font-semibold text-[var(--qf-text)]">{row.module}</p>
                  <StatusBadge status={row.status as ReadinessStatus} />
                </div>
                <p className="text-sm text-[var(--qf-text-dim)]">{row.capability}</p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
            className="overflow-x-auto rounded-[var(--qf-radius)] border border-[var(--qf-border)]"
          >
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--qf-border)] bg-[var(--qf-bg-inset)]">
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                    Module
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                    Readiness
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                    Key capability
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--qf-accent)]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.repoKey} className="border-b border-[var(--qf-border)] last:border-0">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[var(--qf-text)]">{row.module}</p>
                      <p className="font-mono text-xs text-[var(--qf-text-faint)]">{row.repoKey}</p>
                    </td>
                    <td className="px-4 py-3 font-mono text-[var(--qf-text-dim)]">{row.readiness}</td>
                    <td className="px-4 py-3 text-[var(--qf-text-dim)]">{row.capability}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={row.status as ReadinessStatus} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {isCompact ? (
          <p className="mt-[var(--qf-sp-6)]">
            <Link
              href={ROUTES.resultsOwnerEcosystem}
              className="text-sm font-semibold text-[var(--qf-accent)] hover:underline"
            >
              View full built vs planned map →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

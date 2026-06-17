'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { screens, videos, vcmsFeatureStatus } from '@/content/proof';
import { ROUTES } from '@/lib/constants';
import Link from 'next/link';
import VideoSlot from '@/components/ui/VideoSlot';
import ProofScreenImage from '@/components/ui/ProofScreenImage';

import type { ScreenKey } from '@/content/ecosystem';

const OUTCOMES = [
  {
    title: 'Fewer surprises before deploy',
    detail: 'Conflicts across repos are visible before they become client-facing bugs.',
  },
  {
    title: 'Faster changes with control',
    detail: 'AI can draft and refactor — review gates in Agent OS decide what ships.',
  },
  {
    title: 'Cleaner handover',
    detail: 'Scan reports, repo map and session handoffs — not trapped in one inbox.',
  },
];

export default function BehindTheScenes() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  const VCMS_SCREEN_KEYS: ScreenKey[] = ['vcmsDashboard', 'conflictReport', 'auditLog'];
  const activeScreens = VCMS_SCREEN_KEYS.map((key) => screens[key]).filter(
    (s) => s.ready && s.src,
  );

  const showVcmsVideo = videos.vcms?.ready && videos.vcms?.url;

  return (
    <section
      id="governance"
      data-home-section="behind-the-scenes"
      className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)] bg-[var(--qf-bg)]"
    >
      <div className="mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-12)] text-center"
        >
          <span className="qf-eyebrow">// Behind the scenes</span>
          <h2 className="mt-[var(--qf-sp-4)] text-[var(--qf-fs-2xl)] font-bold">
            The governance layer behind the system.
          </h2>
          <p className="mx-auto mt-[var(--qf-sp-4)] max-w-2xl text-[var(--qf-text-dim)]">
            VCMS scans content, repos and agent rules before changes reach production — so your business does not depend on memory, screenshots or one developer&apos;s inbox.
          </p>
        </motion.div>

        <motion.ul
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mx-auto mb-[var(--qf-sp-12)] grid max-w-3xl gap-[var(--qf-sp-4)] text-left md:grid-cols-3"
        >
          {OUTCOMES.map((o) => (
            <li
              key={o.title}
              className="rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] p-[var(--qf-sp-4)]"
            >
              <p className="text-sm font-semibold text-[var(--qf-text)]">{o.title}</p>
              <p className="mt-1 text-xs text-[var(--qf-text-dim)]">{o.detail}</p>
            </li>
          ))}
        </motion.ul>

        <p className="mb-[var(--qf-sp-8)] text-center text-sm font-medium text-[var(--qf-accent)]">
          The system proposes; a human approves what ships.
        </p>

        <ul className="mx-auto mb-[var(--qf-sp-8)] flex max-w-3xl flex-wrap justify-center gap-2">
          {Object.values(vcmsFeatureStatus).map((f) => (
            <li
              key={f.label}
              className="rounded-full border border-[var(--qf-border)] bg-[var(--qf-bg-raised)] px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--qf-text-dim)]"
            >
              {f.label}{' '}
              <span
                className={
                  f.status === 'PROVEN'
                    ? 'text-emerald-500'
                    : f.status === 'DEMO'
                      ? 'text-amber-500'
                      : 'text-[var(--qf-text-faint)]'
                }
              >
                {f.status}
              </span>
            </li>
          ))}
        </ul>

        {showVcmsVideo && (
          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
            className="mb-[var(--qf-sp-16)]"
          >
            <VideoSlot videoKey="vcms" />
          </motion.div>
        )}

        <motion.div
          variants={motionCfg.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-[var(--qf-sp-8)] md:grid-cols-2"
        >
          {activeScreens.map((screen, idx) => (
            <motion.div key={idx} variants={motionCfg.childFade} className="flex flex-col gap-4">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-raised)]">
                <ProofScreenImage
                  src={screen.src!}
                  alt={screen.alt}
                  width={800}
                  height={500}
                />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--qf-accent)]">{screen.alt}</p>
                <p className="mt-1 text-sm text-[var(--qf-text-dim)]">{screen.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-[var(--qf-sp-10)] text-center text-xs text-[var(--qf-text-faint)]">
          Live in owner ecosystem. Selected modules are production; some supervision features are internal and improving. No fabricated metrics.
        </p>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mt-[var(--qf-sp-12)] text-center"
        >
          <Link
            href={ROUTES.resultsOwnerEcosystemWhyVcms}
            className="inline-flex items-center gap-[var(--qf-sp-2)] text-[var(--qf-accent)] transition-colors hover:text-[var(--qf-text)]"
          >
            See full Owner Ecosystem case study →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

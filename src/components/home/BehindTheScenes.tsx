'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { screens } from '@/content/proof';
import VideoSlot from '@/components/ui/VideoSlot';
import Image from 'next/image';

export default function BehindTheScenes() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  const activeScreens = [
    screens.vcmsDashboard,
    screens.agentCards,
    screens.workflowMap,
    screens.auditLog,
  ];

  return (
    <section className="border-t border-[var(--qf-border)] py-[var(--qf-sp-24)] bg-[var(--qf-bg)]">
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
            Most agencies show you a website.
          </h2>
          <p className="mx-auto mt-[var(--qf-sp-4)] max-w-2xl text-[var(--qf-text-dim)]">
            Here&apos;s the system that runs behind it — the layer that decides why this is a business system, not a page.
          </p>
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="mb-[var(--qf-sp-16)]"
        >
          <VideoSlot videoKey="vcms" />
        </motion.div>

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
                {screen.ready && screen.src ? (
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-4 text-center">
                    <span className="font-mono text-sm text-[var(--qf-text-faint)]">
                      [FILL: Screen — {screen.alt}]
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--qf-accent)]">{screen.alt}</p>
                <p className="mt-1 text-sm text-[var(--qf-text-dim)]">{screen.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

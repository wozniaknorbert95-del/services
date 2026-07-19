'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { VCMS_STRIP } from '@/content/conversion-copy';
import Eyebrow from '@/components/ui/Eyebrow';

/** VCMS trust strip — site-map §3 v5.0 #5. */
export default function VcmsTrustStrip() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      data-home-section="vcms-trust"
      className="qf-home-section"
      aria-labelledby="vcms-trust-title"
    >
      <div className="qf-home-inner">
        <div className="qf-spearhead-layout">
          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
          >
            <Eyebrow>{VCMS_STRIP.eyebrow}</Eyebrow>
            <h2 id="vcms-trust-title" className="mb-[var(--qf-sp-4)]">
              {VCMS_STRIP.title}
            </h2>
            <p className="qf-spearhead-body">{VCMS_STRIP.lead}</p>
            <ul className="qf-spearhead-bullets">
              {VCMS_STRIP.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="qf-spearhead-actions">
              <Link href={VCMS_STRIP.href} className="qf-btn-ghost">
                {VCMS_STRIP.cta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={fade.initial}
            whileInView={fade.animate}
            viewport={{ once: true, margin: '-80px' }}
            transition={fade.transition}
          >
            <div className="qf-spearhead-card qf-spearhead-card--muted">
              <div className="qf-spearhead-card-shot">
                <Image
                  src={VCMS_STRIP.visual.src}
                  alt={VCMS_STRIP.visual.alt}
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </div>
              <p className="qf-spearhead-card-caption">{VCMS_STRIP.visual.caption}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

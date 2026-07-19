'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMotion } from '@/lib/useMotion';
import { WIZARD_VISUALIZER } from '@/content/conversion-copy';
import { trackEvent } from '@/lib/analytics';
import Eyebrow from '@/components/ui/Eyebrow';
import StatusBadge from '@/components/ui/StatusBadge';

/** Wizard + Design Intake compact — secondary proof (site-map §3 v5.0 #6). */
export default function WizardVisualizerCompact() {
  const motionCfg = useMotion();
  const fade = motionCfg.fadeIn();

  return (
    <section
      data-home-section="wizard-visualizer"
      className="qf-home-section"
      aria-labelledby="wizard-visualizer-title"
    >
      <div className="qf-home-inner">
        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-home-header"
        >
          <Eyebrow>{WIZARD_VISUALIZER.eyebrow}</Eyebrow>
          <div className="qf-spearhead-status-row">
            <StatusBadge status="LIVE" />
            <StatusBadge status="PARTIAL" />
          </div>
          <h2 id="wizard-visualizer-title">{WIZARD_VISUALIZER.title}</h2>
          <p className="qf-lead max-w-2xl">{WIZARD_VISUALIZER.lead}</p>
          <div className="qf-spearhead-actions">
            <a
              href={WIZARD_VISUALIZER.wizardHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('wizard_demo_click', { location: 'wizard_visualizer' })}
              className="qf-btn-fill"
            >
              {WIZARD_VISUALIZER.wizardCta} <span aria-hidden="true">→</span>
            </a>
            <Link href={WIZARD_VISUALIZER.intakeHref} className="qf-btn-ghost">
              {WIZARD_VISUALIZER.intakeCta}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={fade.initial}
          whileInView={fade.animate}
          viewport={{ once: true, margin: '-80px' }}
          transition={fade.transition}
          className="qf-wizard-viz-grid"
        >
          <div>
            <span className="qf-wizard-viz-badge">Wizard · LIVE</span>
            <div className="qf-wizard-viz-shot">
              <Image
                src={WIZARD_VISUALIZER.wizardShot.src}
                alt={WIZARD_VISUALIZER.wizardShot.alt}
                width={480}
                height={300}
                loading="lazy"
              />
            </div>
            <p className="qf-wizard-viz-caption">{WIZARD_VISUALIZER.wizardShot.caption}</p>
          </div>
          <div>
            <span className="qf-wizard-viz-badge">Design Intake · PARTIAL</span>
            <div className="qf-wizard-viz-shot">
              <Image
                src={WIZARD_VISUALIZER.intakeShot.src}
                alt={WIZARD_VISUALIZER.intakeShot.alt}
                width={480}
                height={300}
                loading="lazy"
              />
            </div>
            <p className="qf-wizard-viz-caption">{WIZARD_VISUALIZER.intakeShot.caption}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

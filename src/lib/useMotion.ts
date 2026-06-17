'use client';

import { useReducedMotion } from 'framer-motion';
import { heroEntrance, fadeIn, slideUp, scaleIn, staggerContainer, type MotionPreset } from '@/lib/motion';

export const motionStatic = {
  initial: { opacity: 1, y: 0, x: 0, scale: 1 },
  animate: { opacity: 1, y: 0, x: 0, scale: 1 },
  transition: { duration: 0 },
} as const;

export function useMotion() {
  const prefersReduced = useReducedMotion() ?? false;

  function resolve(preset: MotionPreset, transitionOverrides?: Record<string, unknown>) {
    if (prefersReduced) {
      return motionStatic;
    }
    return {
      initial: preset.initial,
      animate: preset.animate,
      transition: { ...preset.transition, ...transitionOverrides },
    };
  }

  return {
    prefersReduced,
    heroEntrance: (overrides?: Record<string, unknown>) => resolve(heroEntrance, overrides),
    fadeIn: (overrides?: Record<string, unknown>) => resolve(fadeIn, overrides),
    slideUp: (overrides?: Record<string, unknown>) => resolve(slideUp, overrides),
    scaleIn: (overrides?: Record<string, unknown>) => resolve(scaleIn, overrides),
    slideFromRight: (overrides?: Record<string, unknown>) =>
      prefersReduced
        ? motionStatic
        : {
            initial: { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: 'easeOut' as const, ...overrides },
          },
    staggerContainer: prefersReduced
      ? { animate: { transition: { staggerChildren: 0 } } }
      : staggerContainer,
    childFade: prefersReduced
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : fadeIn,
  };
}

export type MotionPreset = {
  initial: { opacity: number; y?: number; x?: number; scale?: number };
  animate: { opacity: number; y?: number; x?: number; scale?: number };
  transition: { duration: number; ease?: 'easeOut' };
};

export const fadeIn: MotionPreset = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

/** Hero entrance: fade + 8px slide-up, 400ms */
export const heroEntrance: MotionPreset = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

export const slideUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

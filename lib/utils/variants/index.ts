import { Variants } from "framer-motion";

// VARIANTS FOR TRANSITION ELEMENTS
const DEFAULT_DURATION = 0.4;

// defaults
export const transElementVariant: Variants = {
  initial: { y: -3, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: DEFAULT_DURATION } },
};

export const transStartVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DEFAULT_DURATION } },
};

// -------------------------PARENTS-------------------------
// parents for staggering children
export const defaultParentVariant: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export const defaultParentVariantInView: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3, delay: 0.1 } },
};

export const defaultParentVariantInViewFast: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const defaultParentVariantInViewSlow: Variants = {
  initial: {},
  animate: { opacity: 1, transition: { staggerChildren: 0.4 } },
};
export const defaultParentFastVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 - 0.08 } },
};

export const defaultParentSlowVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 + 0.2 } },
};

// -------------------------CHILDREN-------------------------
// children with parents variant: Variants s
export const fromLeftVariant: Variants = {
  initial: { opacity: 0, x: "-5%" },
  animate: { opacity: 1, x: 0 },
};

export const fromRightVariant: Variants = {
  initial: { opacity: 0, x: "5%" },
  animate: { opacity: 1, x: 0 },
};

export const fromBottomVariant: Variants = {
  initial: { opacity: 0, y: "5%" },
  animate: { opacity: 1, y: 0 },
};

export const fromTopVariant: Variants = {
  initial: { opacity: 0, y: "-5%" },
  animate: { opacity: 1, y: 0 },
};

// Standalone
export const opacityAloneVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: DEFAULT_DURATION } },
  // exit: { opacity: 0 },
};

export const fromTopAloneVariant: Variants = {
  initial: { opacity: 0, y: "-5%" },
  animate: { opacity: 1, y: 0 },
};

export const fromBottomAloneVariant: Variants = {
  initial: { opacity: 0, y: "5%" },
  animate: { opacity: 1, y: 0, transition: { duration: DEFAULT_DURATION } },
};

export const fromLeftAloneVariant: Variants = {
  initial: { opacity: 0, x: "-20%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-20%", transition: { duration: DEFAULT_DURATION } },
};

export const fromLeftAloneVariantSlow: Variants = {
  initial: { opacity: 0, x: "-20%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const fromRightAloneVariant: Variants = {
  initial: { opacity: 0, x: "20%" },
  animate: { opacity: 1, x: 0 },
};

export const fromRightAloneVariantSlow: Variants = {
  initial: { opacity: 0, x: "20%" },
  animate: { opacity: 1, x: 0, transition: { duration: DEFAULT_DURATION } },
};

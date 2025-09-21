import { Variants } from "framer-motion";

// Elegant easing for smooth, gentle animations
export const gentleEasing = [0.25, 0.46, 0.45, 0.94] as const;

// Fade in animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: gentleEasing,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: gentleEasing,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: gentleEasing,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: gentleEasing,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: gentleEasing,
    },
  },
};

// Scale animations
export const gentleScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: gentleEasing,
    },
  },
};

export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: gentleEasing,
    },
  },
};

// Staggered animations for containers
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: gentleEasing,
    },
  },
};

// Text animations
export const letterReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const letterAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: gentleEasing,
    },
  },
};

// Image animations
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: gentleEasing,
    },
  },
};

// Button animations
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    // backgroundColor: "rgb(41 37 36)", // stone-800
  },
  hover: {
    scale: 1.02,
    // backgroundColor: "rgb(75 71 55)", // custom hover color
    transition: {
      duration: 0.3,
      ease: gentleEasing,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Navigation animations
export const navSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: gentleEasing,
      delay: 1.5, // Delay to let page load first
    },
  },
};

// Hero section animations
export const heroTitle: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: gentleEasing,
      delay: 1.2,
    },
  },
};

// Page transitions
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: gentleEasing,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: gentleEasing,
    },
  },
};

// Form field animations
export const formFieldStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const formField: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: gentleEasing,
    },
  },
};

// Gallery grid animations
export const galleryGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const galleryItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: gentleEasing,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: gentleEasing,
    },
  },
};

// Viewport animation settings
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};

// Reduced motion variants (respects user preferences)
export const reduceMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    transition: {
      delay: custom ?? 0,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom ?? 0,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom ?? 0,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom ?? 0,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const scaleOnHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const glowOnHover: Variants = {
  rest: {
    boxShadow: '0 0 20px rgba(0, 245, 160, 0.1)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(0, 245, 160, 0.4)',
    transition: {
      duration: 0.3,
    },
  },
}

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom ?? 0,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom ?? 0,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const infiniteFloat: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const infiniteScroll: Variants = {
  animate: {
    x: [0, -100],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Advanced scroll-triggered animations
export const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom ?? 0,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

export const slideInFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom ?? 0,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom ?? 0,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export const lineGrowthAnimation: Variants = {
  hidden: {
    scaleY: 0,
  },
  visible: (custom?: number) => ({
    scaleY: 1,
    transition: {
      delay: custom ?? 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  }),
}

export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(0, 245, 160, 0.2)',
      '0 0 30px rgba(0, 245, 160, 0.5)',
      '0 0 10px rgba(0, 245, 160, 0.2)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const liftOnHover: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  hover: {
    y: -10,
    boxShadow: '0 20px 40px rgba(0, 245, 160, 0.2)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const rotateOnHover: Variants = {
  rest: {
    rotate: 0,
  },
  hover: {
    rotate: 5,
    transition: {
      duration: 0.3,
    },
  },
}

export const tiltOnHover: Variants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    rotateY: 10,
    transition: {
      duration: 0.3,
    },
  },
}

export const imageZoom: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export const underlineAnimation: Variants = {
  rest: {
    width: '0%',
  },
  hover: {
    width: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const shakeAnimation: Variants = {
  animate: {
    x: [-2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const buttonPulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const checkmarkAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const tickerAnimation = (duration: number = 30): Variants => ({
  animate: {
    x: ['0%', '-100%'],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'linear',
    },
  },
})

export const parallaxScroll: Variants = {
  animate: {
    y: 0,
  },
}

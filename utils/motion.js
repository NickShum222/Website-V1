export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideUp = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay,
    },
  },
});

export const slideRight = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay,
    },
  },
});


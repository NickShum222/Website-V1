export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const opacity = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.3,
    transition: {
      duration: 1,
      delay,
    },
  },

});

export const slideUp = (delay) => ({
  hidden: { y: 75, opacity: 0 },
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
  hidden: { x: -75, opacity: 0 },
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

export const slideLeft = (delay) => ({
  hidden: { x: 50, opacity: 0 },
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

export const moonLeft = (delay) => ({
  hidden: { x: 75, opacity: 0 },
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


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
    opacity: 0.5,
    transition: {
      duration: 0.5,
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
export const dropDown = (delay) => ({
  hidden: { y: -75, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.75,
      delay,
    },

  },

});
export const scale = (delay) => ({
  initial: {
    scale: 0.8,
  },
  visible: {
    scale: [1, 1.1, 0],
    opacity: [1, 1, 0.75, 0],
    
    transition: {
      type: "spring",
      duration: 0.55,
      delay,
    },
  },
});

export const roll = (delay) => ({
  initial: {
    x: -200, opacity: 0,
  },
  visible: {
    x: 0, opacity: 1, rotate: [0, -360],
    transition: {
      type: "tween",
      duration  : 1,
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


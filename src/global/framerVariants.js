export const sectionVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
};
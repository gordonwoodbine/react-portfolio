import { motion } from 'framer-motion';
import style from './About.module.scss';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

// const childVariants = {
//   hidden: {
//     opacity: 0,
//     y: 100
//   },
//   visible: {
//     opacity: 1,
//     y: 0
//   }
// }

const About = () => {
  return (
    <motion.section
      className={`container`}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={style.left}>
        <div className='box'>
          <h2>A Little Bit About Me</h2>
        </div>
        <p>
          As you may have worked out by this point, my name is Mike. I decided
          to become a web developer last year - I was working in retail when the
          virus arrived and, as I'd been wanting to make a change for a while,
          it was just the kick up the arse I needed. So since then I've been
          busy relearning <span className={style.highlight}>HTML</span> and
          <span className={style.highlight}> CSS</span> (because I first learned
          them circa 2001 and, you know, things have changed a bit), learning
          JavaScript
        </p>
        <p>
          Since then I've been teaching myself as much as I can. The web is a
          wonderful place with no shortage of kind people willing to share their
          skills and knoweldge.
        </p>
      </div>
    </motion.section>
  );
};

export default About;

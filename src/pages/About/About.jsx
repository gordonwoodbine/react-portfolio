import { motion } from 'framer-motion';
import style from './About.module.scss';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

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
        <div className="box">
          <h2>A Little Bit About Me</h2>
        </div>
        <p>As you may have worked out by this point, my name is Mike. I decided to become a web developer last year - I was working in retail when the world fell apart and I realised it was time for a change. I've always loved technology, I like figuring out how things work and I enjoy solving problems so I figured web development could be a good fit for me.</p>
        <p>Since then I've been teaching myself as much as I can. The web is a wonderful place with no shortage of kind people willing to share their skills and knoweldge.</p>
      </div>
    </motion.section>
  )
};

export default About;
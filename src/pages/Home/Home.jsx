import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegSmileBeam } from 'react-icons/fa';
import style from './Home.module.scss';

const sectionVariants = {
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

const Home = () => {
  return (
    <motion.section 
      className={`container ${style.home}`}
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={style.wrapper}>
        <div className={style.textSection}>
          <h1>
            Hi there! I'm <span className="highlight">Mike</span>
            <FaRegSmileBeam className={style.icon} />
          </h1>
          <h2>
            I'm a <span className="highlight">web developer</span>, currently focusing on the front-end. I love to work on simple and elegant user interfaces.
          </h2>
          <p>This little site is all about me, the technologies I either know or am learning, what I've done and where (I think) I'm going. It's not exactly Wikipedia.</p>
          <div className={style.btnGroup}>
            <Link to="/about" className={style.linkBtn}>
              <button className={style.btn}>About Me</button>
            </Link>
            <Link to="/projects" className={style.linkBtn}>
              <button className={`${style.btn} ${style.btnOutline}`}>Projects</button>
            </Link>
          </div>
        </div>
        <div className={style.imageSection}>
          <div>
            <img 
              src="img/teal-scan.jpg" 
              alt="arty self-portrait"
              className={style.portrait}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
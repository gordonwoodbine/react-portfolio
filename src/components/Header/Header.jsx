import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NavMenu } from '../';
import style from './Header.module.scss';

const headerVariants = {
  hidden: {
    y: -200
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
}

const Header = ({ toggle }) => {
  return (
    <header className={style.header}>
      <motion.div 
        className={`container ${style.container}`}
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className={style.logo}>
          <h2 className={style.icon}>
            &lt;ML /&gt;
          </h2>
          <p className={style.subtitle}>
            mikelightfoot<span className="highlight">.tech</span>
          </p>
        </div>
        <div className={style.navWrapper}>
          <NavMenu />
        </div>
        <FaBars className={style.menuIcon} onClick={toggle} />
      </motion.div>
    </header>
  );
};

export default Header;
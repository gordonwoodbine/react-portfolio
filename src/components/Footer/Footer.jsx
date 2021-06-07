import { motion } from 'framer-motion';
import { FaHeart, FaMugHot } from 'react-icons/fa';
import style from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  const footerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1
      }
    }
  }

  return (
    <motion.footer
      className={style.footer}
      variants={footerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className="container">
        <p>Coded with <FaHeart className={`${style.icon} ${style.heart}`}/> and <FaMugHot className={style.icon}/> by Mike J. Lightfoot</p>
        <p>&copy; {year}</p>
      </div>
    </motion.footer>
  )
};

export default Footer;
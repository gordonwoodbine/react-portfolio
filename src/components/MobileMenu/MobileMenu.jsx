import style from './MobileMenu.module.scss';
import NavMenu from '../NavMenu/NavMenu';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = ({ menuOpen, toggle }) => {
  return (
    <div className={`${style.menu} ${menuOpen && style.active}`} onClick={toggle}>
      <div className={style.close}>
        <FaTimes />
      </div>
        <NavMenu mobile={true} />
    </div>
  )
};

export default MobileMenu;
import { NavLink } from 'react-router-dom';
import style from './NavMenu.module.scss';

const NavMenu = ({ mobile }) => {
  return (
    <nav className={`${style.nav} ${mobile && style.mobile}`}>
      <NavLink to="/" className={style.navLink} activeClassName={style.active} exact={true}>Home</NavLink>
      <NavLink to="/about" className={style.navLink} activeClassName={style.active} exact={true}>About</NavLink>
      <NavLink to="/projects" className={style.navLink} activeClassName={style.active} exact={true}>Projects</NavLink>
      <NavLink to="/contact" className={style.navLink} activeClassName={style.active} exact={true}>Contact</NavLink>
    </nav>
  );
};

export default NavMenu;
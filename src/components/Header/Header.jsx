import { FaBars } from 'react-icons/fa';
import NavMenu from '../NavMenu/NavMenu';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <div className={style.logo}>
          <h2 className={style.icon}>
            &lt;ML /&gt;
          </h2>
          <p className={style.subtitle}>
            mikelightfoot<span className="highlight">.tech</span>
          </p>
        </div>
        <NavMenu />
        <FaBars className={style.menuIcon}/>
      </div>
    </header>
  );
};

export default Header;
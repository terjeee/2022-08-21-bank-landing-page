import { useState } from 'react';
import { Link } from 'react-router-dom';

import HamburgerClosed from '../../../assets/images/icon-hamburger.svg';
import HamburgerOpened from '../../../assets/images/icon-close.svg';
import css from './MenuMobile.module.css';

function MenuHamburger() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closed = <img className={css.menu} src={HamburgerClosed} alt='menu-closed' />;
  const opened = <img className={css.menu} src={HamburgerOpened} alt='menu-opened' />;

  return (
    <>
      <button className={css} onClick={handleToggleMenu}>
        {showMenu ? opened : closed}
      </button>
      {showMenu && (
        <div className={css.dropdown}>
          <div>
            <ul>
              <span>
                <Link className={css.Link} to='/'>
                  Home
                </Link>
              </span>
              <span>
                <Link className={css.Link} to='/about'>
                  About
                </Link>
              </span>
              <span>
                <Link className={css.Link} to='/contact'>
                  Contact
                </Link>
              </span>
              <span>
                <Link className={css.Link} to='/blog'>
                  Blog
                </Link>
              </span>
              <span>
                <Link className={css.Link} to='/careers'>
                  Careers
                </Link>
              </span>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuHamburger;

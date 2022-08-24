import { Link } from 'react-router-dom';

import css from './MenuDesktop.module.css';

function MenuDesktop() {
  return (
    <nav className={css.menu}>
      <Link className={css.menu__item} to='/'>
        Home
      </Link>
      <Link className={css.menu__item} to='/about'>
        About
      </Link>
      <Link className={css.menu__item} to='/contact'>
        Contact
      </Link>
      <Link className={css.menu__item} to='/blog'>
        Blog
      </Link>
      <Link className={css.menu__item} to='/careers'>
        Careers
      </Link>
    </nav>
  );
}

export default MenuDesktop;

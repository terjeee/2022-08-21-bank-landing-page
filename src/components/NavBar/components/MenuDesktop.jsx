import { Link } from "react-router-dom";

import css from "./MenuDesktop.module.css";

function MenuDesktop() {
  return (
    <nav className={css.menu}>
      <Link className={css.menu__item} to="/2022-08-21-bank-landing-page/">
        Home
      </Link>
      <Link className={css.menu__item} to="/2022-08-21-bank-landing-page/about">
        About
      </Link>
      <Link className={css.menu__item} to="/2022-08-21-bank-landing-page/contact">
        Contact
      </Link>
      <Link className={css.menu__item} to="/2022-08-21-bank-landing-page/blog">
        Blog
      </Link>
      <Link className={css.menu__item} to="/2022-08-21-bank-landing-page/careers">
        Careers
      </Link>
    </nav>
  );
}

export default MenuDesktop;

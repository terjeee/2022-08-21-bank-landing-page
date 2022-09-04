import { useState } from "react";
import { Link } from "react-router-dom";

import HamburgerClosed from "../../../assets/images/icon-hamburger.svg";
import HamburgerOpened from "../../../assets/images/icon-close.svg";
import css from "./MenuMobile.module.css";

function MenuHamburger() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const closed = <img className={css.menu} src={HamburgerClosed} alt="menu-closed" />;
  const opened = <img className={css.menu} src={HamburgerOpened} alt="menu-opened" />;

  return (
    <>
      <button onClick={handleToggleMenu}>{showMenu ? opened : closed}</button>
      {showMenu && (
        <div className={css.dropdown}>
          <div>
            <ul>
              <li>
                <Link
                  to="/2022-08-21-bank-landing-page/"
                  className={css.Link}
                  onClick={handleCloseMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/2022-08-21-bank-landing-page/about-us"
                  className={css.Link}
                  onClick={handleCloseMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/2022-08-21-bank-landing-page/contact"
                  className={css.Link}
                  onClick={handleCloseMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/2022-08-21-bank-landing-page/blog"
                  className={css.Link}
                  onClick={handleCloseMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/2022-08-21-bank-landing-page/careers"
                  className={css.Link}
                  onClick={handleCloseMenu}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuHamburger;

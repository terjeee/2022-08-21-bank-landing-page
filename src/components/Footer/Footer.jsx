import { Link } from "react-router-dom";

import ButtonInvite from "../UI/ButtonInvite";

import { ReactComponent as SvgBankLogo } from "../../assets/images/logo.svg";
import svgFacebook from "../../assets/images/icon-facebook.svg";
import svgYoutube from "../../assets/images/icon-youtube.svg";
import svgTwitter from "../../assets/images/icon-twitter.svg";
import svgPinterest from "../../assets/images/icon-pinterest.svg";
import svgInstagram from "../../assets/images/icon-instagram.svg";

import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className="max-width__container">
        <div className={css.wrapper}>
          <div className={css.div01}>
            <SvgBankLogo className={css.logo} />
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src={svgFacebook} alt="icon-facebook" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src={svgYoutube} alt="icon-youtube" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src={svgTwitter} alt="icon-twitter" />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                <img src={svgPinterest} alt="icon-pinterest" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src={svgInstagram} alt="icon-instagram" />
              </a>
            </div>
          </div>
          <div className={css.div02}>
            <div>
              <Link to="/2022-08-21-bank-landing-page/about-us">About Us</Link>
              <Link to="/2022-08-21-bank-landing-page/contact">Contact</Link>
              <Link to="/2022-08-21-bank-landing-page/blog">Blog</Link>
            </div>
            <div>
              <Link to="/2022-08-21-bank-landing-page/careers">Careers</Link>
              <Link to="/2022-08-21-bank-landing-page/support">Support</Link>
              <Link to="/2022-08-21-bank-landing-page/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className={css.div03}>
          <ButtonInvite />
          <h6>&copy; Easybank. All Rights Reserved</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

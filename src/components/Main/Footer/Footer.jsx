import { Link } from 'react-router-dom';

import ButtonInvite from '../../UI/ButtonInvite';

import { ReactComponent as SvgBankLogo } from '../../../assets/images/logo.svg';
import svgFacebook from '../../../assets/images/icon-facebook.svg';
import svgYoutube from '../../../assets/images/icon-youtube.svg';
import svgTwitter from '../../../assets/images/icon-twitter.svg';
import svgPinterest from '../../../assets/images/icon-pinterest.svg';
import svgInstagram from '../../../assets/images/icon-instagram.svg';

import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.div01}>
        <SvgBankLogo className={css.logoyy} />
        <div>
          <a href='www.faceook.com'>
            <img src={svgFacebook} alt='icon-facebook' />
          </a>
          <a href='www.youtube.com'>
            <img src={svgYoutube} alt='icon-youtube' />
          </a>
          <a href='www.twitter.com'>
            <img src={svgTwitter} alt='icon-twitter' />
          </a>
          <a href='www.pinterest.com'>
            <img src={svgPinterest} alt='icon-pinterest' />
          </a>
          <a href='www.instagram.com'>
            <img src={svgInstagram} alt='icon-instagram' />
          </a>
        </div>
      </div>
      <div className={css.div02}>
        <div>
          <Link to='/about-us'>About Us</Link>
          <Link to='/contact'>Conctact</Link>
          <Link to='/blog'>Blog</Link>
        </div>
        <div>
          <Link to='/careers'>Careers</Link>
          <Link to='/support'>Support</Link>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
      <div className={css.div03}>
        <ButtonInvite />
        <h6>&copy; Easybank. All Rights Reserved</h6>
      </div>
    </footer>
  );
}

export default Footer;

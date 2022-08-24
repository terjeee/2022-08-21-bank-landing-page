// import { Routes, Route } from 'react-router-dom';

import MenuMobile from './components/MenuMobile';
import MenuDesktop from './components/MenuDesktop';
import ButtonInvite from '../UI/ButtonInvite';

import BankLogo from '../../assets/images/logo.svg';
import css from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={css.NavBar}>
      <div>
        <img src={BankLogo} alt='logo' />
      </div>
      <div>
        <MenuMobile />
        <MenuDesktop />
      </div>
      <div className={css.ButtonInvite}>
        <ButtonInvite />
      </div>
    </nav>
  );
}

export default NavBar;

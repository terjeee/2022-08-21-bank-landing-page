import BankLogo from '../../assets/images/logo.svg';
import BankHamburger from '../../assets/images/icon-hamburger.svg';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <div className={}>
        <img src={BankLogo} alt='logo' />
      </div>
      <div>
        <img src={BankHamburger} alt='menu' />
      </div>
    </nav>
  );
}

export default Navigation;

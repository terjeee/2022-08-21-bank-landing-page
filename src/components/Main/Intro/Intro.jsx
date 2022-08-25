import ButtonInvite from '../../UI/ButtonInvite';

import Mockups from '../../../assets/images/image-mockups.png';
import css from './Intro.module.css';

function Intro() {
  return (
    <section className={css.intro}>
      <div className={css.div01}>
        <img src={Mockups} alt='mobile phones' />
      </div>
      <div className={css.div02}>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing and much more.
        </p>
        <ButtonInvite />
      </div>
    </section>
  );
}

export default Intro;

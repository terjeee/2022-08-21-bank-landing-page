import OnlineBanking from '../../../assets/images/icon-online.svg';
import Budgeting from '../../../assets/images/icon-budgeting.svg';
import Onboarding from '../../../assets/images/icon-onboarding.svg';
import OpenAPI from '../../../assets/images/icon-api.svg';

import css from './WhyUs.module.css';

function WhyUs() {
  return (
    <section className={css.WhyUs}>
      <div>
        <h3>Why choose Easybank?</h3>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub. Control
          your finances like never before.
        </p>
      </div>
      <div>
        <img src={OnlineBanking} alt='online-banking' />
        <h2>Online Banking</h2>
        <p>
          Our modern web and mobile applications allow your to keep track of your finances
          wherever you are in the world
        </p>
      </div>
      <div>
        <img src={Budgeting} alt='budgeting' />
        <h2>Simple Budgeting</h2>
        <p>
          See exactly where your money goes each month. Receive notifications when you're close
          your hitting limits.
        </p>
      </div>
      <div>
        <img src={Onboarding} alt='fast-onboarding' />
        <h2>Fast Onboarding</h2>
        <p>
          We don't do branches. Open your account in minutes online and start taking control of
          your finances right away.
        </p>
      </div>
      <div>
        <img src={OpenAPI} alt='open-api' />
        <h2>Open API</h2>
        <p>
          Manage your savings, investments, pension, and much more from one account. Tracking
          your money has never been easier.
        </p>
      </div>
    </section>
  );
}

export default WhyUs;

import { Link } from 'react-router-dom';

import css from './ButtonInvite.module.css';

function ButtonInvite() {
  return (
    <Link className={css.ButtonInvite} to='/'>
      Request Invite
    </Link>
  );
}

export default ButtonInvite;

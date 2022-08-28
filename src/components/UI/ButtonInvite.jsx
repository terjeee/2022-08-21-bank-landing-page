import { Link } from 'react-router-dom';

import css from './ButtonInvite.module.css';

function ButtonInvite() {
  const handleClick = () => {
    console.log(':)');
  };

  return (
    <Link className={css.ButtonInvite} onClick={handleClick} to='/invitation'>
      Request Invite
    </Link>
  );
}

export default ButtonInvite;

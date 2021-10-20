import { useContext } from 'react'

import { UserContext } from 'components/UserContext';
import './User.css';

type UserDetailsProps = {
  email: string;
  isLogged: boolean; // props from parent
}

function UserDetails({ email, isLogged }: UserDetailsProps) {
  const context = useContext(UserContext);
  return (
    <div className="ml">
      <h4>User Details</h4>
      <p>E-mail: {email}</p>
      <p><strong>{context.isLogged ? 'Yes' : 'No'}</strong></p>
    </div>
  );
}

export { UserDetails };

import { useContext } from 'react'

import { UserContext } from 'components/UserContext';
import './User.css';

type UserDetailsProps = {
  email: string;
  isLogged: boolean;
}

function UserDetails({ email, isLogged }: UserDetailsProps) {
  const context = useContext(UserContext);
  console.log('context: ', context);
  return (
    <div className="ml">
      <h4>User Details</h4>
      <p>E-mail: {email}</p>
      <p><strong>{isLogged ? 'Yes' : 'No'}</strong></p>
    </div>
  );
}

export { UserDetails };

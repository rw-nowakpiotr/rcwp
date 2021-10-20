import { useContext } from 'react'

import { UserContext } from 'components/UserContext';
import './User.css';

type UserDetailsProps = {
  email: string;
  isLogged: boolean; // props from parent
}

function UserDetails({ email, isLogged }: UserDetailsProps) {
  const context = useContext(UserContext);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    context.setIsLogged((value) => !value);
  }
  return (
    <div className="ml">
      <h4>User Details</h4>
      <p>E-mail: {email}</p>
      <p><strong>{context.isLogged ? 'Yes' : 'No'}</strong></p>
      <button onClick={handleClick}>{context.isLogged ? 'Log out' : 'Log in'}</button>
    </div>
  );
}

export { UserDetails };

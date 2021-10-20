import { useContext } from 'react'

import { UserContext } from 'components/UserContext';

function LoginButton() {
  const context = useContext(UserContext);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    context.setIsLogged((value) => !value);
  }
  return (
    <button onClick={handleClick}>{context.isLogged ? 'Log out' : 'Log in'}</button>
  );
}

export { LoginButton };

import { useUserContext } from 'components/UserContext';

function LoginButton() {
  const context = useUserContext();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    context.setIsLogged((value) => !value);
  }
  return (
    <button onClick={handleClick}>{context.isLogged ? 'Log out' : 'Log in'}</button>
  );
}

export { LoginButton };

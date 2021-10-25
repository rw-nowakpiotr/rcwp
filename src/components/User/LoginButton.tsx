// import { MouseEventHandler, useRef } from 'react';
import { forwardRef, ForwardedRef } from 'react';
import type { MouseEventHandler } from 'react';
import { useUserContext } from 'components/UserContext';

type LoginButtonProps = {
  handleMouseOver: MouseEventHandler<HTMLButtonElement>
}

const  LoginButton = forwardRef(
  ({ handleMouseOver }: LoginButtonProps,
    ref: ForwardedRef<HTMLButtonElement>) => {

    const context = useUserContext();
    // const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
      context.setIsLogged((value) => !value);
    }

    return (
      <button
        ref={ref}
        onMouseOver={handleMouseOver}
        onClick={handleClick}>
          {context.isLogged ? 'Log out' : 'Log in'}
      </button>
    );
});

export { LoginButton };

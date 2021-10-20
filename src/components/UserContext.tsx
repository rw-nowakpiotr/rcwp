import { createContext, SetStateAction } from 'react';
import type { Dispatch } from 'react';

type UserContextProps = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const defaultValues: UserContextProps = {
  isLogged: false,
  setIsLogged: () => null,
}

const UserContext = createContext<UserContextProps>(defaultValues);

const UserProvider = UserContext.Provider; // <Provider>
const UserConsumer = UserContext.Consumer; // <Consumer>

UserContext.displayName = 'UserContext';

export { UserProvider, UserContext, UserConsumer };

import { createContext } from 'react';

type UserContextProps = {
  isLogged: boolean;
}

const defaultValues: UserContextProps = {
  isLogged: false
}

const UserContext = createContext<UserContextProps>(defaultValues);

const UserProvider = UserContext.Provider; // <Provider>
const UserConsumer = UserContext.Consumer; // <Consumer>

UserContext.displayName = 'UserContext';

export { UserProvider, UserContext, UserConsumer };

import { createContext } from 'react';

type UserContextProps = {
  isLogged: boolean;
}

const defaultValues: UserContextProps = {
  isLogged: false
}

const UserContext = createContext<UserContextProps>(defaultValues);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
// UserProvider.displayName = 'UserProvider';

export { UserProvider, UserContext, UserConsumer };

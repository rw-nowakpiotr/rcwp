import { UserDetails } from './UserDetails';

import './User.css';

type UserProfileProps = {
  email: string;
  isLogged: boolean;
}

function UserProfile({ email, isLogged }: UserProfileProps) {
  return (
    <div className="ml">
      <h3>User Profile</h3>
      <UserDetails
        email={email}
        isLogged={isLogged}
      />
    </div>
  );
}

export { UserProfile };

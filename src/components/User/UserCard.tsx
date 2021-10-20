import { UserProfile } from './UserProfile';

import './User.css';

type UserCardProps = {
  email: string;
  isLogged: boolean;
}

function UserCard({ email, isLogged }: UserCardProps) {
  return (
    <div className="ml">
      <h2>User Card</h2>
      <UserProfile
        email={email}
        isLogged={isLogged}
      />
    </div>
  );
}

export { UserCard };

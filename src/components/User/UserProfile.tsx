import { UserDetails } from './UserDetails';

type UserProfileProps = {
  email: string;
}

function UserProfile({ email }: UserProfileProps) {
  return (
    <div>
      <h3>User Profile</h3>
      <UserDetails email={email} />
    </div>
  );
}

export { UserProfile };

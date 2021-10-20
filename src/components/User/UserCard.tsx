import { UserProfile } from './UserProfile';

type UserCardProps = {
  email: string;
}

function UserCard({ email }: UserCardProps) {
  return (
    <div>
      <h2>User Card</h2>
      <UserProfile email={email} />
    </div>
  );
}

export { UserCard };

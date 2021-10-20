import './User.css';

type UserDetailsProps = {
  email: string;
  isLogged: boolean;
}

function UserDetails({ email, isLogged }: UserDetailsProps) {
  return (
    <div className="ml">
      <h4>User Details</h4>
      <p>E-mail: {email}</p>
      <p><strong>{isLogged ? 'Yes' : 'No'}</strong></p>
    </div>
  );
}

export { UserDetails };

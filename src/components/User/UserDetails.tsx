type UserDetailsProps = {
  email: string;
}

function UserDetails({ email }: UserDetailsProps) {
  return (
    <div>
      <h4>User Details</h4>
      <p>E-mail: {email}</p>
    </div>
  );
}

export { UserDetails };

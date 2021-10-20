import { useState, useEffect } from 'react';

type RegistrationFormProps = {
  defaultEmail: string;
}


function RegistrationForm({ defaultEmail }: RegistrationFormProps) {
  const [email, setEmail] = useState<string>(defaultEmail);
  const [password, setPassword] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  useEffect(() => {
    if (password?.toLocaleLowerCase() === 'brzydkieslowo') {
      setPassword('***');
      setIsValid(false);
    } else {
      console.log('Haslo ok');
    }
  }, [password]);
  return (
    <div>
      <div>
        E-mail: {email}, Password: {password}
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="text" onChange={(event) => setPassword(event.target.value)} />
      </div>
    </div>
  );
}

export { RegistrationForm };

import { useState, useEffect } from 'react';

type RegistrationFormProps = {
  defaultEmail: string;
}


function RegistrationForm({ defaultEmail }: RegistrationFormProps) {
  const [email, setEmail] = useState<string>(defaultEmail);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const passwordDefaultValue = "razdwatrzy";
  useEffect(() => {
    if (password?.toLocaleLowerCase() === 'brzydkieslowo') {
      setPassword('***');
      setIsValid(false);
    } else {
      console.log('Haslo ok');
    }
    // if (name === "") {

    // }
  // }, [password, name]); // componentDidUpdate
  }, [password]); // componentDidUpdate
  useEffect(() => {
    if (!email.includes('@')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);
  useEffect(() => {
    console.log("Name value is: ", name);
    if (name === "aaa") {
      // bbb
      setName("bbb")
    }
  }, [name]);

  return (
    <div>
      <div>
        <p>E-mail: {email}, Password: {password}</p>
        <p>Name: {name}</p>
        <hr />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && <p style={{ color: 'red' }}>Invalid e-mail</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" defaultValue={passwordDefaultValue} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          defaultValue=""
          onChange={(event) => setName(event.target.value)}
        />
        {}
      </div>
    </div>
  );
}

export { RegistrationForm };

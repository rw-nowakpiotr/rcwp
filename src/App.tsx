// import { Button, BGColors } from './Button';
// import { Counter } from 'components/Counter';
// import { Generator } from 'components/Generator';
// import { RegistrationForm } from 'components/RegistrationForm';
import React, { useState } from 'react';
import { Hello } from 'components/Hello';
import { Container } from 'components/Container';
import { Main } from 'components/Main';
import { UserCard } from 'components/User/UserCard';
import { UserProvider } from 'components/UserContext';

function App() {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number>(0);
  const [isLogged, seIsLogged] = useState<boolean>(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // event.currentTarget
  }
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setName(event.currentTarget.value);
  // };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAge((_age) => _age + 1);
  }
  const loginHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    seIsLogged((value) => !value);
  }

  return (
    <UserProvider value={ { isLogged: false }}>
      <Container>
        {/* <Counter />
        <Generator />
        <RegistrationForm defaultEmail="test@test.pl" /> */}
        <Container>
          <input type="text" onChange={handleInputChange} />
          <button onClick={handleClick}>+</button>
        </Container>
        <Container>
          <Container>
            <Main>
              <button onClick={loginHandler}>{isLogged ? 'Log out' : 'Log in'}</button>
              <UserCard
                email="patryk.omiotek@gmail.com"
                isLogged={isLogged}
              />
              {/* {isLogged ? <Hello name={name || ""} age={age} /> : null} */}
              {isLogged && <Hello name={name || ""} age={age} />}
            </Main>
          </Container>
        </Container>
      </Container>
    </UserProvider>
  );
}

export default App;

// import { Button, BGColors } from './Button';
// import { Counter } from 'components/Counter';
// import { Generator } from 'components/Generator';
// import { RegistrationForm } from 'components/RegistrationForm';
import React, { useState } from 'react';
import { Hello } from 'components/Hello';

function App() {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number>(0);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // event.currentTarget
  }
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setName(event.currentTarget.value);
  // };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAge((_age) => _age + 1);
  }

  return (
    <div className="App">
      {/* <Counter />
      <Generator />
      <RegistrationForm defaultEmail="test@test.pl" /> */}
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleClick}>+</button>
      <Hello name={name || ""} age={age} />
    </div>
  );
}

export default App;

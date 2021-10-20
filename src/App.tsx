// import { Button, BGColors } from './Button';
import { Counter } from 'components/Counter';
import { Generator } from 'components/Generator';
import { RegistrationForm } from 'components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <Generator />
      <RegistrationForm defaultEmail="test@test.pl" />
    </div>
  );
}

export default App;

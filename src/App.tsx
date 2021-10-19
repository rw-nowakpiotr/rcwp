// import { Button, BGColors } from './Button/Button';
import { Button } from './Button/Button';

function App() {
  return (
    <div className="App">
      {/* <Button label="Hello!!!" bgColor={BGColors.alizarin} />
      <Button label="Hello!!!" bgColor={BGColors.emerald} /> */}
      <Button label="Hello!!!" bgColor="orange" />
      <Button label="Hello!!!" bgColor="alizarin" />
    </div>
  );
}

export default App;

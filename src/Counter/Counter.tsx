import { Text } from 'Text/Text';

function Counter() {
  let value = 1;
  const handleClick = () => {
    value++;
    console.log(value);
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Text>{value}</Text>
    </div>
  );
}

export { Counter };

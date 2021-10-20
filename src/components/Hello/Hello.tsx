type HelloProps = {
  readonly name: string;
  readonly age: number;
  readonly isAlive?: boolean;
}

// <Hello name="Patryk" age={36} isAlive />

const styles = {
  border: '#000 1px solid',
  margin: 5,
}

function Hello(props: HelloProps) {
  const { name, age } = props;
  return (
    <div style={styles}>
      <h1>I am Hello component</h1>
      <div>
        <p>Hello, my name is {name}</p>
        <p>I'am {age}</p>
      </div>
      <p>Another paragraph</p>
    </div>
  );
}

export { Hello };
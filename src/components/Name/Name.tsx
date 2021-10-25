import { useState, useEffect } from 'react';

function Name() {
  // const [name, setName ] = useSt ate<string | null>(null);
  const [name, setName ] = useState<string | null>(() => 'Patryk');

  // setName(() => 'Patryk'); 🙈
  useEffect(() => {
    setName('Patryk222');
  }, []);

  return (
    <div>
      <h1>I am Name component</h1>
      <div>
        <p>Hello, my name is {name}</p>
      </div>
    </div>
  );
}

export { Name };

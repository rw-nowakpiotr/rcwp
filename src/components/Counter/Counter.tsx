import { useState, useEffect } from 'react';
import { Text } from 'components/Text/Text';

function Counter() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    // effect instructions
    const clock = setInterval(() => {
      setValue(value => value + 1);
    }, 1_000);

    return () => {
      // after unmountig
      clearInterval(clock);
    }

  }, []); // [] - array of dependecies

  return (
    <div>
      <Text>{value}</Text>
    </div>
  );
}

export { Counter };

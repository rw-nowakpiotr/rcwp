import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Text } from 'components/Text';
import { Button } from 'components/Button';

function Generator() {
  const [value, setValue] = useState<string>(uuidv4());
  const handleClick = (event: React.MouseEvent) => {
    console.log(event);
    // value
    setValue(uuidv4());
  }
  return (
    <div>
      {/* <button onClick={handleClick} /> */}
      <Button
        label="Refresh"
        bgColor="orange"
        onClick={handleClick}
      />
      <Text>{value}</Text>
    </div>
  );
}

export { Generator };

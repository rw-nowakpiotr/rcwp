import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from 'components/Text';

function Generator() {
  const [value] = useState<string>(uuidv4());

  return (
    <div>
      <Text>{value}</Text>
    </div>
  );
}

export { Generator };

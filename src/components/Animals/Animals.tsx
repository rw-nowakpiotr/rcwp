// import { Fragment } from 'react';

import type { MouseEventHandler } from "react";

const data = [
  '🐕 dog',
  '🐈 cat',
  '🐐 goat',
  '🐹 hamster'
];

function Animals() {
  const handleRemove = (index: number) => {
    console.log('`My index is: ', index);
  }
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div>{elem} <span onClick={() => handleRemove(index)}>⛔</span></div>
        );
      })}
    </>
  );
}

export { Animals };

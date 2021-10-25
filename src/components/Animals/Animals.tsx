// import { Fragment } from 'react';
// import type { MouseEventHandler } from "react";
import { useState } from 'react';

const data = [
  '🐕 dog',
  '🐈 cat',
  '🐐 goat',
  '🐹 hamster'
];

function Animals() {
  const [animals, setAnimals] = useState<string[]>(data);
  const handleRemove = (index: number) => {
    console.log('`My index is: ', index);
  }
  // const handleRemove: MouseEventHandler<HTMLSpanElement> = (event) => {
  //   console.log(event.currentTarget.dataset);
  //   // console.log('`My index is: ', event.target.dataset.index);
  // }
  // const handleRemove = (index: number) => (event: MouseEvent) => {
  //   console.log('`My index is: ', index);
  // }
  return (
    <>
      {animals.map((elem, index) => {
        return (
          <div>
            {elem}{' '}
            <span
              data-index={index}
              onClick={() => handleRemove(index)}>⛔</span>
            </div>
        );
      })}
    </>
  );
}

export { Animals };

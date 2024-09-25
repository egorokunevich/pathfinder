'use client';

import useControls from '@/src/hooks/useControls';

const Controls = () => {
  const { moveForward, moveBack, turnLeft, turnRight } = useControls();

  return (
    <div className="flex gap-2 content-center justify-center flex-wrap border-2 border-gray-200 w-64 p-5">
      <button
        className="border-2 border-black p-2 w-20 block"
        onClick={moveForward}
      >
        Forward
      </button>
      <div className="flex gap-2">
        <button
          className="border-2 border-black p-2  w-14"
          onClick={() => {
            turnLeft();
          }}
        >
          Left
        </button>
        <button className="border-2 border-black p-2  w-14" onClick={moveBack}>
          Back
        </button>
        <button
          className="border-2 border-black p-2  w-14"
          onClick={() => {
            turnRight();
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Controls;

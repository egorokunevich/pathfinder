'use client';

import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';
import { useCoordinatesStore } from '@/src/store';

const Controls = () => {
  const { move, rotate } = useCoordinatesStore();

  return (
    <div className="flex gap-2 content-center justify-center flex-wrap border-2 border-gray-200 w-64 p-5">
      <button
        className="border-2 border-black p-2 w-20 block"
        onClick={() => {
          move(GoDirection.Forward);
        }}
      >
        Forward
      </button>
      <div className="flex gap-2">
        <button
          className="border-2 border-black p-2  w-14"
          onClick={() => {
            rotate(TurnDirection.Left);
          }}
        >
          Left
        </button>
        <button
          className="border-2 border-black p-2  w-14"
          onClick={() => {
            move(GoDirection.Back);
          }}
        >
          Back
        </button>
        <button
          className="border-2 border-black p-2  w-14"
          onClick={() => {
            rotate(TurnDirection.Right);
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Controls;

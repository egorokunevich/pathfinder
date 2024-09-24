'use client';

import { Dispatch, SetStateAction } from 'react';
import { Coordinates } from '../Game/Game';
import useMove, { MoveDirections } from '@/src/hooks/useMove';

interface ControlsProps {
  setCoordinates: Dispatch<SetStateAction<Coordinates>>;
}

const Controls = ({ setCoordinates }: ControlsProps) => {
  const move = useMove();

  const moveUp = () => {
    const newCoordinates = move(MoveDirections.Up);
    setCoordinates(newCoordinates);
  };

  const moveDown = () => {
    const newCoordinates = move(MoveDirections.Down);
    setCoordinates(newCoordinates);
  };

  const moveLeft = () => {
    const newCoordinates = move(MoveDirections.Left);
    setCoordinates(newCoordinates);
  };

  const moveRight = () => {
    const newCoordinates = move(MoveDirections.Right);
    setCoordinates(newCoordinates);
  };

  return (
    <div className="flex gap-2 content-center justify-center flex-wrap border-2 border-gray-200 w-64 p-5">
      <button
        className="border-2 border-black p-2 max-w-14 w-14 block"
        onClick={moveUp}
      >
        Up
      </button>
      <div className="flex gap-2">
        <button
          className="border-2 border-black p-2  max-w-14 w-14"
          onClick={moveLeft}
        >
          Left
        </button>
        <button
          className="border-2 border-black p-2  max-w-14 w-14"
          onClick={moveDown}
        >
          Down
        </button>
        <button
          className="border-2 border-black p-2  max-w-14 w-14"
          onClick={moveRight}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Controls;

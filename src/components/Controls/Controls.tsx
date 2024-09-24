'use client';

import { Dispatch, SetStateAction } from 'react';
import { Coordinates } from '../Game/Game';
import useMove, { GoDirections } from '@/src/hooks/useMove';
import useTurn, { TurnDirection } from '@/src/hooks/useTurn';
import { PlayerViewDirection } from '@/src/context/ViewDirectionContext/ViewDirectionContext';

interface ControlsProps {
  setCoordinates: Dispatch<SetStateAction<Coordinates>>;
  setPlayerViewDirection: Dispatch<SetStateAction<PlayerViewDirection>>;
}

const Controls = ({
  setCoordinates,
  setPlayerViewDirection,
}: ControlsProps) => {
  const move = useMove();
  const turn = useTurn();

  const moveForward = () => {
    const newCoordinates = move(GoDirections.Forward);
    setCoordinates(newCoordinates);
  };

  const moveBack = () => {
    const newCoordinates = move(GoDirections.Back);
    setCoordinates(newCoordinates);
  };

  const turnLeft = () => {
    const newViewDirection = turn(TurnDirection.Left);
    setPlayerViewDirection(newViewDirection);
  };

  const turnRight = () => {
    const newViewDirection = turn(TurnDirection.Right);
    setPlayerViewDirection(newViewDirection);
  };

  return (
    <div className="flex gap-2 content-center justify-center flex-wrap border-2 border-gray-200 w-64 p-5">
      <button
        className="border-2 border-black p-2 w-20 block"
        onClick={moveForward}
      >
        Forward
      </button>
      <div className="flex gap-2">
        <button className="border-2 border-black p-2  w-14" onClick={turnLeft}>
          Left
        </button>
        <button className="border-2 border-black p-2  w-14" onClick={moveBack}>
          Back
        </button>
        <button className="border-2 border-black p-2  w-14" onClick={turnRight}>
          Right
        </button>
      </div>
    </div>
  );
};

export default Controls;

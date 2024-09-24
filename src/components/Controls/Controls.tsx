"use client";

import useMove, { GoDirections } from "@/src/hooks/useMove";
import useTurn, { TurnDirection } from "@/src/hooks/useTurn";
import { useCoordinatesStore } from "@/src/store";

const Controls = () => {
  const move = useMove();
  const turn = useTurn();
  const { setCoordinates, setView } = useCoordinatesStore();

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
    setView(newViewDirection);
  };

  const turnRight = () => {
    const newViewDirection = turn(TurnDirection.Right);
    setView(newViewDirection);
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

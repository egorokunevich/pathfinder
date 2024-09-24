"use client";

import { FIELD_SIZE } from "../components/Game/Game";
import { PlayerViewDirection, useCoordinatesStore } from "../store";

export enum GoDirections {
  Forward = "forward",
  Back = "back",
  TurnLeft = "rutn-left",
  TurnRight = "turn-right",
}

const useMove = () => {
  const { coordinates, view } = useCoordinatesStore();

  return (direction: GoDirections) => {
    if (
      (direction === GoDirections.Forward && view === PlayerViewDirection.Up) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Down)
    ) {
      const newY = coordinates.y - 1 < 0 ? coordinates.y : coordinates.y - 1;
      return { ...coordinates, y: newY };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Down) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Up)
    ) {
      const newY =
        coordinates.y + 1 > FIELD_SIZE ? coordinates.y : coordinates.y + 1;
      return { ...coordinates, y: newY };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Left) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Right)
    ) {
      const newX = coordinates.x - 1 < 0 ? coordinates.x : coordinates.x - 1;
      return { ...coordinates, x: newX };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Right) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Left)
    ) {
      const newX =
        coordinates.x + 1 > FIELD_SIZE ? coordinates.x : coordinates.x + 1;
      return { ...coordinates, x: newX };
    }
    return coordinates;
  };
};

export default useMove;

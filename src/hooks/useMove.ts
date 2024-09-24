'use client';

import { useContext } from 'react';
import CoordinateContext from '../context/CoordinatesContext/CoordinatesContext';
import { FIELD_SIZE } from '../components/Game/Game';
import ViewDirectionContext, {
  PlayerViewDirection,
} from '../context/ViewDirectionContext/ViewDirectionContext';

export enum GoDirections {
  Forward = 'forward',
  Back = 'back',
  TurnLeft = 'rutn-left',
  TurnRight = 'turn-right',
}

const useMove = () => {
  const view = useContext(ViewDirectionContext);
  const currentCoordinates = useContext(CoordinateContext);
  return (direction: GoDirections) => {
    if (
      (direction === GoDirections.Forward && view === PlayerViewDirection.Up) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Down)
    ) {
      const newY =
        currentCoordinates.y - 1 < 0
          ? currentCoordinates.y
          : currentCoordinates.y - 1;
      return { ...currentCoordinates, y: newY };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Down) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Up)
    ) {
      const newY =
        currentCoordinates.y + 1 > FIELD_SIZE
          ? currentCoordinates.y
          : currentCoordinates.y + 1;
      return { ...currentCoordinates, y: newY };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Left) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Right)
    ) {
      const newX =
        currentCoordinates.x - 1 < 0
          ? currentCoordinates.x
          : currentCoordinates.x - 1;
      return { ...currentCoordinates, x: newX };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Right) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Left)
    ) {
      const newX =
        currentCoordinates.x + 1 > FIELD_SIZE
          ? currentCoordinates.x
          : currentCoordinates.x + 1;
      return { ...currentCoordinates, x: newX };
    }
    return currentCoordinates;
  };
};

export default useMove;

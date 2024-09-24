'use client';

import { useContext } from 'react';
import CoordinateContext from '../context/CoordinatesContext/CoordinatesContext';
import { FIELD_SIZE } from '../components/Game/Game';

export enum MoveDirections {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

const useMove = () => {
  const currentCoordinates = useContext(CoordinateContext);
  return (direction: MoveDirections) => {
    if (direction === MoveDirections.Up) {
      const newY =
        currentCoordinates.y - 1 < 0
          ? currentCoordinates.y
          : currentCoordinates.y - 1;
      return { ...currentCoordinates, y: newY };
    }
    if (direction === MoveDirections.Down) {
      const newY =
        currentCoordinates.y + 1 > FIELD_SIZE
          ? currentCoordinates.y
          : currentCoordinates.y + 1;
      return { ...currentCoordinates, y: newY };
    }
    if (direction === MoveDirections.Left) {
      const newX =
        currentCoordinates.x - 1 < 0
          ? currentCoordinates.x
          : currentCoordinates.x - 1;
      return { ...currentCoordinates, x: newX };
    }
    if (direction === MoveDirections.Right) {
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

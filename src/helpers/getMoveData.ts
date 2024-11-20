import { Coordinates } from '@/src/components/Game/Game';
import { CellTypes } from '@/src/enums/CellTypes';
import { GoDirection } from '@/src/enums/GoDirection';
import { PlayerViewDirection } from '@/src/enums/PlayerViewDirection';
import { Level } from '@/src/levels/levels';

export interface MoveData {
  win: boolean;
  fail: boolean;
  shouldMove: boolean;
  newCoordinates: Coordinates;
}

interface GetMoveDataProps {
  direction: GoDirection;
  coordinates: Coordinates;
  rotationDegree: number;
  level: Level;
}

const getViewByRotationDegree = (
  rotationDegree: number,
): PlayerViewDirection => {
  switch (rotationDegree % 360) {
    case 0:
      // case -0:
      return PlayerViewDirection.Up;
    case 90:
    case -270:
      return PlayerViewDirection.Right;
    case 180:
    case -180:
      return PlayerViewDirection.Down;
    case 270:
    case -90:
      return PlayerViewDirection.Left;
    default:
      return null as never;
  }
};

const getNewCoordinates = (
  coordinates: Coordinates,
  rotationDegree: number,
  direction: GoDirection,
  fieldSize: number,
) => {
  const view = getViewByRotationDegree(rotationDegree);
  // Should move Up
  if (
    (direction === GoDirection.Forward && view === PlayerViewDirection.Up) ||
    (direction === GoDirection.Back && view === PlayerViewDirection.Down)
  ) {
    const newY = coordinates.y - 1 < 0 ? coordinates.y : coordinates.y - 1;
    return { ...coordinates, y: newY };
  }
  // Should move Down
  if (
    (direction === GoDirection.Forward && view === PlayerViewDirection.Down) ||
    (direction === GoDirection.Back && view === PlayerViewDirection.Up)
  ) {
    const newY =
      coordinates.y + 1 > fieldSize ? coordinates.y : coordinates.y + 1;
    return { ...coordinates, y: newY };
  }
  // Should move Left
  if (
    (direction === GoDirection.Forward && view === PlayerViewDirection.Left) ||
    (direction === GoDirection.Back && view === PlayerViewDirection.Right)
  ) {
    const newX = coordinates.x - 1 < 0 ? coordinates.x : coordinates.x - 1;
    return { ...coordinates, x: newX };
  }
  // Should move Right
  if (
    (direction === GoDirection.Forward && view === PlayerViewDirection.Right) ||
    (direction === GoDirection.Back && view === PlayerViewDirection.Left)
  ) {
    const newX =
      coordinates.x + 1 > fieldSize ? coordinates.x : coordinates.x + 1;
    return { ...coordinates, x: newX };
  }
  return coordinates;
};

// This function handles winning & losing conditions, movement possibility.
// Returns an object with these properties.
const getMoveData = ({
  direction,
  coordinates,
  rotationDegree,
  level,
}: GetMoveDataProps) => {
  const moveData: MoveData = {
    win: false,
    fail: false,
    shouldMove: false,
    newCoordinates: level.initialCoordinates,
  };

  const fieldSize = level.field.length - 1;

  const newCoordinates = getNewCoordinates(
    coordinates,
    rotationDegree,
    direction,
    fieldSize,
  );

  moveData.newCoordinates = newCoordinates;

  const cell = level.field[newCoordinates.y][newCoordinates.x];

  switch (cell) {
    case CellTypes.Wall:
      // Player shouldn't move
      break;
    case CellTypes.Goal:
      // Winning condition
      moveData.win = true;
      moveData.shouldMove = true;
      // console.log('win');
      break;
    case CellTypes.Lava:
      // Losing condition
      moveData.fail = true;
      moveData.shouldMove = true;
      // console.log('fail');
      break;
    default:
      // Player should move
      moveData.shouldMove = true;
  }

  return moveData;
};

export default getMoveData;

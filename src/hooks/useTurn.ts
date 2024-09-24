'use client';

import { useContext } from 'react';
import ViewDirectionContext, {
  PlayerViewDirection,
} from '../context/ViewDirectionContext/ViewDirectionContext';

export enum TurnDirection {
  Left = 'left',
  Right = 'right',
}

const useTurn = () => {
  const view = useContext(ViewDirectionContext);
  return (turnDirection: TurnDirection) => {
    if (
      (view === PlayerViewDirection.Right &&
        turnDirection === TurnDirection.Left) ||
      (view === PlayerViewDirection.Left &&
        turnDirection === TurnDirection.Right)
    ) {
      return PlayerViewDirection.Up;
    }
    if (
      (view === PlayerViewDirection.Right &&
        turnDirection === TurnDirection.Right) ||
      (view === PlayerViewDirection.Left &&
        turnDirection === TurnDirection.Left)
    ) {
      return PlayerViewDirection.Down;
    }
    if (
      (view === PlayerViewDirection.Up &&
        turnDirection === TurnDirection.Left) ||
      (view === PlayerViewDirection.Down &&
        turnDirection === TurnDirection.Right)
    ) {
      return PlayerViewDirection.Left;
    }
    if (
      (view === PlayerViewDirection.Up &&
        turnDirection === TurnDirection.Right) ||
      (view === PlayerViewDirection.Down &&
        turnDirection === TurnDirection.Left)
    ) {
      return PlayerViewDirection.Right;
    }
    return view;
  };
};

export default useTurn;

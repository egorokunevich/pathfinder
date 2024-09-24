import { createContext } from 'react';

export enum PlayerViewDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

const ViewDirectionContext = createContext<PlayerViewDirection>(
  PlayerViewDirection.Up
);

export default ViewDirectionContext;

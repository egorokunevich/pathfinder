import { Coordinates } from '@/src/components/Game/Game';
import { CellTypes } from '@/src/enums/CellTypes';
import { GoDirection } from '@/src/enums/GoDirection';
import { PlayerViewDirection } from '@/src/enums/PlayerViewDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';

export type Field = string[][];

export interface Level {
  id: number; // Level's id
  field: Field; // Field matrix
  initialCoordinates: Coordinates; // Player's initial coordinates on the field
  initialViewDirection: PlayerViewDirection; // Player's initial view direction
  actions: (GoDirection | TurnDirection)[]; // List of available actions
}

// Using short variables to keep field matrix human readable
const w = CellTypes.Wall;
const g = CellTypes.Goal;
const l = CellTypes.Lava;
const _ = CellTypes.Empty;

export const levels: Level[] = [
  {
    id: 0,
    field: [
      [_, _, _, _, _],
      [w, w, _, _, _],
      [_, w, _, _, _],
      [_, _, _, _, _],
      [_, _, w, _, _],
    ],
    initialCoordinates: { x: 0, y: 0 },
    initialViewDirection: PlayerViewDirection.Right,
    actions: [
      TurnDirection.Left,
      TurnDirection.Right,
      GoDirection.Forward,
      GoDirection.Forward,
      GoDirection.Back,
      GoDirection.Forward,
    ],
  },
  {
    id: 1,
    field: [
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, _, _, _, _],
      [_, w, _, w, _],
      [l, w, w, w, g],
    ],
    initialCoordinates: { x: 2, y: 3 },
    initialViewDirection: PlayerViewDirection.Down,
    actions: [
      GoDirection.Forward,
      GoDirection.Back,
      GoDirection.Forward,
      TurnDirection.Right,
      GoDirection.Forward,
      TurnDirection.Left,
      GoDirection.Forward,
    ],
  },
];

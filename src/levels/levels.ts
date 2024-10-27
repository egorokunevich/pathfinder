import { Coordinates } from '@/src/components/Game/Game';
import { PlayerViewDirection } from '@/src/enums/PlayerViewDirection';

export type Field = string[][];

export interface Level {
  id: number;
  field: Field;
  initialCoordinates: Coordinates;
  initialViewDirection: PlayerViewDirection;
}

export const levels: Level[] = [
  {
    id: 0,
    field: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ],
    initialCoordinates: { x: 0, y: 0 },
    initialViewDirection: PlayerViewDirection.Right,
  },
  {
    id: 1,
    field: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
    ],
    initialCoordinates: { x: 1, y: 1 },
    initialViewDirection: PlayerViewDirection.Right,
  },
];

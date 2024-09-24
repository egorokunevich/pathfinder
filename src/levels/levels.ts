import { Coordinates } from "../components/Game/Game";
import { PlayerViewDirection } from "../store";

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
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    initialCoordinates: { x: 0, y: 0 },
    initialViewDirection: PlayerViewDirection.Up,
  },
  {
    id: 1,
    field: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    initialCoordinates: { x: 1, y: 1 },
    initialViewDirection: PlayerViewDirection.Right,
  },
];

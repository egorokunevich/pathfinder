import { create } from "zustand";
import { Coordinates } from "../components/Game/Game";

export enum PlayerViewDirection {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

type CoordinatesStore = {
  coordinates: Coordinates;
  setCoordinates: (newCoordinates: Coordinates) => void;
  view: PlayerViewDirection;
  setView: (newView: PlayerViewDirection) => void;
};

const useCoordinatesStore = create<CoordinatesStore>()((set) => ({
  coordinates: { x: 0, y: 0 },
  setCoordinates: (newCoordinates) =>
    set(() => ({ coordinates: newCoordinates })),
  view: PlayerViewDirection.Up,
  setView: (newView) => set(() => ({ view: newView })),
}));

export { useCoordinatesStore };

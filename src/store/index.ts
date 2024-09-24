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
  rotationDegree: number;
  setRotationDegree: (newDegree: number) => void;
  rotateRight: () => void;
  rotateLeft: () => void;
};

const useCoordinatesStore = create<CoordinatesStore>()((set) => ({
  coordinates: { x: 0, y: 0 },
  setCoordinates: (newCoordinates) =>
    set(() => ({ coordinates: newCoordinates })),
  view: PlayerViewDirection.Up,
  setView: (newView) => set(() => ({ view: newView })),
  rotationDegree: 0,
  setRotationDegree: (newDegree) => set(() => ({ rotationDegree: newDegree })),
  rotateRight: () =>
    set((state) => ({ rotationDegree: state.rotationDegree + 90 })),
  rotateLeft: () =>
    set((state) => ({ rotationDegree: state.rotationDegree - 90 })),
}));

export { useCoordinatesStore };

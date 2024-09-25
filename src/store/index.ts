import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Coordinates } from "../components/Game/Game";
import { StoredAction } from "../components/Action/Action";
// import { TurnDirection, GoDirections } from "../hooks/useControls";
// import Action from "../components/Action/Action";

export enum PlayerViewDirection {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

interface CoordinatesStore {
  coordinates: Coordinates;
  setCoordinates: (newCoordinates: Coordinates) => void;
  view: PlayerViewDirection;
  setView: (newView: PlayerViewDirection) => void;
  rotationDegree: number;
  setRotationDegree: (newDegree: number) => void;
  rotateRight: () => void;
  rotateLeft: () => void;
}

// type Action = TurnDirection | GoDirections;

interface ActionStore {
  selectedActions: StoredAction[];
  currentActions: StoredAction[];
  toggleSelectedActions: (action: StoredAction) => void;
  setCurrentActions: (action: StoredAction[]) => void;
}

const useCoordinatesStore = create<CoordinatesStore>()(
  devtools((set) => ({
    coordinates: { x: 0, y: 0 },
    setCoordinates: (newCoordinates) =>
      set(() => ({ coordinates: newCoordinates })),
    view: PlayerViewDirection.Up,
    setView: (newView) => set(() => ({ view: newView })),
    rotationDegree: 0,
    setRotationDegree: (newDegree) =>
      set(() => ({ rotationDegree: newDegree })),
    rotateRight: () =>
      set((state) => ({ rotationDegree: state.rotationDegree + 90 })),
    rotateLeft: () =>
      set((state) => ({ rotationDegree: state.rotationDegree - 90 })),
  }))
);

const useActionStore = create<ActionStore>()(
  devtools((set) => ({
    selectedActions: [],
    currentActions: [],
    toggleSelectedActions: (action) =>
      set((state) => {
        const isSelected = !!state.selectedActions.find(
          (item) => item.id === action.id
        );

        if (isSelected) {
          console.log(
            state.selectedActions.filter((item) => item.id !== action.id)
          );
          return {
            selectedActions: state.selectedActions.filter(
              (item) => item.id !== action.id
            ),
          };
        } else {
          state.selectedActions.push(action);
        }
        console.log(state.selectedActions);
        return { selectedActions: state.selectedActions };
      }),
    setCurrentActions: (actions) => set({ currentActions: actions }),
  }))
);

export { useCoordinatesStore, useActionStore };

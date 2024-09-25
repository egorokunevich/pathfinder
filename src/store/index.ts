import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StoredAction } from '@/src/components/Action/Action';
import { Coordinates } from '@/src/components/Game/Game';

export enum PlayerViewDirection {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
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

interface ActionStore {
  selectedActions: StoredAction[];
  unselectedActions: StoredAction[];
  currentActions: StoredAction[];
  toggleSelectedActions: (action: StoredAction) => void;
  setUnselectedActions: (action: StoredAction[]) => void;
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
    unselectedActions: [],
    currentActions: [],
    toggleSelectedActions: (action) =>
      set((state) => {
        const isSelected = !!state.selectedActions.find(
          (item) => item.id === action.id
        );

        if (isSelected) {
          state.unselectedActions.push(action);
          return {
            selectedActions: state.selectedActions.filter(
              (item) => item.id !== action.id
            ),
          };
        } else {
          state.selectedActions.push(action);
          return {
            unselectedActions: state.unselectedActions.filter(
              (item) => item.id !== action.id
            ),
          };
        }
      }),
    setUnselectedActions: (actions) => set({ unselectedActions: actions }),
  }))
);

export { useCoordinatesStore, useActionStore };

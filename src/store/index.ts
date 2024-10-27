import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StoredAction } from '@/src/components/Action/Action';
import { FIELD_SIZE } from '@/src/components/Field/Field';
import { Coordinates } from '@/src/components/Game/Game';
import { GoDirection } from '@/src/enums/GoDirection';
import { PlayerViewDirection } from '@/src/enums/PlayerViewDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';

interface CoordinatesStore {
  coordinates: Coordinates;
  setCoordinates: (newCoordinates: Coordinates) => void;
  rotationDegree: number;
  setRotationDegree: (newDegree: number) => void;
  move: (direction: GoDirection) => void;
  rotate: (turnDirection: TurnDirection) => void;
}

interface ActionStore {
  selectedActions: StoredAction[];
  unselectedActions: StoredAction[];
  currentActions: StoredAction[];
  toggleSelectedActions: (action: StoredAction) => void;
  setSelectedActions: (action: StoredAction[]) => void;
  setUnselectedActions: (action: StoredAction[]) => void;
}

const getViewByRotationDegree = (
  rotationDegree: number
): PlayerViewDirection => {
  switch (rotationDegree % 360) {
    case 0:
    case -0:
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
  direction: GoDirection
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
      coordinates.y + 1 > FIELD_SIZE ? coordinates.y : coordinates.y + 1;
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
      coordinates.x + 1 > FIELD_SIZE ? coordinates.x : coordinates.x + 1;
    return { ...coordinates, x: newX };
  }
  return coordinates;
};

const useCoordinatesStore = create<CoordinatesStore>()(
  devtools((set, getState) => ({
    coordinates: { x: 0, y: 0 },
    setCoordinates: (newCoordinates) =>
      set(() => ({ coordinates: newCoordinates })),
    rotationDegree: 0,
    setRotationDegree: (newDegree) =>
      set(() => ({ rotationDegree: newDegree })),
    move: (direction: GoDirection) => {
      const { coordinates, rotationDegree } = getState();
      const newCoordinates = getNewCoordinates(
        coordinates,
        rotationDegree,
        direction
      );
      set(() => ({ coordinates: newCoordinates }));
    },
    rotate: (turnDirection: TurnDirection) => {
      set((state) => ({
        rotationDegree:
          turnDirection === TurnDirection.Right
            ? state.rotationDegree + 90
            : state.rotationDegree - 90,
      }));
    },
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
    setSelectedActions: (actions) => set({ selectedActions: actions }),
    setUnselectedActions: (actions) => set({ unselectedActions: actions }),
  }))
);

export { useCoordinatesStore, useActionStore };

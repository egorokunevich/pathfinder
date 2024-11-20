import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Coordinates } from '@/src/components/Game/Game';
import { GoDirection } from '@/src/enums/GoDirection';
import { PlayerViewDirection } from '@/src/enums/PlayerViewDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';
import { Level, levels } from '@/src/levels/levels';
import StoredAction from '@/src/types/StoredAction';
import getMoveData from '@/src/helpers/getMoveData';

interface CoordinatesStore {
  coordinates: Coordinates;
  setCoordinates: (newCoordinates: Coordinates) => void;
  rotationDegree: number;
  setRotationDegree: (newDegree: number) => void;
  level: Level;
  setLevel: (newLevel: Level) => void;
  move: (direction: GoDirection) => void;
  rotate: (turnDirection: TurnDirection) => void;
}

interface SettingsStore {
  CELL_SIZE: number; // Cell's size
  BORDER_SIZE: number; // Cell's border size
  BORDER_COLOR: string; // Cell's border color
  GAP_SIZE: number; // Size between cells
  setCellSize: (newCellSize: number) => void;
  setBorderSize: (newBorderSize: number) => void;
  setBorderColor: (newBorderColor: string) => void;
  setGapSize: (newGapSize: number) => void;
}

interface ActionStore {
  selectedActions: StoredAction[];
  unselectedActions: StoredAction[];
  toggleSelectedActions: (action: StoredAction) => void;
  setSelectedActions: (actions: StoredAction[]) => void;
  setUnselectedActions: (actions: StoredAction[]) => void;
}

const getRotationDegreeByView = (view: PlayerViewDirection) => {
  let degree = 0;
  switch (view) {
    case PlayerViewDirection.Up:
      degree = 0;
      break;
    case PlayerViewDirection.Right:
      degree = 90;
      break;
    case PlayerViewDirection.Down:
      degree = 180;
      break;
    case PlayerViewDirection.Left:
      degree = 270;
      break;
    default:
      degree = 0;
  }

  return degree;
};

// This helps to render Player's icon in right place and
// avoid "jumping" on first render from {x: 0, y: 0} to
// actual level's initial coordinates.
//
// TODO: Save last level id to local storage
const getInitialCoordinates = (levelId: number) => {
  return {
    coordinates: {
      x: levels[levelId].initialCoordinates.x,
      y: levels[levelId].initialCoordinates.y,
    },
    rotationDegree: getRotationDegreeByView(
      levels[levelId].initialViewDirection,
    ),
  };
};

const useCoordinatesStore = create<CoordinatesStore>()(
  devtools((set, getState) => ({
    coordinates: getInitialCoordinates(1).coordinates,
    setCoordinates: (newCoordinates) =>
      set(() => ({ coordinates: newCoordinates })),
    rotationDegree: getInitialCoordinates(1).rotationDegree,
    setRotationDegree: (newDegree) =>
      set(() => ({ rotationDegree: newDegree })),
    level: levels[1],
    setLevel: (newLevel) => set(() => ({ level: newLevel })),
    move: (direction: GoDirection) => {
      const { coordinates, rotationDegree, level } = getState();

      const moveData = getMoveData({
        direction,
        coordinates,
        rotationDegree,
        level,
      });

      if (moveData.shouldMove) {
        set(() => ({
          coordinates: moveData.newCoordinates,
        }));
      }
    },
    rotate: (turnDirection: TurnDirection) => {
      set((state) => ({
        rotationDegree:
          turnDirection === TurnDirection.Right
            ? state.rotationDegree + 90
            : state.rotationDegree - 90,
      }));
    },
  })),
);

const useActionStore = create<ActionStore>()(
  devtools((set) => ({
    selectedActions: [],
    unselectedActions: [],
    toggleSelectedActions: (action) =>
      set((state) => {
        const isSelected = !!state.selectedActions.find(
          (item) => item.id === action.id,
        );

        if (isSelected) {
          state.unselectedActions.push(action);
          return {
            selectedActions: state.selectedActions.filter(
              (item) => item.id !== action.id,
            ),
          };
        } else {
          state.selectedActions.push(action);
          return {
            unselectedActions: state.unselectedActions.filter(
              (item) => item.id !== action.id,
            ),
          };
        }
      }),
    setSelectedActions: (actions) => set({ selectedActions: actions }),
    setUnselectedActions: (actions) => set({ unselectedActions: actions }),
  })),
);

// Will be used to modify settings by user.
const useSettingsStore = create<SettingsStore>()(
  devtools((set) => ({
    CELL_SIZE: 50,
    BORDER_SIZE: 1,
    BORDER_COLOR: '#bbbbbb',
    GAP_SIZE: 20,
    setCellSize: (newCellSize) => set(() => ({ CELL_SIZE: newCellSize })),
    setBorderSize: (newBorderSize) =>
      set(() => ({ BORDER_SIZE: newBorderSize })),
    setBorderColor: (newBorderColor) =>
      set(() => ({ BORDER_COLOR: newBorderColor })),
    setGapSize: (newGapSize) => set(() => ({ GAP_SIZE: newGapSize })),
  })),
);

export { useCoordinatesStore, useActionStore, useSettingsStore };

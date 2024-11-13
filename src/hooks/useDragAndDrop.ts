import { useCoordinatesStore } from '@/src/store';
import StoredAction from '@/src/types/StoredAction';
import { useState } from 'react';

const useDragAndDrop = () => {
  const { level } = useCoordinatesStore();

  // List of available actions
  const actionDirections = level.actions;

  const [selectedActions, setSelectedActions] = useState<StoredAction[]>([]);
  const [unselectedActions, setUnselectedActions] = useState<StoredAction[]>(
    actionDirections.map((action, i) => {
      return {
        id: action + i,
        action,
        container: 'unselected',
      };
    }),
  );

  const [currentDraggable, setCurrentDraggable] = useState<StoredAction | null>(
    null,
  );

  return {
    currentDraggable,
    setCurrentDraggable,
    selectedActions,
    setSelectedActions,
    unselectedActions,
    setUnselectedActions,
  };
};

export default useDragAndDrop;

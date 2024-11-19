import { useCoordinatesStore } from '@/src/store';
import StoredAction from '@/src/types/StoredAction';
import { useState } from 'react';

const useActionDragAndDrop = () => {
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

  const selectAction = (action: StoredAction) => {
    setSelectedActions([
      ...selectedActions,
      { ...action, container: 'selected' },
    ]);
    setUnselectedActions(unselectedActions.filter((item) => item !== action));
  };

  const unselectAction = (action: StoredAction) => {
    setUnselectedActions([
      ...unselectedActions,
      { ...action, container: 'unselected' },
    ]);
    setSelectedActions(selectedActions.filter((item) => item !== action));
  };

  const handleActionDragStart = (action: StoredAction) => {
    setCurrentDraggable(action);
  };

  const handleActionDrop = (action: StoredAction) => {
    if (!currentDraggable) {
      return;
    }

    const dropList =
      action.container === 'selected' ? selectedActions : unselectedActions;

    const fromList =
      currentDraggable.container === 'selected'
        ? selectedActions
        : unselectedActions;

    const setDropList =
      action.container === 'selected'
        ? setSelectedActions
        : setUnselectedActions;

    const setFromList =
      currentDraggable.container === 'selected'
        ? setSelectedActions
        : setUnselectedActions;

    const dropIndex = dropList.findIndex((item) => item.id === action.id)!;

    if (currentDraggable.container === action.container) {
      const updatedList = dropList
        .filter((item) => item.id !== currentDraggable.id)
        .toSpliced(dropIndex, 0, currentDraggable);

      setDropList(updatedList);

      return;
    }

    const updatedFromList = fromList.filter(
      (item) => item.id !== currentDraggable.id,
    );

    const updatedDropList = dropList.toSpliced(dropIndex, 0, {
      ...currentDraggable,
      container: action.container,
    });

    setDropList(updatedDropList);
    setFromList(updatedFromList);
  };

  const handleContainerDrop = (from: StoredAction['container']) => {
    if (!currentDraggable) {
      return;
    }

    if (currentDraggable.container === from) {
      return;
    }

    if (currentDraggable.container === 'selected') {
      unselectAction(currentDraggable);
      return;
    }

    selectAction(currentDraggable);
  };

  const handleActionClick = (action: StoredAction) => {
    if (action.container === 'selected') {
      return unselectAction(action);
    }

    return selectAction(action);
  };

  return {
    selectedActions,
    unselectedActions,
    handleActionDragStart,
    handleActionDrop,
    handleContainerDrop,
    handleActionClick,
  };
};

export default useActionDragAndDrop;

import ActionsToRun from '@/src/components/ActionsToRun';
import AvailableActions from '@/src/components/AvailableActions';
import { GoDirection } from '@/src/enums/GoDirection';
import { useCoordinatesStore } from '@/src/store';
import StoredAction from '@/src/types/StoredAction';
import { useState } from 'react';

const TaskManager = () => {
  const { move, rotate, level } = useCoordinatesStore();

  // List of available actions
  const actionDirections = level.actions;

  const [selectedActions, setSelectedActions] = useState<StoredAction[]>([]);
  const [unselectedActions, setUnselectedActions] = useState<StoredAction[]>(
    actionDirections.map((action, i) => {
      return {
        id: action + i,
        action,
      };
    }),
  );

  const [currentDraggable, setCurrentDraggable] = useState<StoredAction | null>(
    null,
  );

  const selectAction = (action: StoredAction) => {
    const id = unselectedActions.findIndex((item) => item.id === action.id);
    const unselectedActionsCopy = [...unselectedActions];
    const selectedActionsCopy = [...selectedActions];
    selectedActionsCopy.push(unselectedActionsCopy.splice(id, 1)[0]);
    setUnselectedActions(unselectedActionsCopy);
    setSelectedActions(selectedActionsCopy);
  };

  const unselectAction = (action: StoredAction) => {
    const id = selectedActions.findIndex((item) => item.id === action.id);
    const selectedActionsCopy = [...selectedActions];
    const unselectedActionsCopy = [...unselectedActions];
    unselectedActionsCopy.push(selectedActionsCopy.splice(id, 1)[0]);
    setSelectedActions(selectedActionsCopy);
    setUnselectedActions(unselectedActionsCopy);
  };

  // TODO: Clear setTimeouts
  const runActions = () => {
    selectedActions.forEach((item, id) => {
      setTimeout(
        () => {
          if (
            item.action === GoDirection.Forward ||
            item.action === GoDirection.Back
          ) {
            move(item.action);
          } else {
            rotate(item.action);
          }
        },
        (id + 1) * 250,
      );
    });
  };

  return (
    <>
      <ActionsToRun
        onRun={runActions}
        selectedActions={selectedActions}
        selectAction={selectAction}
        unselectAction={unselectAction}
        currentDraggable={currentDraggable}
        setCurrentDraggable={setCurrentDraggable}
      />
      <AvailableActions
        unselectedActions={unselectedActions}
        selectAction={selectAction}
        unselectAction={unselectAction}
        currentDraggable={currentDraggable}
        setCurrentDraggable={setCurrentDraggable}
      />
    </>
  );
};

export default TaskManager;

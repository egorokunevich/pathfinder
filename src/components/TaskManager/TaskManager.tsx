import ActionsToRun from '@/src/components/ActionsToRun';
import AvailableActions from '@/src/components/AvailableActions';
import { GoDirection } from '@/src/enums/GoDirection';
import useDragAndDrop from '@/src/hooks/useDragAndDrop';
import { useCoordinatesStore } from '@/src/store';
import StoredAction from '@/src/types/StoredAction';

const TaskManager = () => {
  const {
    move,
    rotate,
    // , level
  } = useCoordinatesStore();

  const {
    currentDraggable,
    setCurrentDraggable,
    selectedActions,
    setSelectedActions,
    unselectedActions,
    setUnselectedActions,
  } = useDragAndDrop();

  // List of available actions
  // const actionDirections = level.actions;

  // const [selectedActions, setSelectedActions] = useState<StoredAction[]>([]);
  // const [unselectedActions, setUnselectedActions] = useState<StoredAction[]>(
  //   actionDirections.map((action, i) => {
  //     return {
  //       id: action + i,
  //       action,
  //       container: 'unselected',
  //     };
  //   }),
  // );

  // const [currentDraggable, setCurrentDraggable] = useState<StoredAction | null>(
  //   null,
  // );

  // Move Action from Unelected to Selected container
  const selectAction = (action: StoredAction) => {
    // Get index of this action in its current container
    const id = unselectedActions.findIndex((item) => item.id === action.id);
    const unselectedActionsCopy = [...unselectedActions];
    const selectedActionsCopy = [...selectedActions];
    // Delete action from its container and push into second container
    selectedActionsCopy.push(unselectedActionsCopy.splice(id, 1)[0]);
    setUnselectedActions(unselectedActionsCopy);
    setSelectedActions(selectedActionsCopy);
  };

  // Move Action from Selected to Unselected container
  const unselectAction = (action: StoredAction) => {
    const id = selectedActions.findIndex((item) => item.id === action.id);
    const selectedActionsCopy = [...selectedActions];
    const unselectedActionsCopy = [...unselectedActions];
    unselectedActionsCopy.push(selectedActionsCopy.splice(id, 1)[0]);
    setSelectedActions(selectedActionsCopy);
    setUnselectedActions(unselectedActionsCopy);
  };

  // const moveAction = (
  //   currentContainer: StoredAction[],
  //   newContainer: StoredAction[],
  //   action: StoredAction,
  // ) => {
  //   const id = currentContainer.findIndex((item) => item.id === action.id);
  //   const currentContainerCopy = [...currentContainer];
  //   const newContainerCopy = [...newContainer];
  //   newContainerCopy.push(currentContainerCopy.splice(id, 1)[0]);
  //   setSelectedActions(currentContainerCopy);
  //   setUnselectedActions(newContainerCopy);
  // };

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
        setSelectedActions={setSelectedActions}
        unselectedActions={unselectedActions}
        setUnselectedActions={setUnselectedActions}
        selectAction={selectAction}
        unselectAction={unselectAction}
        currentDraggable={currentDraggable}
        setCurrentDraggable={setCurrentDraggable}
      />
      <AvailableActions
        unselectedActions={unselectedActions}
        setUnselectedActions={setUnselectedActions}
        selectedActions={selectedActions}
        setSelectedActions={setSelectedActions}
        selectAction={selectAction}
        unselectAction={unselectAction}
        currentDraggable={currentDraggable}
        setCurrentDraggable={setCurrentDraggable}
      />
    </>
  );
};

export default TaskManager;

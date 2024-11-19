import ActionsToRun from '@/src/components/ActionsToRun';
import AvailableActions from '@/src/components/AvailableActions';
import { GoDirection } from '@/src/enums/GoDirection';
import useActionDragAndDrop from '@/src/hooks/useActionDragAndDrop';
import { useCoordinatesStore } from '@/src/store';

const TaskManager = () => {
  const {
    move,
    rotate,
    // , level
  } = useCoordinatesStore();

  const {
    selectedActions,
    unselectedActions,
    handleActionDrop,
    handleContainerDrop,
    handleActionClick,
    handleActionDragStart,
  } = useActionDragAndDrop();

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
        actions={selectedActions}
        handleActionClick={handleActionClick}
        handleActionDragStart={handleActionDragStart}
        handleActionDrop={handleActionDrop}
        handleContainerDrop={handleContainerDrop}
      />
      <AvailableActions
        actions={unselectedActions}
        handleActionClick={handleActionClick}
        handleActionDragStart={handleActionDragStart}
        handleActionDrop={handleActionDrop}
        handleContainerDrop={handleContainerDrop}
      />
    </>
  );
};

export default TaskManager;

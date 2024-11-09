import Action from '@/src/components/Action/Action';
import useOnItemDrop from '@/src/helpers/useOnItemDrop';
import DragAndDrop from '@/src/types/DragAndDrop';
import StoredAction from '@/src/types/StoredAction';

interface AvailableActionsProps extends DragAndDrop {
  unselectedActions: StoredAction[];
  setUnselectedActions: (actions: StoredAction[]) => void;
  selectAction: (action: StoredAction) => void;
  unselectAction: (action: StoredAction) => void;
}

const AvailableActions = ({
  unselectedActions,
  setUnselectedActions,
  selectAction,
  unselectAction,
  currentDraggable,
  setCurrentDraggable,
}: AvailableActionsProps) => {
  const { onItemDrop } = useOnItemDrop({
    actionsList: unselectedActions,
    currentDraggable,
    setActionsList: setUnselectedActions,
  });
  return (
    <div className="flex gap-2 w-full p-2 relative min-h-20 items-center border-2 border-gray">
      <span className="absolute left-3 top-0">Available Actions</span>
      <div
        className="flex gap-2 p-10 w-full"
        id="unselected"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          if (currentDraggable && currentDraggable.container !== 'unselected') {
            unselectAction(currentDraggable);
          }
        }}
      >
        {unselectedActions.map((action) => {
          return (
            <Action
              id={action.id}
              key={action.id}
              action={action.action}
              toggleIsSelected={selectAction}
              setCurrentDraggable={setCurrentDraggable}
              container="unselected"
              onDrop={onItemDrop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailableActions;

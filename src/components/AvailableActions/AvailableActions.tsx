import Action from '@/src/components/Action/Action';
import DragAndDrop from '@/src/types/DragAndDrop';
import StoredAction from '@/src/types/StoredAction';

interface AvailableActionsProps extends DragAndDrop {
  unselectedActions: StoredAction[];
  selectAction: (action: StoredAction) => void;
  unselectAction: (action: StoredAction) => void;
}

const AvailableActions = ({
  unselectedActions,
  selectAction,
  unselectAction,
  currentDraggable,
  setCurrentDraggable,
}: AvailableActionsProps) => {
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailableActions;

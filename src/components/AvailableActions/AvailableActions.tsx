import Action from '@/src/components/Action/Action';
import useOnItemDrop from '@/src/hooks/useOnItemDrop';
import DragAndDrop from '@/src/types/DragAndDrop';
import StoredAction from '@/src/types/StoredAction';

interface AvailableActionsProps extends DragAndDrop {
  unselectedActions: StoredAction[];
  setUnselectedActions: (actions: StoredAction[]) => void;
  selectedActions: StoredAction[];
  setSelectedActions: (actions: StoredAction[]) => void;
  selectAction: (action: StoredAction) => void;
  unselectAction: (action: StoredAction) => void;
}

const AvailableActions = ({
  unselectedActions,
  setUnselectedActions,
  selectedActions,
  setSelectedActions,
  selectAction,
  unselectAction,
  currentDraggable,
  setCurrentDraggable,
}: AvailableActionsProps) => {
  const { onItemDrop } = useOnItemDrop({
    dropList: unselectedActions,
    setDropList: setUnselectedActions,
    fromList: selectedActions,
    setFromList: setSelectedActions,
    currentDraggable,
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
          if (
            currentDraggable &&
            // Check that action is from another container.
            currentDraggable.container !== 'unselected' &&
            // Check that we drop on container itself and not on action element.
            e.target === e.currentTarget
          ) {
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

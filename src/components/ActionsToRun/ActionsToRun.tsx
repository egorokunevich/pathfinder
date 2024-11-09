import Action from '@/src/components/Action/Action';
import Button from '@/src/components/Button';
import useOnItemDrop from '@/src/helpers/useOnItemDrop';
import DragAndDrop from '@/src/types/DragAndDrop';
import StoredAction from '@/src/types/StoredAction';

interface ActionsToRunProps extends DragAndDrop {
  onRun: () => void;
  selectedActions: StoredAction[];
  setSelectedActions: (actions: StoredAction[]) => void;
  selectAction: (action: StoredAction) => void;
  unselectAction: (action: StoredAction) => void;
}

const ActionsToRun = ({
  onRun,
  selectedActions,
  setSelectedActions,
  selectAction,
  unselectAction,
  currentDraggable,
  setCurrentDraggable,
}: ActionsToRunProps) => {
  const { onItemDrop } = useOnItemDrop({
    actionsList: selectedActions,
    currentDraggable,
    setActionsList: setSelectedActions,
  });

  return (
    <div className="flex gap-5 w-full p-2 relative min-h-20 items-center border-2 border-gray">
      <span className="absolute left-20 top-0">Actions to Run</span>
      <Button
        onClick={onRun}
        className="w-16 h-16 font-semibold hover:bg-red-500 hover:text-white"
      >
        Run
      </Button>
      <div
        className="flex gap-2 p-10 w-full"
        id="selected"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          if (currentDraggable && currentDraggable.container !== 'selected') {
            selectAction(currentDraggable);
          }
        }}
      >
        {selectedActions?.map((action) => {
          return (
            <Action
              id={action.id}
              key={action.id}
              action={action.action}
              toggleIsSelected={unselectAction}
              setCurrentDraggable={setCurrentDraggable}
              container="selected"
              onDrop={onItemDrop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActionsToRun;

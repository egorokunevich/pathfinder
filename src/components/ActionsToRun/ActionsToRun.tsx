import Action from '@/src/components/Action/Action';
import Button from '@/src/components/Button';
import StoredAction from '@/src/types/StoredAction';

interface ActionsToRunProps {
  onRun: () => void;
  actions: StoredAction[];
  handleActionClick: (action: StoredAction) => void;
  handleActionDrop: (action: StoredAction) => void;
  handleActionDragStart: (action: StoredAction) => void;
  handleContainerDrop: (from: StoredAction['container']) => void;
}

const ActionsToRun = ({
  onRun,
  actions,
  handleActionClick,
  handleActionDrop,
  handleActionDragStart,
  handleContainerDrop,
}: ActionsToRunProps) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      handleContainerDrop('selected');
    }
  };

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
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {actions.map((actionData) => {
          return (
            <Action
              key={actionData.id}
              actionData={actionData}
              handleActionClick={handleActionClick}
              handleActionDragStart={handleActionDragStart}
              handleActionDrop={handleActionDrop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActionsToRun;

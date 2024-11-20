import Action from '@/src/components/Action/Action';
import StoredAction from '@/src/types/StoredAction';

interface AvailableActionsProps {
  actions: StoredAction[];
  handleActionClick: (action: StoredAction) => void;
  handleActionDrop: (action: StoredAction) => void;
  handleActionDragStart: (action: StoredAction) => void;
  handleContainerDrop: (from: StoredAction['container']) => void;
}

const AvailableActions = ({
  actions,
  handleActionClick,
  handleActionDragStart,
  handleActionDrop,
  handleContainerDrop,
}: AvailableActionsProps) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      handleContainerDrop('unselected');
    }
  };

  return (
    <div className="flex gap-2 w-full p-2 relative min-h-20 items-center border-2 border-gray">
      <span className="absolute left-3 top-0">Available Actions</span>
      <div
        className="flex gap-2 p-10 w-full"
        id="unselected"
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

export default AvailableActions;

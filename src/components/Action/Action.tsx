import StoredAction from '@/src/types/StoredAction';
import forwardIcon from '/icons/forward.png';
import turnLeftIcon from '/icons/turn-left.png';
import turnRightIcon from '/icons/turn-right.png';
import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';
import { motion } from 'framer-motion';

interface ActionProps {
  actionData: StoredAction;
  handleActionClick: (action: StoredAction) => void;
  handleActionDragStart: (action: StoredAction) => void;
  handleActionDrop: (action: StoredAction) => void;
}

// There are several icons for different actions. This function returns the proper one.
const getIcon = (action: TurnDirection | GoDirection) => {
  let icon;

  // Get matching icon
  switch (action) {
    case GoDirection.Forward:
    case GoDirection.Back:
      icon = forwardIcon;
      break;
    case TurnDirection.Right:
      icon = turnRightIcon;
      break;
    case TurnDirection.Left:
      icon = turnLeftIcon;
      break;
    default:
      icon = forwardIcon;
  }

  return (
    <div className="flex justify-center items-center w-full">
      <img
        src={icon}
        alt={action + ' icon'}
        title={action}
        width={24}
        height={24}
        style={{
          // Rotate the 'Forward' icon if direction is 'Back'
          transform: `${action === GoDirection.Back ? 'rotate(180deg)' : ''}`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

const Action = ({
  actionData,
  handleActionClick,
  handleActionDragStart,
  handleActionDrop,
}: ActionProps) => {
  const { action } = actionData;

  const handleDragStart = () => {
    handleActionDragStart(actionData);
  };

  const handleClick = () => {
    handleActionClick(actionData);
  };

  const handleDragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleActionDrop(actionData);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="border-1 border-gray-400  hover:border-gray-800 group hover:bg-amber-200 duration-100 cursor-grab"
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {getIcon(action)}
      <div className="border-t-1 border-gray-400 group-hover:border-gray-800 w-full text-xs p-1 duration-100">
        {actionData.id}
      </div>
    </motion.button>
  );
};

export default Action;

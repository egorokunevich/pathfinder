import StoredAction from '@/src/types/StoredAction';
import forwardIcon from '/icons/forward.png';
import turnLeftIcon from '/icons/turn-left.png';
import turnRightIcon from '/icons/turn-right.png';
import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';
import DragAndDrop from '@/src/types/DragAndDrop';
import { motion } from 'framer-motion';

interface ActionProps extends StoredAction, DragAndDrop {
  toggleIsSelected: (action: StoredAction) => void;
}

// There several icons for different actions. This function returns the proper one.
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
  action,
  id,
  container,
  toggleIsSelected,
  setCurrentDraggable,
  onDrop,
}: ActionProps) => {
  const handleClick = () => {
    const newContainer = container === 'selected' ? 'unselected' : 'selected';
    toggleIsSelected({ action, id, container: newContainer });
  };

  return (
    <motion.button
      // TO FIX: This animation causes warnings in console.
      whileHover={{
        transform: 'translateY(-5px)',
      }}
      style={{ transform: 'translateY(0)' }}
      key={id}
      onClick={handleClick}
      className="border-1 border-gray-400  hover:border-gray-800 group hover:bg-amber-200 duration-100 cursor-grab"
      draggable={true}
      onDragStart={() => {
        if (setCurrentDraggable) {
          setCurrentDraggable({ action, id, container });
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        if (onDrop) {
          onDrop(e, { action, id, container });
        }
      }}
    >
      {getIcon(action)}
      <div className="border-t-1 border-gray-400 group-hover:border-gray-800 w-full text-xs p-1 duration-100">
        {action.toUpperCase()}
      </div>
    </motion.button>
  );
};

export default Action;

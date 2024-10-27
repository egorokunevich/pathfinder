import Image from 'next/image';

import forwardIcon from '@/public/icons/forward.png';
import turnLeftIcon from '@/public/icons/turn-left.png';
import turnRightIcon from '@/public/icons/turn-right.png';
import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';

export interface StoredAction {
  id: string;
  action: TurnDirection | GoDirection;
}

interface ActionProps extends StoredAction {
  toggleIsSelected: (action: StoredAction) => void;
}

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
      <Image
        src={icon}
        alt={action + ' icon'}
        title={action}
        width={24}
        height={24}
        style={{
          // Rotate the 'Forward' icon if direction is 'Back'
          transform: `${action === GoDirection.Back ? 'rotate(180deg)' : ''}`,
        }}
      />
    </div>
  );
};

const Action = ({ action, id, toggleIsSelected }: ActionProps) => {
  const handleClick = () => {
    toggleIsSelected({ action, id });
  };

  return (
    <button
      key={id}
      onClick={handleClick}
      className="border-1 border-gray-400  hover:border-gray-800 group hover:bg-amber-200 duration-100"
    >
      {getIcon(action)}
      <div className="border-t-1 border-gray-400 group-hover:border-gray-800 w-full text-xs p-1 duration-100">
        {action.toUpperCase()}
      </div>
    </button>
  );
};

export default Action;

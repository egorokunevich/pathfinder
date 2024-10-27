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
    <Image
      src={icon}
      alt={action + ' icon'}
      title={action}
      width={36}
      height={36}
      style={{
        // Rotate the 'Forward' icon if direction is 'Back'
        transform: `${action === GoDirection.Back ? 'rotate(180deg)' : ''}`,
      }}
    />
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
      className="p-1 rounded-full border-2 border-gray w-12 h-12"
    >
      {getIcon(action)}
    </button>
  );
};

export default Action;

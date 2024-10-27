import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';

export interface StoredAction {
  id: string;
  action: TurnDirection | GoDirection;
}

interface ActionProps extends StoredAction {
  toggleIsSelected: (action: StoredAction) => void;
}

const Action = ({ action, id, toggleIsSelected }: ActionProps) => {
  const handleClick = () => {
    toggleIsSelected({ action, id });
  };

  return (
    <button
      key={id}
      onClick={handleClick}
      className="p-5 rounded-full border-2 border-gray"
    >
      {action}
    </button>
  );
};

export default Action;

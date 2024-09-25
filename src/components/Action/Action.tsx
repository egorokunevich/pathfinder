import {
  // useControls,
  GoDirections,
  TurnDirection,
} from "@/src/hooks/useControls";

export interface StoredAction {
  id: string;
  action: TurnDirection | GoDirections;
}

interface ActionProps extends StoredAction {
  toggleIsSelected: (action: StoredAction) => void;
  // runAction: () => void;
}

const Action = ({ action, id, toggleIsSelected }: ActionProps) => {
  // const { moveForward, moveBack, turnLeft, turnRight } = useControls();

  // Run this handler when "Run" button is clicked
  // const handleActionRun = () => {
  //   if (action === TurnDirection.Left) {
  //     turnLeft();
  //   }
  //   if (action === TurnDirection.Right) {
  //     turnRight();
  //   }
  //   if (action === GoDirections.Forward) {
  //     moveForward();
  //   }
  //   if (action === GoDirections.Back) {
  //     moveBack();
  //   }
  // };

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

import useControls, {
  GoDirections,
  TurnDirection,
} from "@/src/hooks/useControls";

interface ActionProps {
  action: TurnDirection | GoDirections;
}

const Action = ({ action }: ActionProps) => {
  const { moveForward, moveBack, turnLeft, turnRight } = useControls();

  // Run this handler when "Run" button is clicked
  const handleAction = () => {
    if (action === TurnDirection.Left) {
      turnLeft();
    }
    if (action === TurnDirection.Right) {
      turnRight();
    }
    if (action === GoDirections.Forward) {
      moveForward();
    }
    if (action === GoDirections.Back) {
      moveBack();
    }
  };

  const handleClick = () => {
    // Move to Actions to Run
  };

  return (
    <button
      onClick={handleClick}
      className="p-5 rounded-full border-2 border-gray"
    >
      {action}
    </button>
  );
};

export default Action;

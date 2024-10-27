import Action from '@/src/components/Action/Action';
import Button from '@/src/components/Button';
import { useActionStore } from '@/src/store';

interface ActionsToRunProps {
  onRun: () => void;
}

const ActionsToRun = ({ onRun }: ActionsToRunProps) => {
  const { toggleSelectedActions, selectedActions } = useActionStore();

  return (
    <div className="flex gap-5 w-full p-2 relative min-h-20 items-center border-2 border-gray">
      <span className="absolute left-20 top-0">Actions to Run</span>
      {/* <button
        onClick={onRun}
        className="w-16 h-16 border-2 border-black p-2 bg-white font-semibold hover:bg-red-500 hover:text-white duration-100"
      >
        Run
      </button> */}
      <Button
        onClick={onRun}
        className="w-16 h-16 font-semibold hover:bg-red-500 hover:text-white"
      >
        Run
      </Button>
      <div className="flex gap-2 pt-4">
        {selectedActions?.map((action) => {
          return (
            <Action
              id={action.id}
              key={action.id}
              action={action.action}
              toggleIsSelected={toggleSelectedActions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActionsToRun;

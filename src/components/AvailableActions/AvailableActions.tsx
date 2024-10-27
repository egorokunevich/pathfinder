import Action from '@/src/components/Action/Action';
import { useActionStore } from '@/src/store';

const AvailableActions = () => {
  const { toggleSelectedActions, unselectedActions, selectedActions } =
    useActionStore();

  return (
    <div className="flex gap-2 w-full p-2 relative min-h-20 items-center border-2 border-gray">
      <span className="absolute left-3 top-0">Available Actions</span>
      <div className="flex gap-2 pt-4">
        {unselectedActions.map((action) => {
          const isSelected = !!selectedActions.find(
            (item) => item.id === action.id
          );
          return (
            !isSelected && (
              <Action
                id={action.id}
                key={action.id}
                action={action.action}
                toggleIsSelected={toggleSelectedActions}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default AvailableActions;

import StoredAction from '@/src/types/StoredAction';

interface UseOnItemDrop {
  actionsList: StoredAction[];
  setActionsList: (actions: StoredAction[]) => void;
  currentDraggable: StoredAction | null | undefined;
}

// This hook handles Actions' swaps in containers.
// It is called in Action Containers with specified arguments
// and returns onDrop callback for Action.
const useOnItemDrop = ({
  actionsList,
  currentDraggable,
  setActionsList,
}: UseOnItemDrop) => {
  const onItemDrop = (
    e: React.DragEvent<HTMLElement>,
    action: StoredAction,
  ) => {
    e.preventDefault();
    const currentId = actionsList.findIndex(
      (item) => item.id === currentDraggable?.id,
    );
    const newId = actionsList.findIndex((item) => item.id === action.id);

    const listCopy = [...actionsList];
    const movingAction = listCopy.splice(currentId, 1);
    listCopy.splice(newId, 0, movingAction[0]);

    setActionsList(listCopy);

    console.log(`${currentId} -> ${newId}`);
    console.log(listCopy);
  };
  return { onItemDrop };
};

export default useOnItemDrop;

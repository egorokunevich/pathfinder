import StoredAction from '@/src/types/StoredAction';

interface UseOnItemDrop {
  dropList: StoredAction[];
  setDropList: (actions: StoredAction[]) => void;
  fromList: StoredAction[];
  setFromList: (actions: StoredAction[]) => void;
  currentDraggable: StoredAction | null | undefined;
}

// This hook returns function that handles Actions' drag and drop
// when you drop one action on another.
// It swaps actions in one container and between containers.
// It is called in Action Containers with specified arguments
// and returns onDrop callback for Action.
const useOnItemDrop = ({
  dropList,
  setDropList,
  fromList,
  setFromList,
  currentDraggable,
}: UseOnItemDrop) => {
  const onItemDrop = (
    e: React.DragEvent<HTMLElement>,
    action: StoredAction,
  ) => {
    e.preventDefault();
    // Get id of dragged action in its container.
    let currentId = dropList.findIndex(
      (item) => item.id === currentDraggable?.id,
    );

    const dropListCopy = [...dropList];

    const newId = dropList.findIndex((item) => item.id === action.id);
    // currentId >= 0 means that we drop action in the same container.
    if (currentId >= 0) {
      // Splice returns array of deleted elements.
      // In that case — array with dragged action.
      // So we use the first element in array at index [0].
      const draggedAction = dropListCopy.splice(currentId, 1)[0];

      // Insert dragged action.
      dropListCopy.splice(newId, 0, draggedAction);

      setDropList(dropListCopy);
    } else {
      // currentId < 0 means that this action is from another container.
      const fromListCopy = [...fromList];

      // We need to redefine currentId, as it is -1.
      currentId = fromList.findIndex(
        (item) => item.id === currentDraggable?.id,
      );

      const draggedAction = fromListCopy.splice(currentId, 1)[0];

      // Insert dragged action.
      dropListCopy.splice(newId, 0, draggedAction);

      setDropList(dropListCopy);
      setFromList(fromListCopy);
    }
  };
  return { onItemDrop };
};

export default useOnItemDrop;

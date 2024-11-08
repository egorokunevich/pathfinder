import StoredAction from '@/src/types/StoredAction';
import { useActionStore } from '@/src/store';

const useDragAndDrop = () => {
  const { unselectedActions, setUnselectedActions } = useActionStore();

  const dragStart = (e: React.DragEvent<HTMLElement>, action: StoredAction) => {
    e.dataTransfer.setData('action', JSON.stringify(action));
  };
  const dragEnd = (e: React.DragEvent<HTMLElement>) => {
    (e.target as HTMLElement)
      .closest('button')
      ?.classList.remove('bg-gray-300');
    (e.target as HTMLElement)
      .closest('#unselected-container')
      ?.classList.remove('bg-gray-100');
  };
  const dragLeave = (e: React.DragEvent<HTMLElement>) => {
    (e.target as HTMLElement)
      .closest('button')
      ?.classList.remove('bg-gray-300');
  };
  const dragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    (e.target as HTMLElement).closest('button')?.classList.add('bg-gray-300');
    (e.target as HTMLElement)
      .closest('#unselected-container')
      ?.classList.add('bg-gray-100');
  };
  const dropOnItem = (
    e: React.DragEvent<HTMLElement>,
    action: StoredAction,
  ) => {
    e.preventDefault();
    (e.target as HTMLElement)
      .closest('button')
      ?.classList.remove('bg-gray-300');
    (e.target as HTMLElement)
      .closest('#unselected-container')
      ?.classList.remove('bg-gray-100');
    const newId = unselectedActions.findIndex((item) => item.id === action.id);
    console.log(
      `${newId} in ${(e.target as HTMLElement).closest('#unselected-container')?.id}`,
    );
  };
  const dropOnContainer = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const action = JSON.parse(e.dataTransfer.getData('action')) as StoredAction;
    console.log(action);
    //   if (
    //     (e.target as HTMLElement).id === 'unselected-container'
    //   ) {
    //     const list = [...unselectedActions];
    //     list.push(draggingAction);
    //     console.log(list);
    //     setUnselectedActions(list);
    //   }

    //   setDraggingAction(null);
  };

  return {
    dragStart,
    dragEnd,
    dragOver,
    dropOnItem,
    dropOnContainer,
    dragLeave,
  };
};

export default useDragAndDrop;

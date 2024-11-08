import StoredAction from './StoredAction';

interface DragAndDrop {
  onDragStart?: (e: React.DragEvent<HTMLElement>, action: StoredAction) => void;
  onDragLeave?: (e: React.DragEvent<HTMLElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLElement>, action: StoredAction) => void;
  currentDraggable?: StoredAction | null;
  setCurrentDraggable?: (action: StoredAction) => void;
  currentDroppable?: StoredAction[] | null;
  setCurrentDroppable?: (action: StoredAction[]) => void;
}

export default DragAndDrop;

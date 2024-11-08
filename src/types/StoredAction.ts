import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';

interface StoredAction {
  id: string;
  action: TurnDirection | GoDirection;
  container: 'selected' | 'unselected';
}

export default StoredAction;

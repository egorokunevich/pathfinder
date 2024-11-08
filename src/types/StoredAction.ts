import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';

interface StoredAction {
  id: string;
  action: TurnDirection | GoDirection;
}

export default StoredAction;

import { PlayerViewDirection } from '@/src/enums/PlayerViewDirection';

const getInitialRotationDegree = (viewDirection: PlayerViewDirection) => {
  if (viewDirection === PlayerViewDirection.Right) {
    return 90;
  }
  if (viewDirection === PlayerViewDirection.Down) {
    return 180;
  }
  if (viewDirection === PlayerViewDirection.Left) {
    return 270;
  }
  return 0;
};

export default getInitialRotationDegree;

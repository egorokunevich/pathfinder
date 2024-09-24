import { PlayerViewDirection } from "@/src/store";

const getPlayerTransform = (viewDirection: PlayerViewDirection) => {
  let degree = 0;
  if (viewDirection === PlayerViewDirection.Right) {
    degree = 90;
  }
  if (viewDirection === PlayerViewDirection.Down) {
    degree = 180;
  }
  if (viewDirection === PlayerViewDirection.Left) {
    degree = 270;
  }
  return `rotate(${degree}deg)`;
};

export default getPlayerTransform;

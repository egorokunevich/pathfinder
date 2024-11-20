import playerIcon from '/icons/arrow.png';
import { useCoordinatesStore, useSettingsStore } from '@/src/store';

const Player = () => {
  const { coordinates, rotationDegree } = useCoordinatesStore();

  const { CELL_SIZE, BORDER_SIZE, GAP_SIZE } = useSettingsStore();

  const style = {
    left: `${
      coordinates.x * (CELL_SIZE + 2 * BORDER_SIZE + GAP_SIZE) + BORDER_SIZE
    }px`,
    top: `${
      coordinates.y * (CELL_SIZE + 2 * BORDER_SIZE + GAP_SIZE) + BORDER_SIZE
    }px`,
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    transform: `rotate(${rotationDegree}deg)`,
    transition: '0.25s',
  };

  return (
    <div className="absolute" style={style}>
      <img src={playerIcon} alt="player" />
    </div>
  );
};

export default Player;

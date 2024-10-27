'use client';

import Image from 'next/image';

import * as icon from '@/public/arrow.png';
import { useCoordinatesStore } from '@/src/store';

const Player = () => {
  const { coordinates, rotationDegree, CELL_SIZE, BORDER_SIZE, GAP_SIZE } =
    useCoordinatesStore();

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
      <Image src={icon} alt={'player'} priority={true} />
    </div>
  );
};

export default Player;

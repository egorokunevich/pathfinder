'use client';

import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren } from 'react';

import { Coordinates } from '@/src/components/Game/Game';
import { useCoordinatesStore } from '@/src/store';

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
  isWall: boolean;
}

const Cell = ({ selfCoordinates, isWall, children }: CellProps) => {
  const { setNodeRef } = useDroppable({ id: 'cell' });
  const { BORDER_SIZE, CELL_SIZE, BORDER_COLOR } = useCoordinatesStore();

  return (
    <div
      className={`flex flex-wrap justify-center content-center text-center relative ${
        isWall ? 'bg-black' : 'bg-white'
      }`}
      style={{
        width: `${CELL_SIZE}px`,
        height: `${CELL_SIZE}px`,
        padding: `${CELL_SIZE / 2}px`,
        border: `${BORDER_SIZE}px solid ${BORDER_COLOR}`,
      }}
      ref={setNodeRef}
      title={`x: ${selfCoordinates.x}; y: ${selfCoordinates.y}`}
    >
      {children}
    </div>
  );
};

export default Cell;

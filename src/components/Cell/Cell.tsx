'use client';

import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren } from 'react';

import { Coordinates } from '@/src/components/Game/Game';
import { useCoordinatesStore } from '@/src/store';

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
  value: string;
}

const getCellStyle = (value: string) => {
  let style = '';
  switch (value) {
    case 'wall':
      style = 'bg-black';
      break;
    case 'goal':
      style = 'bg-green-500';
      break;
    case 'lava':
      style = 'bg-red-500';
      break;
    default:
      style = 'bg-white';
  }

  return style;
};

const Cell = ({ selfCoordinates, value, children }: CellProps) => {
  const { setNodeRef } = useDroppable({ id: 'cell' });
  const { BORDER_SIZE, CELL_SIZE, BORDER_COLOR } = useCoordinatesStore();

  return (
    <div
      className={`flex flex-wrap justify-center content-center text-center relative ${getCellStyle(
        value
      )}`}
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

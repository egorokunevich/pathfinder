'use client';

import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren } from 'react';

import {
  BORDER_COLOR,
  BORDER_SIZE,
  CELL_SIZE,
} from '@/src/components/Field/Field';
import { Coordinates } from '@/src/components/Game/Game';

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
}

const Cell = ({ selfCoordinates, children }: CellProps) => {
  const { setNodeRef } = useDroppable({ id: 'cell' });

  return (
    <div
      className="flex flex-wrap justify-center content-center text-center relative"
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

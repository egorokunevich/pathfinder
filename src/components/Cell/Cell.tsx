import { Coordinates } from '@/src/components/Game/Game';
import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren, useContext } from 'react';
import CoordinateContext from '@/src/context/CoordinatesContext/CoordinatesContext';
import * as _ from 'lodash';

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
  className?: string;
}

const Cell = ({ selfCoordinates, className, children }: CellProps) => {
  const { setNodeRef } = useDroppable({ id: 'cell' });
  const playerCoordinates = useContext(CoordinateContext);
  const style = _.isEqual(playerCoordinates, selfCoordinates)
    ? { backgroundColor: 'black' }
    : { backgroundColor: 'transparent' };
  return (
    <div
      className={className}
      style={style}
      ref={setNodeRef}
      title={`x: ${selfCoordinates.x}; y: ${selfCoordinates.y}`}
    >
      {children}
    </div>
  );
};

export default Cell;

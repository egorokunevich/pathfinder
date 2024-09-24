import { Coordinates } from '@/src/components/Game/Game';
import { useDroppable } from '@dnd-kit/core';
import { PropsWithChildren, useContext } from 'react';
import CoordinateContext from '@/src/context/CoordinatesContext/CoordinatesContext';
import * as _ from 'lodash';
import ViewDirectionContext, {
  PlayerViewDirection,
} from '@/src/context/ViewDirectionContext/ViewDirectionContext';
import Image from 'next/image';
import * as icon from '@/public/arrow.png';

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
  className?: string;
}

const Cell = ({ selfCoordinates, className, children }: CellProps) => {
  const viewDirection = useContext(ViewDirectionContext);
  const { setNodeRef } = useDroppable({ id: 'cell' });
  const playerCoordinates = useContext(CoordinateContext);
  const isPlayer = _.isEqual(playerCoordinates, selfCoordinates);

  const getPlayerTransform = () => {
    let degree = 0;
    if (viewDirection === PlayerViewDirection.Right) {
      degree = 90;
    }
    if (viewDirection === PlayerViewDirection.Down) {
      degree = 180;
    }
    if (viewDirection === PlayerViewDirection.Left) {
      degree = -90;
    }
    return `rotate(${degree}deg)`;
  };

  return (
    <div
      className={className}
      ref={setNodeRef}
      title={`x: ${selfCoordinates.x}; y: ${selfCoordinates.y}`}
    >
      {isPlayer ? (
        <div className="w-full h-full absolute left-0 top-0">
          <Image
            src={icon}
            alt={'player'}
            style={{ transform: getPlayerTransform() }}
          />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Cell;

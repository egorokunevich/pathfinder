'use client';

import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Cell from '@/src/components/Cell';
import Player from '@/src/components/Player/Player';
import getInitialRotationDegree from '@/src/helpers/getInitialRotationDegree';
import { useCoordinatesStore } from '@/src/store';

const Field = () => {
  const { setCoordinates, setRotationDegree, level, GAP_SIZE } =
    useCoordinatesStore();
  const field = level.field;
  useEffect(() => {
    setCoordinates(level.initialCoordinates);
    setRotationDegree(getInitialRotationDegree(level.initialViewDirection));
  }, []);

  const createField = () => {
    return field.map((row, y) => {
      return (
        // Create a row
        <div
          key={uuidv4()}
          className="flex w-full"
          style={{ gap: `${GAP_SIZE}px` }}
        >
          {row.map((el, x) => {
            // Create a cell
            return (
              <Cell
                key={uuidv4()}
                selfCoordinates={{ x, y }}
                isWall={el === 'wall'}
              />
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="relative flex-col flex" style={{ gap: `${GAP_SIZE}px` }}>
      {createField()}
      <Player />
    </div>
  );
};

export default Field;

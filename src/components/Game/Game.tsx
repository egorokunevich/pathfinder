'use client';

import Cell from '@/src/components/Cell';
import CoordinateContext from '@/src/context/CoordinatesContext/CoordinatesContext';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Controls from '../Controls/Controls';
import ViewDirectionContext, {
  PlayerViewDirection,
} from '@/src/context/ViewDirectionContext/ViewDirectionContext';

export interface Coordinates {
  x: number;
  y: number;
}
export const FIELD_SIZE = 2;

export default function Game() {
  const [playerViewDirection, setPlayerViewDirection] =
    useState<PlayerViewDirection>(PlayerViewDirection.Up);
  const [playerCoordinates, setPlayerCoordinates] = useState<Coordinates>({
    x: 0,
    y: 0,
  });
  const field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  //   useEffect(() => {
  //     setPlayerCoordinates({ x: 2, y: 2 });
  //     setPlayerViewDirection(PlayerViewDirection.Up);
  //   }, []);
  useEffect(() => {
    console.log(playerCoordinates);
  }, [playerCoordinates]);

  const createField = () => {
    return field.map((row, y) => {
      return (
        <div key={uuidv4()} className="flex gap-2">
          {row.map((el, x) => {
            return (
              <Cell
                key={uuidv4()}
                className="flex flex-wrap w-5 h-5 p-5 justify-center content-center border-gray-400 border-2 text-center relative"
                selfCoordinates={{ x, y }}
              >
                {el}
              </Cell>
            );
          })}
        </div>
      );
    });
  };

  return (
    <ViewDirectionContext.Provider value={playerViewDirection}>
      <CoordinateContext.Provider value={playerCoordinates}>
        <div className="flex flex-col gap-2">{createField()}</div>
        <Controls
          setCoordinates={setPlayerCoordinates}
          setPlayerViewDirection={setPlayerViewDirection}
        />
      </CoordinateContext.Provider>
    </ViewDirectionContext.Provider>
  );
}

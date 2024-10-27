'use client';

import { useState } from 'react';

import Button from '@/src/components/Button';
import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';
import { useCoordinatesStore } from '@/src/store';

const Controls = () => {
  const { move, rotate } = useCoordinatesStore();
  const [showControls, setShowControls] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setShowControls((state) => !state);
        }}
      >
        {!showControls ? 'Show controls' : 'Hide controls'}
      </button>

      {showControls && (
        <div className="flex gap-2 content-center justify-center flex-wrap border-2 border-gray-200 w-64 p-5">
          <Button
            onClick={() => {
              move(GoDirection.Forward);
            }}
            className="hover:bg-amber-200"
          >
            Forward
          </Button>
          <div className="flex justify-center gap-2 w-full">
            <Button
              onClick={() => {
                rotate(TurnDirection.Left);
              }}
              className="hover:bg-amber-200"
            >
              Left
            </Button>
            <Button
              onClick={() => {
                move(GoDirection.Back);
              }}
              className="hover:bg-amber-200"
            >
              Back
            </Button>
            <Button
              onClick={() => {
                rotate(TurnDirection.Right);
              }}
              className="hover:bg-amber-200"
            >
              Right
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Controls;

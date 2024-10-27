'use client';

import Controls from '@/src/components/Controls/Controls';
import Field from '@/src/components/Field/Field';
import TaskManager from '@/src/components/TaskManager/TaskManager';

export interface Coordinates {
  x: number;
  y: number;
}

export default function Game() {
  return (
    <div className="game flex w-full justify-center items-center">
      <div className="flex gap-5 p-10 justify-center max-w-screen-xl w-full flex-wrap">
        <Field />
        <div className="flex flex-col gap-5">
          <TaskManager />
          <Controls />
        </div>
      </div>
    </div>
  );
}

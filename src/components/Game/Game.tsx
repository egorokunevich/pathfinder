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
    <>
      <div className="flex flex-col gap-5 p-10 justify-center w-full items-center flex-wrap">
        <Field />
        <TaskManager />
        <Controls />
      </div>
    </>
  );
}

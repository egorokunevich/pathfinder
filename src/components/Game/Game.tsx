"use client";

import Controls from "../Controls/Controls";
import Field from "../Field/Field";
import TaskManager from "../TaskManager/TaskManager";

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

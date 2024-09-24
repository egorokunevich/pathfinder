"use client";

import Controls from "../Controls/Controls";
import Field from "../Field/Field";

export interface Coordinates {
  x: number;
  y: number;
}

export default function Game() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Field />
      </div>
      <Controls />
    </>
  );
}

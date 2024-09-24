"use client";

import Cell from "@/src/components/Cell";
import { v4 as uuidv4 } from "uuid";
import Controls from "../Controls/Controls";

export interface Coordinates {
  x: number;
  y: number;
}
export const FIELD_SIZE = 2;

export default function Game() {
  const field = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

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
    <>
      <div className="flex flex-col gap-2">{createField()}</div>
      <Controls />
    </>
  );
}

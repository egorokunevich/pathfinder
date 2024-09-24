"use client";

import Cell from "@/src/components/Cell";
import { v4 as uuidv4 } from "uuid";
import Player from "../Player/Player";

const field = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const FIELD_SIZE = field.length - 1;

const Field = () => {
  const createField = () => {
    return field.map((row, y) => {
      return (
        <>
          <div key={uuidv4()} className="flex">
            {row.map((el, x) => {
              return (
                <Cell key={uuidv4()} selfCoordinates={{ x, y }}>
                  {el}
                </Cell>
              );
            })}
          </div>
        </>
      );
    });
  };

  return (
    <div className="relative">
      {createField()}
      <Player />
    </div>
  );
};

export default Field;

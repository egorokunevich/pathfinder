"use client";

import Cell from "@/src/components/Cell";
import { v4 as uuidv4 } from "uuid";
import Player from "../Player/Player";
import { levels } from "@/src/levels/levels";
import { useCoordinatesStore } from "@/src/store";
import { useEffect } from "react";
import getInitialRotationDegree from "@/src/helpers/getInitialRotationDegree";

const level = levels[0];
const field = level.field;

export const FIELD_SIZE = field.length - 1;

// Adjust these parameters to change field size
export const CELL_SIZE = 50; // Cell's size
export const BORDER_SIZE = 1; // Cell's border size
export const BORDER_COLOR = "#bbbbbb"; // Cell's border color
export const GAP_SIZE = 20; // Size between cells

const Field = () => {
  const { setCoordinates, setView, setRotationDegree } = useCoordinatesStore();

  useEffect(() => {
    setCoordinates(level.initialCoordinates);
    setView(level.initialViewDirection);
    setRotationDegree(getInitialRotationDegree(level.initialViewDirection));
  }, []);

  const createField = () => {
    return field.map((row, y) => {
      return (
        <div
          key={uuidv4()}
          className="flex w-full"
          style={{ gap: `${GAP_SIZE}px` }}
        >
          {row.map((el, x) => {
            return (
              <Cell key={uuidv4()} selfCoordinates={{ x, y }}>
                {el}
              </Cell>
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

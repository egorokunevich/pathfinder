"use client";

import { Coordinates } from "@/src/components/Game/Game";
import { useDroppable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
}

const Cell = ({ selfCoordinates, children }: CellProps) => {
  const { setNodeRef } = useDroppable({ id: "cell" });

  return (
    <div
      className="flex flex-wrap w-5 h-5 p-5 justify-center content-center border-gray-400 border-2 text-center relative"
      ref={setNodeRef}
      title={`x: ${selfCoordinates.x}; y: ${selfCoordinates.y}`}
    >
      {children}
    </div>
  );
};

export default Cell;

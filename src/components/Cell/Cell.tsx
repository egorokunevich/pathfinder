"use client";

import { Coordinates } from "@/src/components/Game/Game";
import { useDroppable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";
import * as _ from "lodash";
import Image from "next/image";
import * as icon from "@/public/arrow.png";
import { useCoordinatesStore } from "@/src/store";
import getPlayerTransform from "../helpers/getPlayerTransform";

interface CellProps extends PropsWithChildren {
  selfCoordinates: Coordinates;
  className?: string;
}

const Cell = ({ selfCoordinates, className, children }: CellProps) => {
  const { setNodeRef } = useDroppable({ id: "cell" });
  const { coordinates: playerCoordinates, view } = useCoordinatesStore();
  const isPlayer = _.isEqual(playerCoordinates, selfCoordinates);

  return (
    <div
      className={className}
      ref={setNodeRef}
      title={`x: ${selfCoordinates.x}; y: ${selfCoordinates.y}`}
    >
      {isPlayer ? (
        <div className="w-full h-full absolute left-0 top-0">
          <Image
            src={icon}
            alt={"player"}
            style={{ transform: getPlayerTransform(view) }}
          />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Cell;

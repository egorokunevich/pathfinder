"use client";

import Image from "next/image";
import * as icon from "@/public/arrow.png";
import { useCoordinatesStore } from "@/src/store";

const Player = () => {
  const { coordinates, rotationDegree } = useCoordinatesStore();
  const cellSize = 40;
  const borderSize = 2;
  const style = {
    left: `${coordinates.x * (cellSize + 2 * borderSize) + borderSize}px`,
    top: `${coordinates.y * (cellSize + 2 * borderSize) + borderSize}px`,
    width: "40px",
    height: "40px",
    transition: "0.5s",
  };

  return (
    <div className="border-transparent absolute" style={style}>
      <Image
        src={icon}
        alt={"player"}
        style={{
          transform: `rotate(${rotationDegree}deg)`,
          transition: "0.5s",
        }}
      />
    </div>
  );
};

export default Player;

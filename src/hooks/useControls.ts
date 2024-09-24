"use client";

import { FIELD_SIZE } from "../components/Field/Field";
import { PlayerViewDirection, useCoordinatesStore } from "../store";

export enum GoDirections {
  Forward = "forward",
  Back = "back",
  TurnLeft = "turn-left",
  TurnRight = "turn-right",
}

export enum TurnDirection {
  Left = "left",
  Right = "right",
}

const useControls = () => {
  const { coordinates, view, setCoordinates, setView } = useCoordinatesStore();

  const getNewCoordinates = (direction: GoDirections) => {
    if (
      (direction === GoDirections.Forward && view === PlayerViewDirection.Up) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Down)
    ) {
      const newY = coordinates.y - 1 < 0 ? coordinates.y : coordinates.y - 1;
      return { ...coordinates, y: newY };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Down) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Up)
    ) {
      const newY =
        coordinates.y + 1 > FIELD_SIZE ? coordinates.y : coordinates.y + 1;
      return { ...coordinates, y: newY };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Left) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Right)
    ) {
      const newX = coordinates.x - 1 < 0 ? coordinates.x : coordinates.x - 1;
      return { ...coordinates, x: newX };
    }
    if (
      (direction === GoDirections.Forward &&
        view === PlayerViewDirection.Right) ||
      (direction === GoDirections.Back && view === PlayerViewDirection.Left)
    ) {
      const newX =
        coordinates.x + 1 > FIELD_SIZE ? coordinates.x : coordinates.x + 1;
      return { ...coordinates, x: newX };
    }
    return coordinates;
  };

  const getNewView = (turnDirection: TurnDirection) => {
    if (
      (view === PlayerViewDirection.Right &&
        turnDirection === TurnDirection.Left) ||
      (view === PlayerViewDirection.Left &&
        turnDirection === TurnDirection.Right)
    ) {
      return PlayerViewDirection.Up;
    }
    if (
      (view === PlayerViewDirection.Right &&
        turnDirection === TurnDirection.Right) ||
      (view === PlayerViewDirection.Left &&
        turnDirection === TurnDirection.Left)
    ) {
      return PlayerViewDirection.Down;
    }
    if (
      (view === PlayerViewDirection.Up &&
        turnDirection === TurnDirection.Left) ||
      (view === PlayerViewDirection.Down &&
        turnDirection === TurnDirection.Right)
    ) {
      return PlayerViewDirection.Left;
    }
    if (
      (view === PlayerViewDirection.Up &&
        turnDirection === TurnDirection.Right) ||
      (view === PlayerViewDirection.Down &&
        turnDirection === TurnDirection.Left)
    ) {
      return PlayerViewDirection.Right;
    }
    return view;
  };

  const moveForward = () => {
    const newCoordinates = getNewCoordinates(GoDirections.Forward);
    setCoordinates(newCoordinates);
  };

  const moveBack = () => {
    const newCoordinates = getNewCoordinates(GoDirections.Back);
    setCoordinates(newCoordinates);
  };

  const turnLeft = () => {
    const newViewDirection = getNewView(TurnDirection.Left);
    setView(newViewDirection);
  };

  const turnRight = () => {
    const newViewDirection = getNewView(TurnDirection.Right);
    setView(newViewDirection);
    console.log(newViewDirection);
  };

  return { moveForward, moveBack, turnLeft, turnRight };
};

export default useControls;

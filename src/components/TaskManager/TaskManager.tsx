"use client";

import { GoDirections, TurnDirection } from "@/src/hooks/useControls";
import Action from "../Action/Action";

// How it should work:
// In "Actions to run" there are available actions for this level.
// Clicking it should move the Action to the "Actions to Run" field.
// Clicking on "Run" button runs those actions one by one.

const TaskManager = () => {
  return (
    <>
      <div className="flex gap-2 w-full p-2 min-h-20 border-2 border-gray">
        <button className="w-16 h-16 border-2 border-black p-2">Run</button>
        <div>
          <div>Actions to Run</div>
        </div>
      </div>
      <div className="flex gap-2 w-full p-2 min-h-20 border-2 border-gray">
        Available Actions
        <Action action={TurnDirection.Left} />
        <Action action={GoDirections.Forward} />
        <Action action={GoDirections.Forward} />
        <Action action={GoDirections.Forward} />
      </div>
    </>
  );
};

export default TaskManager;

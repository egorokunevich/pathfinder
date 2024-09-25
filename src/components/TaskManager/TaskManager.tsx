'use client';

import { useEffect } from 'react';

import Action from '@/src/components/Action/Action';
import { GoDirections, TurnDirection } from '@/src/hooks/useControls';
import { useActionStore } from '@/src/store';

// How it should work:
// In "Actions to run" there are available actions for this level.
// Clicking it should move the Action to the "Actions to Run" field.
// Clicking on "Run" button runs those actions one by one.

const TaskManager = () => {
  const {
    selectedActions,
    unselectedActions,
    toggleSelectedActions,
    setUnselectedActions,
  } = useActionStore();

  const actionDirections = [
    TurnDirection.Left,
    GoDirections.Forward,
    GoDirections.Forward,
    GoDirections.Forward,
  ];

  useEffect(() => {
    console.log('rerender');
    setUnselectedActions(
      actionDirections.map((act, i) => {
        return {
          id: act + i,
          action: act,
        };
      })
    );
  }, []);

  const drawUnselectedActions = () => {
    return unselectedActions.map((action) => {
      const isSelected = !!selectedActions.find(
        (item) => item.id === action.id
      );
      return (
        !isSelected && (
          <Action
            id={action.id}
            key={action.id}
            action={action.action}
            toggleIsSelected={toggleSelectedActions}
          />
        )
      );
    });
  };

  const drawSelectedActions = () => {
    return selectedActions?.map((action) => {
      return (
        <Action
          id={action.id}
          key={action.id}
          action={action.action}
          toggleIsSelected={toggleSelectedActions}
        />
      );
    });
  };

  return (
    <>
      <div className="flex gap-2 w-full p-2 min-h-20 border-2 border-gray">
        <button className="w-16 h-16 border-2 border-black p-2">Run</button>
        <div>
          <div>
            Actions to Run
            {drawSelectedActions()}
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full p-2 min-h-20 border-2 border-gray">
        Available Actions
        {drawUnselectedActions()}
      </div>
    </>
  );
};

export default TaskManager;

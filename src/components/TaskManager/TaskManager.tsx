'use client';

import { useEffect } from 'react';

import Action from '@/src/components/Action/Action';
import { GoDirection } from '@/src/enums/GoDirection';
import { useActionStore, useCoordinatesStore } from '@/src/store';

const TaskManager = () => {
  const { move, rotate, level } = useCoordinatesStore();

  const {
    selectedActions,
    unselectedActions,
    toggleSelectedActions,
    setUnselectedActions,
  } = useActionStore();

  // List of available actions
  const actionDirections = level.actions;

  useEffect(() => {
    setUnselectedActions(
      actionDirections.map((act, i) => {
        return {
          id: act + i,
          action: act,
        };
      })
    );
  }, []);

  // Render available actions
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

  // Render actions that are selected to run
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

  // TODO: Clear setTimeouts
  const runActions = () => {
    selectedActions.forEach((item, id) => {
      setTimeout(() => {
        if (
          item.action === GoDirection.Forward ||
          item.action === GoDirection.Back
        ) {
          move(item.action);
        } else {
          rotate(item.action);
        }
      }, (id + 1) * 250);
    });
  };

  return (
    <>
      <div className="flex gap-5 w-full p-2 relative min-h-20 items-center border-2 border-gray">
        <span className="absolute left-20 top-0">Actions to Run</span>
        <button
          onClick={runActions}
          className="w-16 h-16 border-2 border-black p-2"
        >
          Run
        </button>
        <div className="flex gap-2 pt-4">{drawSelectedActions()}</div>
      </div>

      <div className="flex gap-2 w-full p-2 relative min-h-20 items-center border-2 border-gray">
        <span className="absolute left-3 top-0">Available Actions</span>
        <div className="flex gap-2 pt-4">{drawUnselectedActions()}</div>
      </div>
    </>
  );
};

export default TaskManager;

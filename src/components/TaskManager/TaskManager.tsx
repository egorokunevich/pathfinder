'use client';

import { useEffect } from 'react';

import Action from '@/src/components/Action/Action';
import { GoDirection } from '@/src/enums/GoDirection';
import { TurnDirection } from '@/src/enums/TurnDirection';
import { useActionStore, useCoordinatesStore } from '@/src/store';

const TaskManager = () => {
  const { move, rotate } = useCoordinatesStore();

  const {
    selectedActions,
    unselectedActions,
    toggleSelectedActions,
    setUnselectedActions,
  } = useActionStore();

  // List of available actions
  const actionDirections = [
    TurnDirection.Left,
    TurnDirection.Right,
    GoDirection.Forward,
    GoDirection.Forward,
    GoDirection.Back,
    GoDirection.Forward,
  ];

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
      <div className="flex gap-2 w-full p-2 min-h-20 border-2 border-gray">
        <button
          onClick={runActions}
          className="w-16 h-16 border-2 border-black p-2"
        >
          Run
        </button>
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

'use client';

import { useEffect } from 'react';

import ActionsToRun from '@/src/components/ActionsToRun';
import AvailableActions from '@/src/components/AvailableActions';
import { GoDirection } from '@/src/enums/GoDirection';
import { useActionStore, useCoordinatesStore } from '@/src/store';

const TaskManager = () => {
  const { move, rotate, level } = useCoordinatesStore();

  const { selectedActions, setUnselectedActions } = useActionStore();

  // List of available actions
  const actionDirections = level.actions;

  useEffect(() => {
    setUnselectedActions(
      actionDirections.map((action, i) => {
        return {
          id: action + i,
          action,
        };
      })
    );
  }, []);

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
      <ActionsToRun onRun={runActions} />
      <AvailableActions />
    </>
  );
};

export default TaskManager;

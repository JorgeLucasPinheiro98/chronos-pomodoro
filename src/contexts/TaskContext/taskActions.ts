import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  TASK_COMPLETE = 'TASK_COMPLETE',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.TASK_COMPLETE;
    }
  | {
      type: TaskActionTypes.RESET_TASK;
    };

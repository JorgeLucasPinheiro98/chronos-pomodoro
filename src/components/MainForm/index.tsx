import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../defaultInput';
import type React from 'react';
import { useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../tips';
import { showMessage } from '../../adapters/showMessage';


export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const lastTaskName = state.tasks[state.tasks.length - 1]?. name || ""

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskName === null) return;

    const isTaskName = taskName.trim();

    if (!isTaskName) {
      showMessage.warn('Digite o nome da Tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
    showMessage.success("Tarefa Iniciada")
  }

  function handleInteruptTask() {
    showMessage.dismiss();
    showMessage.error("Tarefa Interrompida")
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form className='form' action='' onSubmit={handleCreateNewTask}>
      <div className='formRow'>
        <DefaultInput
          id='myInput'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
          onChange={e => {
            setTaskName(e.target.value);
          }}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='formRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            color='green'
            icon={<PlayCircleIcon />}
            key={'Button play'}
          />
        ) : (
          <DefaultButton
            aria-label='Parar tarefa'
            title='Parar tarefa'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInteruptTask}
            key={'Button stop'}
          />
        )}
      </div>
    </form>
  );
}

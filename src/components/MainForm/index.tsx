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

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const [taskName, setTaskName] = useState('');

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskName === null) return;

    const isTaskName = taskName.trim();

    if (!isTaskName) {
      alert('Digite o nome da Tarefa');
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask})

  }

  function handleInteruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK,})

    // setState(prevState => {
    //   return {
    //     ...prevState,
    //     activeTask: null,
    //     secondsRemaining: 0,
    //     formattedSecondsRemaining: '00:00',
    //     tasks: prevState.tasks.map(task => {
    //       if (prevState.activeTask && prevState.activeTask.id === task.id) {
    //         return { ...task, interruptDate: Date.now() };
    //       }
    //       return task;
    //     }),
    //   };
    // });
  }

  return (
    <form className='form' action='' onSubmit={handleCreateNewTask}>
      <div className='formRow'>
        <DefaultInput
          id='myInput'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => {
            setTaskName(e.target.value);
          }}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de {state.config[nextCycleType]} min</p>
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

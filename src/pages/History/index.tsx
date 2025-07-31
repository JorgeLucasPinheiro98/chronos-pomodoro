import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/heading';
import { MainTemplete } from '../../templates/MainTemplate/Index';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getStatusTask } from '../../utils/getStatusTask';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { useEffect } from 'react';

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTask = state.tasks.length
  const shortTasks = [...state.tasks].sort((a, b) => {


    return b.startDate - a.startDate;
  });

  
  function handleResetHistory() {
    // if(!confirm('Tem certeza que quer apagar o historico'))return
    dispatch({type: TaskActionTypes.RESET_TASK})
  }

  useEffect(() => {
  },[state])
  
  return (
    <MainTemplete>
      <Container>
        <Heading>
          <span>History</span>
          {!!hasTask && (<span className={styles.buttonContainer}>
            <DefaultButton icon={<TrashIcon />} color='red' onClick={handleResetHistory}/>
          </span>)}
        </Heading>
      </Container>
      <Container>
        {hasTask ?(<div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {shortTasks.map(task => {
                const getTaskType = {
                  workTime: 'Foco',
                  shortBreakTime: 'Descanso Curto',
                  longBreakTime: 'Descanso Longo',
                };
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getStatusTask(task, state.activeTask)}</td>
                    <td>{getTaskType[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>) : (<p style={{textAlign: "center"}}>Adicione uma tarefa</p>)}
      </Container>
    </MainTemplete>
  );
}

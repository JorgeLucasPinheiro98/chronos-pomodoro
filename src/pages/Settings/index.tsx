import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/defaultInput';
import { Heading } from '../../components/heading';
import { MainTemplete } from '../../templates/MainTemplate/Index';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimerInput = useRef<HTMLInputElement>(null);
  const shortBreakTimerInput = useRef<HTMLInputElement>(null);
  const longBreakTimerInput = useRef<HTMLInputElement>(null);

  function handleClick(event: React.FormEvent<HTMLFormElement>) {
    const formError = [];
    event.preventDefault();

    const workTime = Number(workTimerInput.current?.value);
    const shortBreakTime = Number(shortBreakTimerInput.current?.value);
    const longBreakTime = Number(longBreakTimerInput.current?.value);

    if (isNaN(workTime)) {
      formError.push('O campo foco deve ser um numero')
    }
    if (isNaN(shortBreakTime)) {
      formError.push('O campo descanso curto deve ser um numero')
    }
    if (isNaN(longBreakTime)) {
      formError.push('O campo descanso longo deve ser um numero')
    }
    formError.forEach((e) => showMessage.error(e))

    dispatch({type:TaskActionTypes.CHANGE_SETTINGS, payload: {
      workTime,
      shortBreakTime,
      longBreakTime
    }})

    showMessage.success("tempo salvo com sucesso")
  }
  return (
    <MainTemplete>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <form action='' className='form' onSubmit={handleClick}>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimerInput}
              defaultValue={state.config.workTime}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Descanso Curto'
              ref={shortBreakTimerInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='LongBreakTime'
              labelText='Descanso Longo'
              ref={longBreakTimerInput}
              defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<SaveIcon />} />
          </div>
        </form>
      </Container>
    </MainTemplete>
  );
}

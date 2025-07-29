import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import style from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  return (
    <div className={style.cycles}>
      <span>Ciclos:</span>
      <div className={style.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const type = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycle}_${type}`}
              className={`${style.cycleDot} ${style[type]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[type]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[type]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

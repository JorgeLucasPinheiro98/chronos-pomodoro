import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import style from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle})


  
  return (
  <div className={style.cycles}>
    <span>Ciclos:</span>
    <div className={style.cycleDots}>
      <span className={`${style.cycleDot} ${style.workTime}`}></span>
      {cycleStep.map((_,index) => {
        return (
          <span className={`${} ${}`}>{}</span>
        )
      })}
    </div>
  </div>
)
}

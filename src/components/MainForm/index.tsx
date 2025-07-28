import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../defaultInput";

export function MainForm() {

    return (
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput id='myInput' type='text' labelText='Task' placeholder='Digite algo'/>
          </div>

          <div className='formRow'>
            <p>Proximo intervalo é de 25 min</p>
          </div>

          <div className='formRow'>
            <Cycles/>
          </div>

          <div className='formRow'>
            <DefaultButton color='green' icon={<PlayCircleIcon/>}/>
          </div>
        </form>
    )
}
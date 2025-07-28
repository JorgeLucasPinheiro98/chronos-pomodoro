import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../components/Cycles";
import { DefaultButton } from "../components/DefaultButton";
import { DefaultInput } from "../components/defaultInput";

export function MainForm() {
    return (
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput id='myInput' type='text' labelText='Task' placeholder='Digite algo'/>
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
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
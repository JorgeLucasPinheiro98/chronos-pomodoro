import { Container } from "../../components/container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplete } from "../../templates/MainTemplate/Index";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home() {
  return (
    <MainTemplete>
      <Container>
        <CountDown/>
      </Container>
      <Container>
        <MainForm/>
      </Container>
    </MainTemplete>
  );
}

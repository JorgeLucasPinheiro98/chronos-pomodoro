import { Container } from "../../components/container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../MainForm";
import { MainTemplete } from "../../templates/MainTemplate/Index";

export function Home() {
  return (
    <MainTemplete>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplete>
  );
}

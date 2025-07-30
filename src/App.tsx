import '../src/styles/global.css';
import '../src/styles/theme.css';
import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routers/MainRouter';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter/>
      </MessagesContainer>
    </TaskContextProvider>
  );
}

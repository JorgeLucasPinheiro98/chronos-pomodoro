import { TimerIcon } from 'lucide-react';
import '../src/styles/global.css';
import '../src/styles/theme.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <div>
      <Heading>
          <TimerIcon/>
      </Heading>
    </div>
  );
}

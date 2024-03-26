import Workshop                from './workshop';
import { Button }              from '@ems/common-ui';

export function App() {
  return (
    <div>
      <Workshop>
        <Button label="Click me"/>
      </Workshop>
    </div>
  );
}

export default App;

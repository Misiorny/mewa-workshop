import Workshop                from './workshop';
import { Button }              from '@ems/common-ui';


export function App() {
  return (
    <div>
      <Workshop>
        <Button bgColor="black" color="white" label="Click me"/>
      </Workshop>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Counter } from './component/Counter';
import Todos from './component/Todos';

function App() {
 
  return (
    <div className="App">
      <Counter/>
      <br></br>
      <hr/>
      <br></br>
      <Todos/>
    </div>
  );
}

export default App;

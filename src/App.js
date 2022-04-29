import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';
import { Route, Routes } from 'react-router-dom';
import TodoDetails from './component/TodoDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos/>}/>
        <Route path="/todos/:id" element={<TodoDetails/>}  />

        
      </Routes>
    </div>
  );
}

export default App;

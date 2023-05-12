import './App.css';
import Header from './components/Headre';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;

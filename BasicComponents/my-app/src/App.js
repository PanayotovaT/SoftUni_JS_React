import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>

      <main>
        <TodoList />
      </main>

      <footer>
        <p>
          All rights reserved &copy;
        </p>
      </footer>
    </div>
  );
}

export default App;

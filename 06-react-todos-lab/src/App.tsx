import React from 'react';
import './App.css';
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React TODOs</h1>
        <TodoList todos = {MOCK_TODOS} />
      </header>
    </div>
  );
}

export default App;

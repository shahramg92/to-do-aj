import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import Todos from './containers/Todos';

const App: React.FC = () => {
  console.log('app');
  return (
    <div className="App">
      <header className="App-header">
        <div className="formContainer">
          <AddTodo />
          <Todos />
        </div>
      </header>
    </div>
  );
}

export default App;

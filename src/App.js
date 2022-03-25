import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, setTodos] = useState([
    {
      title: "Finish writing novel",
      completed: true
    },
    {
      title: "Eight million push-ups",
      completed: true
    },
    {
      title: "Summit Mt Kilimanjaro",
      completed: false
    }
  ]);

  const addTodo = title => {
    const newTodos = [...todos, { title, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <Todos todos={todos} setTodos={setTodos} completeTodo={completeTodo} removeTodo={removeTodo} />
      <div className="create-task" >
        <CreateTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

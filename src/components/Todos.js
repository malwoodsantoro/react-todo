import React, { useState } from 'react';
import Todo from './Todo';

function Todos({ todos, completeTodo, removeTodo }) {

  return (
    <div>
      <div className="header">TODO</div><div className="todos">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            key={index} />
        ))}
      </div>
    </div>
  );
}

export default Todos;


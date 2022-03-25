import React from 'react';
 
function Todo({ todo, completeTodo, removeTodo, index}) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title} |
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button style={{ background: "#e95555" }} onClick={() => removeTodo(index)}>x</button>
    </div>
      ); 
};


      export default Todo;


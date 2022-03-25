import React, { useState } from 'react';

function CreateTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue("");
  }

  return (
    <form className="create-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add new task..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default CreateTodo;

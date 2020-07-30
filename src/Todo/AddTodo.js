import React, { useState } from "react";

let incrementalId = 0;

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const newTodo = (text) => ({
    id: incrementalId++,
    text,
    completed: false,
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input value={text} onChange={handleOnChange} />
      <button>ADD</button>
    </form>
  );
};

export default AddTodo;

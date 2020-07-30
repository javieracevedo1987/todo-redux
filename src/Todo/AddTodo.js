import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
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

import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos?.length
          ? todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
          : "Empty list!"}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;

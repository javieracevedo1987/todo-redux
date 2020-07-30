import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, toggleTodo }) => {
  const isCompleted = (todo) => todo.completed;
  return (
    <div className="todo-list">
      <ul>
        {todos?.length
          ? todos.map((todo) => (
              <li
                key={todo.id}
                onDoubleClick={() => toggleTodo(todo.id)}
                className={isCompleted(todo) ? "completed-todo" : null}
              >
                {todo.text}
              </li>
            ))
          : "Empty list!"}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;

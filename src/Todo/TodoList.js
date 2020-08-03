import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const isCompleted = (todo) => todo.completed;
  const canRemove = (todo) =>
    isCompleted(todo) ? (
      <i
        onClick={() => removeTodo(todo.id)}
        className="delete-todo material-icons"
      >
        delete
      </i>
    ) : null;

  return (
    <li
      key={todo.id}
      onDoubleClick={() => toggleTodo(todo.id)}
      className={isCompleted(todo) ? "completed-todo" : null}
    >
      {todo.text}
      {canRemove(todo)}
    </li>
  );
};

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos?.length
          ? todos.map((todo) => (
              <TodoItem
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))
          : "Empty list!"}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;

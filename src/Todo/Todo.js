import React from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { addTodo } from "../store/actions/todos";
import { getTodos } from "../store/selectors/todos";

const Todo = ({ todos, addTodo }) => {
  return (
    <div className="todo-container">
      <h1>Todo list !!!</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = { addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

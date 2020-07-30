import React from "react";
import { connect } from "react-redux";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { addTodo } from "../store/actions/todos";
import { getTodosByFilter } from "../store/selectors/todos";
import { getFilter } from "../store/selectors/filter";
import { setFilter } from "../store/actions/filter";
import { FilterTodo } from "./FilterTodo";
import "./Todo.css";

const Todo = ({ todos, addTodo, filter, setFilter }) => {
  return (
    <div className="todo-container">
      <h1>Todo list !!!</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
      <FilterTodo setFilter={setFilter} activeFilter={filter} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodosByFilter(state, getFilter(state)),
  filter: getFilter(state),
});

const mapDispatchToProps = { addTodo, setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

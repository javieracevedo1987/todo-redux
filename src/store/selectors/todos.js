import { FILTERS } from "../../Todo/constants";

export const getTodos = (state) => state.todos;
export const getTodosByFilter = (state, filter) => {
  const todos = getTodos(state);

  switch (filter) {
    case FILTERS.ALL:
      return todos;
    case FILTERS.COMPLETED:
      return todos.filter((todo) => todo.completed);
    case FILTERS.INCOMPLETE:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

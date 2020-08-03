import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/todos";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { todo } = action.payload;
      return [...state, todo];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    }
    default:
      return state;
  }
};

export default todos;

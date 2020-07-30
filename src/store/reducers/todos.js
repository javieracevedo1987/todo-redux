import { ADD_TODO } from "../actions/todos";

const initialState = [];
let incrementalId = 0;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const todo = {
        id: incrementalId++,
        text: action.payload.text,
      };
      return [...state, todo];

    default:
      return state;
  }
};

export default todos;

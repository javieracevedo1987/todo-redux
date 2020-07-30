import { SET_FILTER } from "../actions/filter";

const initialState = "";

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      const filter = action.payload;
      return filter;

    default:
      return state;
  }
};

export default filter;

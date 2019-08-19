import { AN_ACTION } from "../actions/index";

const initialState = {};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case AN_ACTION:
      return {
        ...state
      };
    default:
      return state;
  }
};

import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions";

const initialState = {   
  registering: false,
  registerError: null
};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    // case AN_ACTION:
    //   return {
    //     ...state
    //   }
      
      case REGISTER_START: {
          return {
            ...state,
            registering: true,
            registerError: null,
          }
      }
      case REGISTER_SUCCESS: {
          return {
            ...state,
            registering: false
          }
      }
      case REGISTER_FAILURE: {
          return {
            ...state,
            registering: false,
            registerError: "failed to register"
          }
      }

    default:
      return state;
  }
};

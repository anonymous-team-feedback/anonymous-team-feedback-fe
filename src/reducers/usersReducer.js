import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/usersActions.js";

const initialState = {
    registering: false,
    registerStartError: null,
    registerFailureError: null

};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START: {
            return {
                ...state,
                registering: true,
                registerStartError: null
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
                registerFailureError: null
            }
        }

        default:
            return state;
    }
};

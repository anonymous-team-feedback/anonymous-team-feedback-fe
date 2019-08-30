import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,  REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/usersActions';

const initialState = {
    user: {
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        user_id: ''
    },
    loginStart: false,
    isLoggedIn: false,
    loginError: false,
    registering: false,
    registerError: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loginStart: true,
                user: {
                    token: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    user_id: ''
                },
                isLoggedIn: false,
                loginError: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginStart: false,
                user: action.payload,
                isLoggedIn: true,
                loginError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginStart: false,
                user: {
                    token: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    user_id: ''
                },
                isLoggedIn: false,
                loginError: true
            }
        case REGISTER_START: {
          return {
            ...state,
            registering: true,
            registerError: action.payload
          };
        }
        case REGISTER_SUCCESS: {
          return {
            ...state,
            registering: false
          };
        }
        case REGISTER_FAILURE: {
          return {
            ...state,
            registering: false,
            registerError: action.payload
          };
        }

    default:
      return state;
  }
};

export default usersReducer;
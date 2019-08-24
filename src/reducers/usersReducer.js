import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/usersActions';

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
    loginError: false
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
        default:
            return state;
    }
};

export default usersReducer;
import {LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/usersActions';

const initialState = {
    user: {
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        user_id: ''
    },
    loginLoading: false,
    isLoggedIn: false,
    loginError: false
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loginLoading: true,
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
                loginLoading: false,
                user: action.payload,
                isLoggedIn: true,
                loginError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
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
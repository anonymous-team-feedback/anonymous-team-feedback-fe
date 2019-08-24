import axios from 'axios';
// login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export function login(email, password, history) {
    return dispatch => {
        dispatch({ type: LOGIN_START });

        const endpoint = 'http://localhost:5050/api/auth/login';
        const user = {
            email,
            password
        };

        axios
            .post(endpoint, user)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('firstName', res.data.firstName);
                localStorage.setItem('lastName', res.data.lastName);
                localStorage.setItem('user_id', res.data.user_id);

                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                history.push('/');
                console.log(user)
                history.push('/');
            })
            .catch(err => {
                dispatch({ type: LOGIN_FAILURE, payload: err })
            })
    }
};
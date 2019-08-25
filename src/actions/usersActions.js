import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const host = "http://anonymous-team-feedback-stage.herokuapp.com/api/";

export function login(email, password, history) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    const user = {
      email,
      password
    };

    axios
      .post(`${host}auth/login`, user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("_id", res.data._id);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        history.push("/dashboard");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err });
      });
  };
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
  dispatch({ type: REGISTER_START });

  return axios
    .post(`${host}auth/register/`, newUser)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("_id", res.data._id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      alert(JSON.stringify(err));
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

import axios from "axios";

const host = "https://anonymous-team-feedback-stage.herokuapp.com/api/";
const token = { headers: { ["x-auth-token"]: localStorage.getItem("token") } };

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err });
      });
      history.push("/dashboard");
  };
}

export const CHECK_AUTH_STATUS_SUCCESS = "CHECK_AUTH_STATUS_SUCCESS";
export const CHECK_AUTH_STATUS_FAILURE = "CHECK_AUTH_STATUS_FAILURE";

export const checkAuthStatus = () => dispatch => {
  if (localStorage.getItem("token")) {
    dispatch({ type: CHECKLOGIN_SUCCESS });
  } else {
    dispatch({ type: CHECKLOGIN_FAILURE });
  }
};

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
  dispatch({ type: REGISTER_START });

  return axios
    .post(`${host}auth/register/`, newUser)
    .then(res => {
      localStorage.setItem("_id", res.data._id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      alert(JSON.stringify(err));
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const SEARCH_EMAIL_START = "SEARCH_EMAIL_START";
export const SEARCH_EMAIL_SUCCESS = "SEARCH_EMAIL_SUCCESS";
export const SEARCH_EMAIL_FAILURE = "SEARCH_EMAIL_FAILURE";
export const TRANSFORM_EMAILS_FOR_DROPDOWN = "TRANSFORM_EMAILS_FOR_DROPDOWN";

export const searchEmails = email => dispatch => {

  dispatch({ type: SEARCH_EMAIL_START });

  return axios
    .post(`${host}posts/users`, { email }, token)
    .then(res => {
      dispatch({ type: SEARCH_EMAIL_SUCCESS, payload: res.data });
      dispatch({ type: TRANSFORM_EMAILS_FOR_DROPDOWN, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
      }
      dispatch({ type: SEARCH_EMAIL_FAILURE, payload: err });
    });
};

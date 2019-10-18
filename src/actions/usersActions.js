import axios from "axios";
import { saveAuthInfo, removeAuthInfo, getAuthInfo } from "../util/login.js";
import {getTeamData} from './joinTeamRequestActions'
import {
  GET_TEAM_DATA_SUCCESS
} from '../actions/joinTeamRequestActions'

// const host = "https://anonymous-team-feedback.herokuapp.com/api/";
const host = "http://localhost:5050/api/";

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
        saveAuthInfo(res.data.token, res.data._id);
        if(res.data.team) dispatch({type: GET_TEAM_DATA_SUCCESS, payload: res.data.team})
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err });
      });
  };
}

export const CHECK_AUTH_STATUS_SUCCESS = "CHECK_AUTH_STATUS_SUCCESS";
export const CHECK_AUTH_STATUS_FAILURE = "CHECK_AUTH_STATUS_FAILURE";

export const checkAuthStatus = () => async dispatch => {
  const authInfo = await getAuthInfo();
  if (authInfo.token) {
    dispatch({ type: CHECK_AUTH_STATUS_SUCCESS });
  } else {
    dispatch({ type: CHECK_AUTH_STATUS_FAILURE });
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
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const SEARCH_EMAIL_START = "SEARCH_EMAIL_START";
export const SEARCH_EMAIL_SUCCESS = "SEARCH_EMAIL_SUCCESS";
export const SEARCH_EMAIL_FAILURE = "SEARCH_EMAIL_FAILURE";
export const TRANSFORM_EMAILS_FOR_DROPDOWN = "TRANSFORM_EMAILS_FOR_DROPDOWN";

export const searchEmails = email => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SEARCH_EMAIL_START });

  return axios
    .post(
      `${host}posts/users`,
      { email },
      { headers: { "x-auth-token": authInfo.token } }
    )
    .then(res => {
      dispatch({ type: SEARCH_EMAIL_SUCCESS, payload: res.data });
      dispatch({ type: TRANSFORM_EMAILS_FOR_DROPDOWN, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SEARCH_EMAIL_FAILURE, payload: err });
    });
};

export const AUTO_LOGIN= "AUTO_LOGIN";
export const AUTO_LOGIN_SUCCESS= "AUTO_LOGIN_SUCCESS";
export const AUTO_LOGIN_FAIL= "AUTO_LOGIN_FAIL";

export const autoLogin = () => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({type: AUTO_LOGIN});

  return axios
  .get(`${host}user/${localStorage.getItem('_id')}`, 
  {headers: {
    "x-auth-token": authInfo.token
  }})
  .then(res => {
    if(res.data.team) dispatch({type: GET_TEAM_DATA_SUCCESS, payload: res.data.team})
    dispatch({type: AUTO_LOGIN_SUCCESS, payload: res.data})

  })
  .catch(err => {
    dispatch({type: AUTO_LOGIN_FAIL, payload: err})
  })
}
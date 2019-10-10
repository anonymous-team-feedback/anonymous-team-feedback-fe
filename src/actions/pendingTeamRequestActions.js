import axios from "axios";
import { removeAuthInfo, getAuthInfo } from "../util/login.js";

const host = "https://anonymous-team-feedback.herokuapp.com/api/";
// const host = "http://localhost:5050/api/";

export const GET_TEAM_BY_ID_START = "GET_TEAM_BY_ID_START";
export const GET_TEAM_BY_ID_SUCCESS = "GET_TEAM_BY_ID_SUCCESS";
export const GET_TEAM_BY_ID_FAILURE = "GET_TEAM_BY_ID_FAILURE";

export const getTeamByID = userID => async dispatch => {

  const authInfo = await getAuthInfo();
  dispatch({ type: GET_TEAM_BY_ID_START });
  const { _id } = userID;
  const newUserID= { _id };

  return axios
    .get(`${host}teams`, newUserID, {
      headers: { ["x-auth-token"]: authInfo.token }
    })
    .then(res => {
      dispatch({ type: GET_TEAM_BY_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: GET_TEAM_BY_ID_FAILURE, payload: err });
    });
};

export const FETCH_ALL_REQUESTS_START = "FETCH_ALL_REQUESTS_START";
export const FETCH_ALL_REQUESTS_SUCCESS = "FETCH_ALL_REQUESTS_SUCCESS";
export const FETCH_ALL_REQUESTS_FAILURE = "FETCH_ALL_REQUESTS_FAILURE";

export const fetchAllRequests = teamSlug => async dispatch => {

  const authInfo = await getAuthInfo();
  dispatch({ type: FETCH_ALL_REQUESTS_START });
  const { slug } = teamSlug;
  const newSlug = { slug };

  return axios
    .get(`${host}joinTeam`, newSlug, {
      headers: { ["x-auth-token"]: authInfo.token }
    })
    .then(res => {
      dispatch({ type: FETCH_ALL_REQUESTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: FETCH_ALL_REQUESTS_FAILURE, payload: err });
    });
};

export const SUBMIT_REQUEST_START = "SUBMIT_REQUEST_START";
export const SUBMIT_REQUEST_SUCCESS = "SUBMIT_REQUEST_SUCCESS";
export const SUBMIT_REQUEST_FAILURE = "SUBMIT_REQUEST_FAILURE";

export const submitRequest = request => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_REQUEST_START });
  const { team , members } = request;
  const newRequest = { team , members };

  return axios
    .post(`${host}requests`, newRequest, {
      headers: { ["x-auth-token"]: authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SUBMIT_REQUEST_FAILURE, paylod: err });
    });
};
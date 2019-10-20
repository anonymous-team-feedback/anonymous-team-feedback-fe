import axios from "axios";
import { removeAuthInfo, getAuthInfo } from "../util/login.js";

// const host = "https://anonymous-team-feedback.herokuapp.com/api/";
const host = "http://localhost:5050/api/";

export const SUBMIT_JOIN_EXISTING_TEAM_START =
  "SUBMIT_JOIN_EXISTING_TEAM_START";
export const SUBMIT_JOIN_EXISTING_TEAM_SUCCESS =
  "SUBMIT_JOIN_EXISTING_TEAM_SUCCESS";
export const SUBMIT_JOIN_EXISTING_TEAM_FAILURE =
  "SUBMIT_JOIN_EXISTING_TEAM_FAILURE";

export const submitJoinExistingTeam = (teamSlug) => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_JOIN_EXISTING_TEAM_START });

  return axios
    .post(`${host}joinTeam`, teamSlug, {
      headers: { ["x-auth-token"]: authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_JOIN_EXISTING_TEAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status && err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SUBMIT_JOIN_EXISTING_TEAM_FAILURE, payload: err });
    });
};

export const SUBMIT_CREATE_NEW_TEAM_START = "SUBMIT_CREATE_NEW_TEAM_START";
export const SUBMIT_CREATE_NEW_TEAM_SUCCESS = "SUBMIT_CREATE_NEW_TEAM_SUCCESS";
export const SUBMIT_CREATE_NEW_TEAM_FAILURE = "SUBMIT_CREATE_NEW_TEAM_FAILURE";

export const submitCreateNewTeam = (newTeamInfo) => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_CREATE_NEW_TEAM_START });
  const { name, slug } = newTeamInfo;
  const newNewTeamInfo = { name, slug };

  return axios
    .post(`${host}teams`, newNewTeamInfo, {
      headers: { "x-auth-token": authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_CREATE_NEW_TEAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({type: SUBMIT_CREATE_NEW_TEAM_FAILURE, payload:err})
    })
};

export const FETCH_ALL_MEMBERS_START = "FETCH_ALL_MEMBERS_START";
export const FETCH_ALL_MEMBERS_SUCCESS = "FETCH_ALL_MEMBERS_SUCCESS";
export const FETCH_ALL_MEMBERS_FAILURE = "FETCH_ALL_MEMBERS_FAILURE";

export const fetchAllTeamMembers = slug => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: FETCH_ALL_MEMBERS_START });
  return axios
    .get(`${host}teams/${slug}`, {
      headers: { "x-auth-token": authInfo.token }
    })
    .then(res => {
      if (res.status === 400) {
        dispatch({ type: FETCH_ALL_MEMBERS_FAILURE, payload: ({ message: 'No team found with that slug' }) })
      } else {
        dispatch({
          type: FETCH_ALL_MEMBERS_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: FETCH_ALL_MEMBERS_FAILURE, payload: err });
    });
};

export const GET_TEAM_DATA_START = "GET_TEAM_DATA_START";
export const GET_TEAM_DATA_SUCCESS = "GET_TEAM_DATA_SUCCESS";
export const GET_TEAM_DATA_FAIL = "GET_TEAM_DATA_FAIL";

export const getTeamData = id => async dispatch => {
  const authInfo = await getAuthInfo()
  dispatch({ type: GET_TEAM_DATA_START })
  return axios
    .get(`${host}teams/u/${id}`, { headers: { "x-auth-token": authInfo.token } })
    .then(res => {
      dispatch({ type: GET_TEAM_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GET_TEAM_DATA_FAIL, payload: { error: err } }))
}

export const GET_PENDING_START = "GET_PENDING_START";
export const GET_PENDING_SUCCESS = "GET_PENDING_SUCCESS";
export const GET_PENDING_FAIL = "GET_PENDING_FAIL";

export const getPending = slug => async dispatch => {
  const authInfo = await getAuthInfo()
  dispatch({ type: GET_PENDING_START })
  return axios
    .get(`${host}jointeam/${slug}`, { headers: { 'x-auth-token': authInfo.token } })
    .then(res => {
      setTimeout(() => {
        dispatch({ type: GET_PENDING_SUCCESS, payload: res.data })
      }, 4000);
    })
    .catch(err => dispatch({ type: GET_PENDING_FAIL, payload: err }))
}

export const APPROVE_PENDING_START = "APPROVE_PENDING_START";
export const APPROVE_PENDING_SUCCESS = "APPROVE_PENDING_SUCCESS";
export const APPROVE_PENDING_FAIL = "APPROVE_PENDING_FAIL";

export const approvePending = (user, user_id, request_id) => async dispatch => {
  const authInfo = await getAuthInfo()
  dispatch({ type: APPROVE_PENDING_START })
  return axios
    .put(`${host}jointeam/`, ({ user: user, user_id: user_id, request_id: request_id }), { headers: { 'x-auth-token': authInfo.token } })
    .then(res => {
      dispatch({ type: APPROVE_PENDING_SUCCESS, payload: res.data })
      console.log('data: ', res.data)
      dispatch(getPending(res.data.slug))
    })
    .catch(err => dispatch({ type: APPROVE_PENDING_FAIL, payload: err }))
}

export const RESET_PENDING_START = 'RESET_PENDING_START'
export const RESET_PENDING_SUCCESS = 'RESET_PENDING_SUCCESS'
export const RESET_PENDING_FAIL = 'RESET_PENDING_FAIL'

export const resetPending = () => async dispatch => {
  const authInfo = await getAuthInfo()
  dispatch({ type: RESET_PENDING_START })
  return axios
    (res => {
      setTimeout(() => {
        dispatch({ type: RESET_PENDING_SUCCESS, payload: res.data })
      }, 0);
    })
    .catch(err => dispatch({ type: RESET_PENDING_FAIL, payload: err }))
}

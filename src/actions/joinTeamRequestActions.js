import axios from "axios";
import { removeAuthInfo, getAuthInfo } from "../util/login.js";

// const host = "https://anonymous-team-feedback.herokuapp.com/api/";
const host = "http://localhost:5050/api/";


export const SUBMIT_JOIN_EXISTING_TEAM_START = "SUBMIT_JOIN_EXISTING_TEAM_START";
export const SUBMIT_JOIN_EXISTING_TEAM_SUCCESS = "SUBMIT_JOIN_EXISTING_TEAM_SUCCESS";
export const SUBMIT_JOIN_EXISTING_TEAM_FAILURE = "SUBMIT_JOIN_EXISTING_TEAM_FAILURE";

export const submitJoinExistingTeam = teamSlug => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_JOIN_EXISTING_TEAM_START });
  const { slug } = teamSlug;
  const newTeamSlug = { slug };

  return axios
    .post(`${host}joinTeam`, newTeamSlug, {
      headers: { "x-auth-token": authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_JOIN_EXISTING_TEAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SUBMIT_JOIN_EXISTING_TEAM_FAILURE, payload: err });
    });
};

export const SUBMIT_CREATE_NEW_TEAM_START = "SUBMIT_CREATE_NEW_TEAM_START";
export const SUBMIT_CREATE_NEW_TEAM_SUCCESS = "SUBMIT_CREATE_NEW_TEAM_SUCCESS";
export const SUBMIT_CREATE_NEW_TEAM_FAILURE = "SUBMIT_CREATE_NEW_TEAM_FAILURE";

export const submitCreateNewTeam = newTeamInfo => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_CREATE_NEW_TEAM_START });
  const { name , slug } = newTeamInfo;
  const newNewTeamInfo = { name, slug };

  return axios
    .post(`${host}teams`, newNewTeamInfo, {
      headers: { "x-auth-token": authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_CREATE_NEW_TEAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SUBMIT_CREATE_NEW_TEAM_FAILURE, payload: err });
    });
};

export const FETCH_ALL_MEMBERS_START = "FETCH_ALL_MEMBERS_START";
export const FETCH_ALL_MEMBERS_SUCCESS = "FETCH_ALL_MEMBERS_SUCCESS";
export const FETCH_ALL_MEMBERS_FAILURE = "FETCH_ALL_MEMBERS_FAILURE";

export const fetchAllTeamMembers = (slug) => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: FETCH_ALL_MEMBERS_START });
  return axios
    .get(`${host}teams/${slug}`, { headers: { "x-auth-token": authInfo.token } })
    .then(res => {
      if (res.status === 400){
        dispatch({type: FETCH_ALL_MEMBERS_FAILURE, payload: ({message: 'No team found with that slug'})})
      } else{
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

export const GET_TEAM_DATA_START = 'GET_TEAM_DATA_START';
export const GET_TEAM_DATA_SUCCESS = 'GET_TEAM_DATA_SUCCESS';
export const GET_TEAM_DATA_FAIL = 'GET_TEAM_DATA_FAIL';

export const getTeamData = id => async dispatch => {
  const authInfo = await getAuthInfo()
  dispatch({type: GET_TEAM_DATA_START})
  return axios
  .get(`${host}teams/u/${id}`, { headers: { "x-auth-token":authInfo.token }})
  .then(res => {
    dispatch({type: GET_TEAM_DATA_SUCCESS, payload: res.data})})
  .catch(err => dispatch({type: GET_TEAM_DATA_FAIL, payload: {error: err}}))
}


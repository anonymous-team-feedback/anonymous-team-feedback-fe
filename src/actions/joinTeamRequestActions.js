import axios from "axios";
import { removeAuthInfo, getAuthInfo } from "../util/login.js";

const host = "https://anonymous-team-feedback.herokuapp.com/api/";
// const host = "http://localhost:5050/api/";

export const SUBMIT_CREATE_NEW_TEAM_START = "SUBMIT_FEEDBACK_START";
export const SUBMIT_CREATE_NEW_TEAM_SUCCESS = "SUBMIT_FEEDBACK_SUCCESS";
export const SUBMIT_CREATE_NEW_TEAM_FAILURE = "SUBMIT_FEEDBACK_FAILURE";

export const submitCreateNewTeam = newTeamInfo => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_CREATE_NEW_TEAM_START });
  const { name , slug } = newTeamInfo;
  const newNewTeamInfo = { name, slug };

  return axios
    .post(`${host}teams`, newNewTeamInfo, {
      headers: { ["x-auth-token"]: authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_CREATE_NEW_TEAM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SUBMIT_CREATE_NEW_TEAM_FAILURE, paylod: err });
    });
};

export const FETCH_ALL_MEMBERS_START = "FETCH_ALL_MEMBERS_START";
export const FETCH_ALL_MEMBERS_SUCCESS = "FETCH_ALL_MEMBERS_SUCCESS";
export const FETCH_ALL_MEMBERS_FAILURE = "FETCH_ALL_MEMBERS_FAILURE";

export const fetchAllTeamMembers = () => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: FETCH_ALL_MEMBERS_START });
  return axios
    .get(`${host}teams/:slug`, { headers: { ["x-auth-token"]: authInfo.token } })
    .then(res => {
      dispatch({
        type: FETCH_ALL_MEMBERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: FETCH_ALL_MEMBERS_FAILURE, payload: err });
    });
};


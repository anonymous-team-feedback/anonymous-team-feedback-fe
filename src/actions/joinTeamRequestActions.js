import axios from "axios";
import { removeAuthInfo, getAuthInfo } from "../util/login.js";

const host = "https://anonymous-team-feedback-stage.herokuapp.com/api/";

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
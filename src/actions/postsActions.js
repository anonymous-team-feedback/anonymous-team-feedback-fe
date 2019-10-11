import axios from "axios";
import { removeAuthInfo, getAuthInfo } from "../util/login.js";

// const host = "https://anonymous-team-feedback.herokuapp.com/api/";
const host = "http://localhost:5050/api/";

export const FETCH_ALL_POSTS_START = "FETCH_ALL_POSTS_START";
export const FETCH_ALL_POSTS_SUCCESS = "FETCH_ALL_POSTS_SUCCESS";
export const FETCH_ALL_POSTS_FAILURE = "FETCH_ALL_POSTS_FAILURE";

export const fetchAllPosts = () => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: FETCH_ALL_POSTS_START });
  return axios
    .get(`${host}posts/`, { headers: { "x-auth-token": authInfo.token } })
    .then(res => {
      dispatch({
        type: FETCH_ALL_POSTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: FETCH_ALL_POSTS_FAILURE, payload: err });
    });
};

export const SUBMIT_FEEDBACK_START = "SUBMIT_FEEDBACK_START";
export const SUBMIT_FEEDBACK_SUCCESS = "SUBMIT_FEEDBACK_SUCCESS";
export const SUBMIT_FEEDBACK_FAILURE = "SUBMIT_FEEDBACK_FAILURE";

export const submitFeedback = feedback => async dispatch => {
  const authInfo = await getAuthInfo();
  dispatch({ type: SUBMIT_FEEDBACK_START });
  const { date, post, poster, colleague } = feedback;
  const newFeedback = { date, post, poster, colleague };

  return axios
    .post(`${host}posts`, newFeedback, {
      headers: { "x-auth-token": authInfo.token }
    })
    .then(res => {
      dispatch({ type: SUBMIT_FEEDBACK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 401) {
        removeAuthInfo();
      }
      dispatch({ type: SUBMIT_FEEDBACK_FAILURE, paylod: err });
    });
};

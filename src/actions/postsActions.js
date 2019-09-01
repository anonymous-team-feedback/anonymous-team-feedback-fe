import axios from "axios";

export const FETCH_ALL_POSTS_START = 'FETCH_ALL_POSTS_START';
export const FETCH_ALL_POSTS_SUCCESS = 'FETCH_ALL_POSTS_SUCCESS';
export const FETCH_ALL_POSTS_FAILURE = 'FETCH_ALL_POSTS_FAILURE';

const host = "https://anonymous-team-feedback-stage.herokuapp.com/api/";

export const fetchAllPosts = () => dispatch => {
    dispatch({ type: FETCH_ALL_POSTS_START });
    const token = { headers: { ["x-auth-token"]: localStorage.getItem("token") } };
    // Do I need to provide a token or id?
    return axios.get(`${host}posts/`, token)
    .then(res => {
        dispatch({
            type: FETCH_ALL_POSTS_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({ type: FETCH_ALL_POSTS_FAILURE, payload: err })
    });
};

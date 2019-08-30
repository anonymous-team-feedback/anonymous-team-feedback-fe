import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const host = "https://anonymous-team-feedback-stage.herokuapp.com/api/";

export const fetchAllPosts = () => dispatch => {
    dispatch({ type: FETCH_START });
    const token = { headers: { ["x-auth-token"]: localStorage.getItem("token") } };
    // Do I need to provide a token or id?
    return axios.get(`${host}posts/`, token)
    .then(res => {
        dispatch({
            type: FETCH_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err })
    });
};

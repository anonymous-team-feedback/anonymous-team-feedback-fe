import axios from "axios";

const host = "https://anonymous-team-feedback-stage.herokuapp.com/api/";
const token = { headers: { ["x-auth-token"]: localStorage.getItem("token") } };

export const SUBMIT_FEEDBACK_START = "SUBMIT_FEEDBACK_START";
export const SUBMIT_FEEDBACK_SUCCESS = "SUBMIT_FEEDBACK_SUCCESS";
export const SUBMIT_FEEDBACK_FAILURE = "SUBMIT_FEEDBACK_FAILURE";

export const submitFeedback = feedback => dispatch => {
  dispatch({ type: SUBMIT_FEEDBACK_START });
  const { date, post, poster, colleague } = feedback;
  const newFeedback = { date, post, poster, colleague };

  return axios
    .post(`${host}posts`, newFeedback, token)
    .then(res => {
      dispatch({ type: SUBMIT_FEEDBACK_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("_id");
      }
      dispatch({ type: SUBMIT_FEEDBACK_FAILURE, paylod: err });
    });
};

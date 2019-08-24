import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
  dispatch({ type: REGISTER_START });

  return axios
    .post(
      "https://anonymous-team-feedback.herokuapp.com/api/auth/register",
      newUser
    )
    .then(res => {
      localStorage.setItem("token", res.headers["x-auth-token"]);
      localStorage.setItem("_id", res.data._id);
      alert(JSON.stringify(res.data));
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      alert(JSON.stringify(err));
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
   dispatch({type: REGISTER_START});
   console.log(newUser);  

   return axios.post('https://anonymous-team-feedback.herokuapp.com/api/auth/register', newUser)
   .then(res => {
      console.log(res)
      dispatch({type: REGISTER_SUCCESS});
   })
   .catch(err => {
      console.log("register error:", err);
      dispatch({ type: REGISTER_FAILURE });
      return false
      })
}
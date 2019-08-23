import axios from "axios";

// export const AN_ACTION = "AN_ACTION";

// export const doAnAction = doee => {
//   return {
//     type: AN_ACTION,
//     payload: doee
//   };
// };

// REGISTRATION ACTIONS //

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = newUser => dispatch => {
   dispatch({type: REGISTER_START});
   console.log(newUser);  

   return axios.post('https://serversite.com/api/auth/register', newUser)
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
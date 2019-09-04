import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer.js";
import { postsReducer } from "./postsReducer.js"

export default combineReducers({ usersReducer, postsReducer });
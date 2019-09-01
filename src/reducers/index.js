import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { postsReducer } from "./postsReducer.js"

export default combineReducers({ usersReducer, postsReducer });
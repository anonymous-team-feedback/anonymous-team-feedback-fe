import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer.js";
import { postsReducer } from "./postsReducer.js";
import { joinTeamRequestReducer } from "./joinTeamRequestReducer.js";

export default combineReducers({ usersReducer, postsReducer, joinTeamRequestReducer });

import { combineReducers } from "redux";
import { exampleReducer } from "./exampleReducer.js";
import { whateverReducer } from "./whateverReducer";

export default combineReducers({ exampleReducer /*, whateverReducer*/ });
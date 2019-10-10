import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./reducers/usersReducer";
import postsReducer from "./reducers/postsReducer";
import joinTeamRequestReducer from "./reducers/joinTeamRequestReducer";
import pendingTeamRequestReducer from "./reducers/pendingTeamRequestReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";

import App from "./App";

const store = createStore(
  combineReducers({ usersReducer, postsReducer, joinTeamRequestReducer, pendingTeamRequestReducer}),
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

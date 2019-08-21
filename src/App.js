import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Register from "./components/Register/Register.js";

const App = props => {
  return (
    <div className="App">
      <h1>🙊🙉🙈😎🗣👉anonymous feedback app👈🗣😎🙊🙉🙈</h1>{" "}
      <div>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Route exact path="/" component={Login} />
          </div>
          <div>
            <Route path="/login" component={Login} />
          </div>
          <div>
            <Route path="/signup" component={Register} />
          </div>
          <div>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

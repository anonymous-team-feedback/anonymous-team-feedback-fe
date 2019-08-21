import React from "react";
import { connect } from "react-redux";

import Dashboard from "../Dashboard/Dashboard.js";
import Register from "../Register/Register.js";

const Login = props => {
  return (
    <div className="Login">
      <h1>Login component💻</h1>
      <Dashboard />
      <Register />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Login);

import React from "react";
import { connect } from "react-redux";

const Login = props => {
  return (
    <div className="Login">
      <h1>Login component💻</h1>
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

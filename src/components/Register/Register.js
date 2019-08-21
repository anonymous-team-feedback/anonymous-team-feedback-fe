import React from "react";
import { connect } from "react-redux";

const Register = props => {
  return (
    <div className="Register">
      <h1>Register component🙋‍♀️</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Register);

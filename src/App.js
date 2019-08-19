import React from "react";
import { connect } from "react-redux";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1>🙊🙉🙈😎🗣👉anonymous feedback app👈🗣😎🙊🙉🙈</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(App);

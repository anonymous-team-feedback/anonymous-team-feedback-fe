import React from "react";
import { connect } from "react-redux";

const Navbar = props => {
  return (
    <div className="Navbar">
      <h1>Navbar component🍫</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Navbar);

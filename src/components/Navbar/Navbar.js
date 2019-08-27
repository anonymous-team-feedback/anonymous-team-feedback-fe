import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="Navbar">
      <div>
        <h1>Incog</h1>
      </div>
      {!props.isLoggedIn && <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link>
      </div>}
      {props.isLoggedIn && <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navbar);

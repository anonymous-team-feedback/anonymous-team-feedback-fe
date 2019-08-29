import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navbar = props => {
  return (
    <nav className="Navbar">
      <div>
        <h1>Incog</h1>
      </div>
      {/* conditionally render login and signup routes */}
      {!props.isLoggedIn && <form>
        <input name='Email' type='text' placeholder='email'/>
        <input name='Password' type='text' placeholder='password'/>
        <button type='submit'>Sign in</button>
      </form>}
      {/* conditionally render dashboard route */}
      {props.isLoggedIn && <div>
        <Link to="/dashboard">Dashboard</Link> {/* dashboard route */}
      </div>}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn // set isLoggedIn to props
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navbar);

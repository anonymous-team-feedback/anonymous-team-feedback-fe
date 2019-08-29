import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navbar = props => {
  return (
    <NavBar className="Navbar">
      <div>
        <Title>InCog</Title>
      </div>
      {/* conditionally render login and signup routes */}
      {!props.isLoggedIn && <form>
        <Field name='Email' type='text' placeholder='email'/>
        <Field name='Password' type='text' placeholder='password'/>
        <button type='submit'>Sign in</button>
      </form>}
      {/* conditionally render dashboard route */}
      {props.isLoggedIn && <div>
        <Link to="/dashboard">Dashboard</Link> {/* dashboard route */}
      </div>}
    </NavBar>
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

const NavBar = styled.nav`
background-color: #393945;
display: flex;
justify-content: space-between;
padding: 0.5rem 20rem 0.5rem 2rem;
align-items: center;
`
const Title = styled.h1`
color: white;
font-family: sans-serif;
`
const Field = styled.input`
background-color: #4d505f;
border: none;
border-radius: 4px;
padding: 0.3rem 0.8rem;
margin: 0 0.5rem;
`
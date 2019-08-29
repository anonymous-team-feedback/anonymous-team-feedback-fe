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
        <Button type='submit'>Sign in</Button>
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
margin: 0 0.7rem;
`
const Button = styled.button`
border: 1px solid #51e3c2;
border-radius: 4px;
background-color: #393945;
color: #51e3c2;
font-weight: bold;
padding: 0.3rem 0.6rem;
font-size: 0.9rem;
margin-left: 0.5rem;
`
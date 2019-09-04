import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  state = {

  }
  render() {
    return (
      <NavBar className="Navbar">
        <div>
          <Title to='/'>InCog</Title>
        </div>

        {/* if not logged in, display inputs fields */}
        {!this.props.isLoggedIn && this.props.location.pathname != '/login' && this.props.location.pathname != '/' &&
          <form>
            <Field name='Email' type='text' placeholder='email' />
            <Field name='Password' type='password' placeholder='password' />
            <Button type='submit'>Sign in</Button>
            <ButtonLink to='/register'>Register</ButtonLink>
          </form>
        }
      </NavBar>
    )
  }
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn // set isLoggedIn to props
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(Navbar));

const NavBar = styled.nav`
background-color: #393945;
display: flex;
justify-content: space-between;
padding: 0.5rem 12rem 0.5rem 2rem;
align-items: center;
`
const Title = styled(Link)`
color: white;
font-family: sans-serif;
font-size: 1.8rem;
font-weight: bold;
transition: color .1s ease-in-out;

:hover{
  color: #51e3c2;
}
`
const Field = styled.input`
background-color: #4d505f;
border: none;
border-radius: 4px;
padding: 0.3rem 0.8rem;
margin: 0 0.7rem;
color: white;
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
transition: .1s ease-in-out;
:hover{
  color: white;
  background-color: #51e3c2;
}
`
const ButtonLink = styled(Link)`
color: #51e3c2;
font-weight: bold;
padding: 0.3rem 0.6rem;
font-size: 0.9rem;
margin-left: 0.5rem;
:hover{
  color: white;
}
`
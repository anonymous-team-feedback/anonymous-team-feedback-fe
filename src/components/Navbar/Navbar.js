import React from "react";
import {connect} from "react-redux";
import {NavBar, Field, FormGroup, NavBarLoginContainer, NavBarButtonsContainer} from "./navbar-style.js";
import {Button, Header} from "semantic-ui-react";

import {Link, withRouter} from "react-router-dom";
import {login} from "../../actions/usersActions";
import {removeAuthInfo} from "../../util/login.js";
import {
    resetPending
  } from "../../actions/joinTeamRequestActions";
  


class Navbar extends React.Component {
    state = {
        email: "",
        password: "",
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this
            .props
            .login(this.state.email, this.state.password, this.props.history);
        this.setState({email: "", password: ""});
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleReset = () => {
        this.props.resetPending();
    };

    validateForm = () => this.state.email.length >= 5 && this.state.password.length >= 5;

    handleLogout = () => {
        removeAuthInfo();
        window
            .location
            .reload();
    };

    handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }))

    render() {
        if(this.props.location.pathname === '/') this.props.history.push('/landing')
        return (
            <NavBar className="Navbar">
                <div>
                    {/* if not logged in, inCog button goes to landing */}
                    {!this.props.isLoggedIn && (
                        <Button as={Link} Button as={Link} className="incogButton" name="home" to="/landing">
                            InCog
                    </Button>)}

                    {/* if logged in, inCog button goes to dashboard */}
                    {this.props.isLoggedIn && (
                        <Button as={Link} Button as={Link} className="incogButton" name="dashboard" to="/">
                            InCog
                            </Button>
                    )}

                    <Header as='span' size='medium' style={{color: '#51e3c2'}}>{this.props.teamName}</Header>
                </div>


                {/* if not logged in and at register, display login form */}
                {!this.props.isLoggedIn && this.props.location.pathname === "/register" && (
                    <FormGroup className="navbarContainer">
                        <NavBarButtonsContainer>
                        <Button as={Link} className="registerButton" name="login" to="/login">
                                Sign in
                        </Button>

                            <Button as={Link} className="registerButton" name="register" to="/register">
                                Register
                        </Button>
                        </NavBarButtonsContainer>

                    </FormGroup>
                )}

                {/* if not logged in and at about, display login form */}
                {!this.props.isLoggedIn && this.props.location.pathname === "/landing" && (
                    <FormGroup className="navbarContainer">

                        <NavBarButtonsContainer>
                        <Button as={Link} className="registerButton" name="login" to="/login">
                                Sign in
                        </Button>


                            <Button as={Link} className="registerButton" name="register" to="/register">
                                Register
                        </Button>
                        </NavBarButtonsContainer>

                    </FormGroup>
                )}


                {/* if not logged in and at about, display login form */}
                {!this.props.isLoggedIn && this.props.location.pathname === "/about" && (
                    <FormGroup>
                        <NavBarButtonsContainer>
                            <Button as={Link} className="registerButton" name="login" to="/login">
                                Sign in
                        </Button>

                            <Button as={Link} className="registerButton" name="register" to="/register">
                                Register
                        </Button>
                        </NavBarButtonsContainer>

                    </FormGroup>
                )}


                {(this.props.location.pathname === "/login") &&
                    !this.props.isLoggedIn && (
                        <Button as={Link} className="registerButton" name="register" to="/register">
                            Register
                    </Button>
                    )}

                {/* Display name and team in navbar if logged in */}
                {this.props.isLoggedIn && (
                    <div>
                        {/* need to update route with user page */}
                        <Button onClick={this.handleReset} as={Link} className="usernameButton" name="home" to="/">
                            {this.props.firstName} <br></br>
                            {this.props.lastName}
                        </Button>

                        <Button onClick={this.handleLogout} className="logoutButton">
                            Logout
                        </Button>
                    </div>
                )}
            </NavBar>
        );
    }
}

const mapStateToProps = (state) => {
    const {usersReducer, joinTeamRequestReducer} = state
    return {
        isLoggedIn: usersReducer.isLoggedIn,
        loginError: usersReducer.loginError,
        loginLoading: usersReducer.loginLoading,
        firstName: usersReducer.user.firstName,
        lastName: usersReducer.user.lastName,
        username: usersReducer.user.firstName,
        teamName: joinTeamRequestReducer.name,
        pendingUsersFinished: state.joinTeamRequestReducer.pendingUsersFinished
    };
};

export default connect(mapStateToProps, {resetPending , login})(withRouter(Navbar));

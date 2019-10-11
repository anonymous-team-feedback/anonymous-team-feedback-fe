import React from "react";
import {connect} from "react-redux";
import {NavBar, Field, FormGroup, NavBarLoginContainer, NavBarButtonsContainer} from "./navbar-style.js";
import {Button} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import {login} from "../../actions/usersActions";
import {removeAuthInfo} from "../../util/login.js";

class Navbar extends React.Component {
    state = {
        email: "",
        password: ""
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

    validateForm = () => this.state.email.length >= 5 && this.state.password.length >= 5;

    handleLogout = () => {
        removeAuthInfo();
        window
            .location
            .reload();
    };

    render() {
        if(this.props.location.pathname === '/') this.props.history.push('/login')
        return (
            <NavBar className="Navbar">
                <div>
                    <Button as={Link} className="incogButton" name="home" to="/">
                        InCog
                    </Button>
                </div>
                {!this.props.isLoggedIn && this.props.location.pathname === "/register" && (
                    <FormGroup className="navbarContainer">
                        <NavBarLoginContainer>
                        <Field
                            className="NavBarEmail"
                            name="email"
                            type="email"
                            placeholder="email@email.com"
                            onChange={this.handleChange}
                            value={this.state.email}/>
                        <Field
                            className="NavBarPassword"
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={this.handleChange}
                            value={this.state.password}/>
                        </NavBarLoginContainer>

                        <NavBarButtonsContainer>
                        <Button
                            className="signinButton"
                            type="submit"
                            onClick={this.handleSubmit}
                            disabled={!this.validateForm()}>
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

                {this.props.isLoggedIn && (
                    <div>
                      {/* need to update route with user page */}

                        <Button as={Link} className="usernameButton" name="home" to="/">
                         Hi, {this.props.username}
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

const mapStateToProps = ({usersReducer: state}) => {
    return {isLoggedIn: state.isLoggedIn, loginError: state.loginError, loginLoading: state.loginLoading, username: state.user.firstName};
};

export default connect(mapStateToProps, {login})(withRouter(Navbar));

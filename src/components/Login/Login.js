import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/usersActions";
import {
  FormGroup,
  LoginContainer,
  Input,
  Label,
  NameContainer,
  InputName
} from "./login-style.js";
import { Button, Form } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password, this.props.history);
    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateForm() {
    return this.state.email.length >= 5 && this.state.password.length >= 5;
  }

  render() {
    return (
      <div className="Login">
        <p>Sign in</p>
        <form onSubmit={this.handleSubmit}>
          <Form>
            <LoginContainer>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="email@email.com"
                onChange={this.handleChange}
              />
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleChange}
              />
              {this.props.loginError && <p>Incorrect username or password</p>}
            </LoginContainer>
          </Form>
          <Button type="submit" disabled={!this.validateForm()}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const MapStateToProps = ({ usersReducer: state }) => {
  return {
    email: state.user.email,
    loginLoading: state.loginLoading,
    loginError: state.loginError
  };
};

export default withRouter(
  connect(
    MapStateToProps,
    { login }
  )(Login)
);

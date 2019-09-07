import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/usersActions";
import { PageDiv, LoginContainer, Input, Label, H1 } from "./login-style.js";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

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

  validateForm = () =>
    this.state.email.length >= 5 && this.state.password.length >= 5;

  render() {
    if (this.props.isloggedIn) {
      this.props.history.push("/dashboard");
    }
    return (
      <PageDiv className="Login">
        <H1>Sign in</H1>

        <Form onSubmit={this.handleSubmit}>
          <LoginContainer>
            <Form.Field>
              <Label color="teal">Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="email@email.com"
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleChange}
              />
              {this.props.loginError && <p>Incorrect username or password</p>}
            </Form.Field>

            <Button color="teal" type="submit">
              Submit
            </Button>
          </LoginContainer>
        </Form>
      </PageDiv>
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

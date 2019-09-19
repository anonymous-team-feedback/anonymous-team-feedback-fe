import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/usersActions";
import { PageDiv, LoginContainer, Input, Label, H1 } from "./login-style.js";
import { Button, Form, Message, Dimmer, Loader } from "semantic-ui-react";
import '../../App.css'

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
    if (this.props.isLoggedIn) {
      console.log("pushing to dashboard bc " + this.props.isLoggedIn);
      this.props.history.push("/dashboard");
    }
    return (
      <PageDiv className="Login">
        {this.props.loginStart &&
          <Dimmer active>
            <Loader inverted content="Loading" size="large" />
          </Dimmer>}
        <H1>Sign in</H1>

        <Form onSubmit={this.handleSubmit} error>
          <LoginContainer>
            <Form.Field>
              <Label>Email</Label>
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
            </Form.Field>

            <Button className="LoginSubmitButton" type="submit">
              Submit
            </Button>
            {this.props.loginError && <Message
              error
              header="You can't log in!"
              content='Incorrect credentials! Please login using a valid email and password combination!'
            />}
          </LoginContainer>
        </Form>
      </PageDiv>
    );
  }
}

const mapStateToProps = ({ usersReducer: state }) => {
  return {
    email: state.user.email,
    isLoggedIn: state.isLoggedIn,
    loginError: state.loginError,
    loginStart: state.loginStart
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);

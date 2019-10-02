import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/usersActions";
import { PageDiv, LoginContainer, LoginInputsContainer, Input, Label, H1 } from "./login-style.js";
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

  validateForm = () =>
    this.state.email.length >= 5 && this.state.password.length >= 5;

  render() {
    if (this.props.isLoggedIn) {
      console.log("pushing to dashboard bc " + this.props.isLoggedIn);
      this.props.history.push("/dashboard");
    }
    return (
      <PageDiv className="Login">
        <H1>Sign in</H1>

        <Form onSubmit={this.handleSubmit}>
          <LoginContainer>
            <LoginInputsContainer>
              <Form.Field>
                <Label>Email</Label>
                <Input
                  id="LoginFormEmail"
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
                  id="LoginFormPassword"
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.handleChange}
                />
                {this.props.loginError && <p>Incorrect username or password</p>}
              </Form.Field>
            </LoginInputsContainer>


            <Button className="LoginSubmitButton" type="submit">
              Submit
            </Button>
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
    loginError: state.loginError
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);

import React from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  RegisterContainer,
  Input,
  Label,
  NameContainer,
  InputName,
  Button
} from "./register-style.js";

import { register } from "../../actions/usersActions.js";

class Register extends React.Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.register(this.state.newUser);
    this.props.history.push("/dashboard");
  };

  validateForm() {
    return (
      this.state.newUser.firstName.length > 2 &&
      this.state.newUser.lastName.length > 2 &&
      this.state.newUser.email.length > 5 &&
      this.state.newUser.password.length > 5
    );
  }
  render() {
    return (
      <div className="Register">
        <h1>Sign up now</h1>

        <p>Fill this form to get instant access</p>

        {/* <!-- Register Form --> */}
        <FormGroup onSubmit={this.handleSubmit}>
          {this.props.registerError && (
            <p>You are already registered. Please login.</p>
          )}

          <RegisterContainer>
            <NameContainer>
              {/* <Label>First Name</Label> */}
              {/* <!-- First Name --> */}
              <InputName
                type="text"
                name="firstName"
                id="RegisterFormFirstName"
                value={this.state.newUser.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
              />

              {/* <Label>Last Name</Label> */}
              {/* <!-- Last Name --> */}
              <InputName
                type="text"
                name="lastName"
                id="RegisterFormLastName"
                value={this.state.newUser.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
              />
            </NameContainer>

            {/* <Label>E-mail</Label> */}
            {/* <!-- E-mail --> */}
            <Input
              type="email"
              name="email"
              id="RegisterFormEmail"
              value={this.state.newUser.email}
              onChange={this.handleChange}
              placeholder="E-mail"
            />

            {/* <Label>Password</Label> */}
            {/* <!-- Password --> */}
            <Input
              type="password"
              name="password"
              id="RegisterFormPassword"
              value={this.state.newUser.password}
              onChange={this.handleChange}
              placeholder="Password"
            />

            <p />

            {/* <!-- Sign up button --> */}
            <Button type="submit" disabled={!this.validateForm()}>
              Sign up
            </Button>
          </RegisterContainer>
        </FormGroup>
        {/* <!-- Register Form --> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerError: state.registerError
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);

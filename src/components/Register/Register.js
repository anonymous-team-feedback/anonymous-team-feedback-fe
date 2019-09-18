import React from "react";
import { connect } from "react-redux";
import {
  PageDiv,
  RegisterContainer,
  Input,
  H1,
  P,
  Label
} from "./register-style.js";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import { register } from "../../actions/usersActions.js";
import "./register.css"

class Register extends React.Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    modalOpen: false
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
    this.props.history.push("/dashboard");
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
    this.handleModalOpen();
  };

  validateForm = () =>
    this.state.newUser.firstName.length > 2 &&
    this.state.newUser.lastName.length > 2 &&
    this.state.newUser.email.length > 5 &&
    this.state.newUser.password.length > 5;

  render() {
    return (
      <PageDiv className="Register">
        <H1>Sign up for InCog</H1>

        <P>In order to get started, let's setup your account.</P>

        {/* <!-- Register Form --> */}
        <Form onSubmit={this.handleSubmit}>
          {this.props.registerError && (
            <p>You are already registered. Please login.</p>
          )}

          <RegisterContainer>
            <Form.Field>
              <Label color="teal">First name</Label>
              <Input
                type="text"
                name="firstName"
                id="RegisterFormFirstName"
                value={this.state.newUser.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                required
                minLength="2"
              />
              <div className="requirements">Please input atleast 2 characters!</div>
            </Form.Field>

            <Form.Field>
              <Label>Last name</Label>
              <Input
                type="text"
                name="lastName"
                id="RegisterFormLastName"
                value={this.state.newUser.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
                required
                minLength="2"
              />
              <div className="requirements">Please input atleast 2 characters!</div>
            </Form.Field>

            <Form.Field>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                required
                id="RegisterFormEmail"
                value={this.state.newUser.email}
                onChange={this.handleChange}
                placeholder="E-mail"
              />
              <div className="requirements">Please input a valid email address!</div>
            </Form.Field>

            <Form.Field>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                id="RegisterFormPassword"
                value={this.state.newUser.password}
                onChange={this.handleChange}
                placeholder="Password"
                required
                minLength="2"
              />
              <div className="requirements">Please add atleast 2 characters!</div>
            </Form.Field>
            <Modal
              trigger={
                <Button
                  className="RegisterSignupButton"
                  // color="teal"
                  type="submit"
                  disabled={!this.validateForm()}
                >
                  Complete Sign Up
                </Button>
              }
              open={this.state.modalOpen}
              onClose={this.handleModalClose}
              basic
              size="small"
            >
              <Header icon="browser" content="Registration"></Header>
              <Modal.Content>
                <h3>You have successfully registered.</h3>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  className="RegisterButton"
                  color="teal"
                  onClick={this.handleModalClose}
                  inverted
                >
                  <Icon name="checkmark"></Icon> Got it
                </Button>
              </Modal.Actions>
            </Modal>
          </RegisterContainer>
        </Form>
      </PageDiv>
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

import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
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


class Register extends React.Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobTitle: ""
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

  handleSubmit = e => { // Submit state.newUser to the register action
    e.preventDefault();
    const {newUser} = this.state
    this.props.register(newUser);
    this.handleModalOpen();
  };

  validateForm = () =>
    this.state.newUser.firstName.length > 2 &&
    this.state.newUser.lastName.length > 2 &&
    this.state.newUser.email.length > 5 &&
    this.state.newUser.password.length > 5 &&
    this.state.newUser.jobTitle.length > 1 ;

  render() {
    console.log(this.props.isLoggedIn)
    if(this.props.isLoggedIn) this.props.history.push('/dashboard')
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
              />
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
              />
            </Form.Field>

            <Form.Field>
              <Label>Job Title</Label>
              <Input
                type="text"
                name="jobTitle"
                id="RegisterFormJobTitle"
                value={this.state.newUser.jobTitle}
                onChange={this.handleChange}
                placeholder="Job Title"
              />
            </Form.Field>

            <Form.Field>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="RegisterFormEmail"
                value={this.state.newUser.email}
                onChange={this.handleChange}
                placeholder="E-mail"
              />
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
              />
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
    registerError: state.usersReducer.registerError,
    isLoggedIn: state.usersReducer.isLoggedIn
  };
};

export default withRouter(connect(
  mapStateToProps,
  { register }
)(Register));

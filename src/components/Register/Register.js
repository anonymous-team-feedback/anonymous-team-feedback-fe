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
import { Button, Header, Icon, Modal, Form, Message } from "semantic-ui-react";
import { register } from "../../actions/usersActions.js";
import "../../App.css"

class Register extends React.Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    modalOpen: false,
    validForm: {
      fn: true,
      ln: true,
      email: true,
      
    }
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

  validateForm = () => {

  }
    // this.state.newUser.firstName.length > 2 &&
    // this.state.newUser.lastName.length > 2 &&
    // this.state.newUser.email.length > 5 &&
    // this.state.newUser.password.length > 5;


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

            {/* conditional for first name */}
            <Label color="teal" >First name</Label>
            {this.state.newUser.firstName.length < 2 ? <Form.Input
              error={{ content: 'Please enter your first name' }}
              fluid
              placeholder='First Name'
              id="RegisterFormFirstName"
              name="firstName"
              value={this.state.newUser.firstName}
              onChange={this.handleChange}
            /> :
            <Form.Input
              fluid
              placeholder='First Name'
              id="RegisterFormFirstName"
              name="firstName"
              value={this.state.newUser.firstName}
              onChange={this.handleChange}
            />}
            {/* end */}

              {/* conditional for last name  */}
            <Label color="teal" >Last name</Label>
            {this.state.newUser.lastName < 2 ? <Form.Input
              error={{ content: 'Please enter your last name' }}
              fluid
              placeholder='Last Name'
              id="RegisterFormLastName"
              name="lastName"
              value={this.state.newUser.lastName}
              onChange={this.handleChange}
            /> : 
            <Form.Input
              fluid
              placeholder='Last Name'
              id="RegisterFormLastName"
              name="lastName"
              value={this.state.newUser.lastName}
              onChange={this.handleChange}
            />}
            {/* end */}

              {/* conditional for email */}
            <Label color="teal" >Email</Label>
            {this.state.newUser.email < 5 ? <Form.Input
              error={{ content: 'Please enter your email address' }}
              fluid
              placeholder='someonesEmail@example.com'
              id="RegisterFormEmail"
              name="email"
              value={this.state.newUser.email}
              onChange={this.handleChange}
            /> :
            <Form.Input
              fluid
              placeholder='someonesEmail@example.com'
              id="RegisterFormEmail"
              name="email"
              value={this.state.newUser.email}
              onChange={this.handleChange}
            />}
            {/* end */}

              {/* conditional for password */}
            <Label color="teal" >Password</Label>
            {this.state.newUser.password < 5 ? <Form.Input
              error={{ content: 'Please enter your password' }}
              fluid
              placeholder='Password'
              id="RegisterFormPassword"
              name="password"
              value={this.state.newUser.password}
              onChange={this.handleChange}
            /> : 
            <Form.Input
              fluid
              placeholder='Password'
              id="RegisterFormPassword"
              name="password"
              value={this.state.newUser.password}
              onChange={this.handleChange}
            />}
            {/* end */}

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
              {this.props.registerError && <Message // error message
                error
                header='Could not register'
                content='A user with this email has already been created!'
              />}
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

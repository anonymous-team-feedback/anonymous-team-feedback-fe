import React from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  RegisterContainer,
  Input,
  Label,
  NameContainer,
  InputName
} from "./register-style.js";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";
import { register } from "../../actions/usersActions.js";

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
        <Form onSubmit={this.handleSubmit}>
          {this.props.registerError && (
            <p>You are already registered. Please login.</p>
          )}

          <RegisterContainer>
            <Form.Field>
              <Label>First name</Label>
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
                <Button type="submit" disabled={!this.validateForm()}>
                  Sign up
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
                <Button color="green" onClick={this.handleModalClose} inverted>
                  <Icon name="checkmark"></Icon> Got it
                </Button>
              </Modal.Actions>
            </Modal>
          </RegisterContainer>
        </Form>
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

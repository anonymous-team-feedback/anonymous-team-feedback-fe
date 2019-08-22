import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

//--- Styled Components ---//

// Form Styling//
export const FormGroup = styled.div`
  background: whitesmoke;
  display: block;
	margin: 1em auto;
`;

// Register Container Styling//
export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	margin: 0em 20%;
`;

// Label Styling//
export const Label = styled.label`
  display: flex;
  font-weight: bold;
  padding: 0.5em;
  margin: 0.5em auto;
  color: #6558F5;
`;

// Input Styling//
export const Input = styled.input`
	padding: 1em;
	color: black;
	background: #C7C3FA;
	border: none;
	border-radius: 3px;
	width: 50%;
`;

// Button Styling//
export const Button = styled.button`
	padding: 1em 2em;
	color: #6558F5;
	background: white;
	border-radius: 3px;
  margin: 0em auto;
  margin-bottom: 2em;
`;

class Register extends React.Component {
  state = {
    newUser: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  render() {
    return (
      <div className="Register">
        <h1>Sign up now</h1>

          <p>Fill this form to get instant access</p>

              {/* <!-- Register Form --> */}
              <FormGroup>

                <RegisterContainer>

                  <Label>First Name</Label>
                  {/* <!-- First Name --> */}
                  <Input type="name" name="firstName" id="RegisterFormFirstName" value={this.state.newUser.firstName} placeholder="First Name"/>

                  <Label>Last Name</Label>
                  {/* <!-- Last Name --> */}
                  <Input type="name" name="lastName" id="RegisterFormLastName" value={this.state.newUser.lastName} placeholder="Last Name"/>

                  <Label>E-mail</Label>
                  {/* <!-- E-mail --> */}
                  <Input type="email" name="email" id="RegisterFormEmail" value={this.state.newUser.email} placeholder="E-mail"/>

                  <Label>Password</Label>
                  {/* <!-- Password --> */}
                  <Input type="password" name="password" id="RegisterFormPassword" value={this.state.newUser.password} placeholder="Password"/>
                  <p/>

                  {/* <!-- Sign up button --> */}
                  <Button type="submit">Register</Button>

                </RegisterContainer>

              </FormGroup>
              {/* <!-- Register Form --> */}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { }
)(Register);

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { register } from "../../actions/";

//--- Styled Components ---//

// Form Styling//
export const FormGroup = styled.form`
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
  margin: 0.5em 0.5em;
`;

// Name Input Container Styling //
export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
  color: black;
  background: #grey;
  border: none;
  border-radius: 3px;
  width: 55%;
`;

// Name Input Styling //
export const InputName = styled.input`
  display: flex;
  flex-direction: row;
  padding: 1em;
  color: black;
  background: #C7C3FA;
  border: none;
  border-radius: 3px;
  margin: 0.5em 0.25em;
  width: 55%;
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

  // Handles Change //
  handleChange = e => {
    e.preventDefault();
    console.log("Changed User Information")
    this.setState({
       newUser: {
          ...this.state.newUser,
          [e.target.name]: e.target.value
       }
    });
 };

 // Handles Submit //
 handleSubmit = e => {
  e.preventDefault()
  this.props.register(this.state.newUser)
  .then(res => (res === false) ? null : this.props.history.push("/login")      
  );
};

  render() {
    return (
      <div className="Register">
        <h1>Sign up now</h1>

          <p>Fill this form to get instant access</p>

              {/* <!-- Register Form --> */}
              <FormGroup onSubmit={this.handleSubmit}>
                {this.props.registerError && <p>You are already registered. Please login.</p>}

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
                    placeholder="First Name"/>

                    {/* <Label>Last Name</Label> */}
                    {/* <!-- Last Name --> */}
                    <InputName 
                    type="text" 
                    name="lastName" 
                    id="RegisterFormLastName" 
                    value={this.state.newUser.lastName} 
                    onChange={this.handleChange}
                    placeholder="Last Name"/>
                  </NameContainer>

                  {/* <Label>E-mail</Label> */}
                  {/* <!-- E-mail --> */}
                  <Input 
                  type="email" 
                  name="email" 
                  id="RegisterFormEmail" 
                  value={this.state.newUser.email}
                  onChange={this.handleChange} 
                  placeholder="E-mail"/>

                  {/* <Label>Password</Label> */}
                  {/* <!-- Password --> */}
                  <Input 
                  type="password" 
                  name="password" 
                  id="RegisterFormPassword" 
                  value={this.state.newUser.password} 
                  onChange={this.handleChange}
                  placeholder="Password"/>

                  <p/>

                  {/* <!-- Sign up button --> */}
                  <Button type="submit">Sign up</Button>

                </RegisterContainer>

              </FormGroup>
              {/* <!-- Register Form --> */}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    registerError: state.registerError
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);

import styled from "styled-components";

// PageDiv Styling//
export const PageDiv = styled.div`
  background: #32323e;
  flex-wrap: wrap;
  min-height: 82vh;
  overflow: auto;
  padding-bottom: 100px;
`;

// Form styling//
export const FormGroup = styled.form`
  background: whitesmoke;
  display: block;
  margin: 1rem auto;
`;

// Login container styling//
export const LoginContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  // border: 1px solid red;

  @media (max-width: 700px) {  
    width: 100%;
  }
`;

// Login Inputs container styling//
export const LoginInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  // border: 1px solid red;
  width: 100%;
`;

// Input label styling//
export const Label = styled.label`
  display: flex;
  font-weight: bold;
  text-align: left !important;
  margin: 0 auto;
  color: #51e3c2 !important;
  padding: 0.25em;
  max-width: 250px;
`;

// Input Styling//
export const Input = styled.input`
  padding: 1rem;
  color: white !important;
  background: #4d505f !important;
  border: none;
  border-radius: 3px;
  width: 100% !important;
  height: 35px !important;
  margin: 0.5rem, 0.5rem;
`;

// Button Styling//
export const Button = styled.button`
  padding: 1em 2em;
  color: white !important;
  border-radius: 3px;
  margin: 0em 0em !important;
`;

//h1 styling//
export const H1 = styled.h1`
  text-align: center;
  color: white;
  margin: 0 auto;
  padding-top: 26px;
`;

//p styling//
export const P = styled.p`
  text-align: center;
  color: white;
  margin: 0 auto;
`;

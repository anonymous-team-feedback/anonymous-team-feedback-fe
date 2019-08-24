import styled from "styled-components";

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
  margin: 0em auto;
`;

// Label Styling//
export const Label = styled.label`
  display: flex;
  font-weight: bold;
  padding: 0.5em;
  margin: 0.5em auto;
  color: #008080 !important;
`;

// Input Styling//
export const Input = styled.input`
  padding: 1em;
  color: black;
  background: #c7c3fa;
  border: none;
  border-radius: 3px;
  width: 50%;
  margin: 0.5em 0.5em;
`;

// Name Input Container Styling //
export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1em;
  color: black;
  background: #grey;
  border: none;
  border-radius: 3px;
  width: 55.5%;
`;

// Name Input Styling //
export const InputName = styled.input`
  display: flex;
  flex-direction: row;
  padding: 1em;
  color: black;
  background: #c7c3fa;
  border: none;
  border-radius: 3px;
  margin: 0.5em 0.3em;
  width: 54.5%;
`;

// Button Styling//
export const Button = styled.button`
  padding: 1em 2em;
  color: #6558f5;
  background: white;
  border-radius: 3px;
  margin: 0em auto;
  margin-bottom: 2em;
`;

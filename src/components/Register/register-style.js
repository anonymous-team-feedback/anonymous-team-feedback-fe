import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50% 0 15%;
  background: #32323E;
  padding-bottom: 200px;
`;

// Label Styling//
export const Label = styled.label`
  display: flex;
  font-weight: bold;
  text-align: left;
  color: #008080 !important;
  padding: 0.25em;
`;

// Input Styling//
export const Input = styled.input`
  padding: 1em;
  color: white !important;
  background: #4D505F !important; 
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
  color: black !important;
  border-radius: 3px;
  margin: 0em 0em !important;
`;

// H1 styling//
export const H1 = styled.h1`
  text-align: left;
  color: white;
  margin: 0 50% 0 15%;
  padding-top: 25px;
`;

// P styling//
export const P = styled.p`
  text-align: left;
  color: white;
  margin: 0 50% 0 15%;
  padding-bottom: 25px;
  `
import styled from "styled-components";

//--- Styled Components ---//

export const MainListContainer = styled.div`
  width: 100%;
  flex-direction: column;
  background-color: #32323e;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #32323e;
  padding: 3%;
  border: none;
`;

export const SubListContainer = styled.div`
  width: 80%;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  border: 1px solid #393945;
  margin: 0 auto;
  background: #393945;
  padding: 3%;
`;

export const H2 = styled.h2`
  text-align: left;
  color: white;
  background: #393945;
  margin-top:50px !important;
  padding: 7px;
`;

// PageDiv Styling//
export const PageDiv = styled.div`
  background: #32323e;
  min-height: 82vh;
`;

// Form Styling//
export const FormGroup = styled.form`
  background: #32323e;
  display: block;
  margin: 1em auto;
`;

// Create Team Landing Page Styling//
export const CreateTeamLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 15%;
  background: #32323e;
  // padding-bottom: 200px;
`;


// RegisterContainer Styling//
export const TeamCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 15%;
  background: #32323e;
  padding-bottom: 200px;
`;

// Label Styling//
export const Label = styled.label`
  display: flex;
  font-weight: bold;
  text-align: left;
  color: #51e3c2 !important;
  padding: 0.25em;
`;

// Input Styling//
export const Input = styled.input`
  padding: 1em;
  color: white !important;
  background: #4d505f !important;
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
  text-align: center;
  color: white;
  padding-bottom: 25px;
  
  @media (max-width: 700px) {
  }
`;

// P styling//
export const P = styled.p`
  text-align: left;
  color: white;
  padding-bottom: 25px;

  @media (max-width: 700px) {
  }
`;

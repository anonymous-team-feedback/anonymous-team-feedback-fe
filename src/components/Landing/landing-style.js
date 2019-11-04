import styled from "styled-components";

// H1 styling//
export const H1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 3.5em;
  width: 100%;

  @media (max-width: 760px) {
    width: 85%;
    font-size: 2.9em;
    margin: auto;
  }
`;


export const LandingContainer = styled.div`
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 85px 85px 85px;
  width: 100%;
  min-height: 82vh;

  // border: 1px solid yellow;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 25px 0 50px 5px !important;
  }
`;
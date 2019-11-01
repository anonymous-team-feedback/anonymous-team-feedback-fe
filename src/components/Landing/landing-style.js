import styled from "styled-components";

// H1 styling//
export const H1 = styled.h1`
  text-align: center;

  color: white;
  margin: 0% 5% 0% 5%;
  padding: 100px 0;
  font-size: 4em;
  width: 40%;

  @media (max-width: 800px) {
    width: 70%;
    font-size: 2.5em;
    padding: 50px 0;
    padding-bottom: 50px;
    margin: 2% 5% 0 7%;
  }
`;


export const LandingContainer = styled.div`
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 0 50px 0;
  width: 100%;
  min-height: 80vh;

  // border: 1px solid yellow;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 25px 0 50px 0;
  }
`;
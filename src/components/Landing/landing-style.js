import styled from "styled-components";

// H1 styling//
export const H1 = styled.h1`
  text-align: center;
  display: flex;
  color: white;
  margin: 0% 30% 0% 30%;
  padding-top: 35px;
  padding-bottom: 35x;
  font-size: 3rem;

  @media (max-width: 800px) {
    padding-bottom: 50px;
    margin: 2% 5% 0 7%;
  }
`;


export const LandingContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0 100px 0;
  width: 100%;

  flex-wrap: wrap;
  min-height: 80vh;
  overflow: auto;
//   border: 1px solid yellow;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 25px 0 50px 0;
  }
`;
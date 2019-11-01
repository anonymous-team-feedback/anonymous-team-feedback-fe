import styled from "styled-components";

// H1 styling//
export const H1 = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0% 10% 0% 10%;
  padding-top: 15px;
  padding-bottom: 15px;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

// H2 styling//
export const H2 = styled.h2`
  text-align: center;
  display: flex;
  color: white;
  margin: 0% 10% 1% 10%;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

// H3 styling//
export const H3 = styled.h3`
  text-align: center;
  display: flex;
  color: white;
  margin: 0% 10% 1% 10%;
  padding-top: 35px;
  padding-bottom: 15px;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;


export const AboutContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  width: 100%;
//   border: 1px solid yellow;
  background: #393945;
  min-height: 70vh;
  overflow: auto;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;

export const Section = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  width: 100%;
//   border: 1px solid yellow;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;
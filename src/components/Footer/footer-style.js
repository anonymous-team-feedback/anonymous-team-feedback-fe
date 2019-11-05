import styled from "styled-components";

// H3 styling//
export const H3 = styled.h3`
  text-align: center;
  display: flex;
  color: white;
  padding-top: 35px;
  padding-bottom: 15px;
  font-size: 1rem;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 0 25px;
  width: 100%;
  min-height: 93px;
  max-height: 10vh;
  border-top: 1px solid #4D4D58; 
//   border: 1px solid yellow;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;
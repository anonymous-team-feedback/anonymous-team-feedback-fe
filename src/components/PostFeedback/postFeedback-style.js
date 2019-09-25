import styled from "styled-components";

//--- Styled Components ---//

// PostContainer Styling//
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background: #32323e;
  padding-bottom: 200px;
`;

// PageDiv Styling//
export const PageDiv = styled.div`
  background: #393946;
  margin: 0% 20% 0% 20%;

  @media (max-width: 800px) {
    margin: 0 10% 0 10%;
  }
`;

// Form Styling//
export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  // border: 1px solid green;
`;

// Name-DateContainer Styling//
export const NameDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  margin: 0 5% 0 5%;
  // border: 1px solid red;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column !important;
    justify-content: space-between !important;
    margin: 5% 5% 0 5%;
    text-align: left;
  }
`;

// H2 styling//
export const H2 = styled.h2`
  text-align: left;
  display: flex;
  color: white;
  margin: 0% 0% 0% 6.25%;
  padding-top: 35px;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

// P styling//
export const P = styled.p`
  text-align: left;
  display: flex;
  color: white;
  margin: 0% 0% 3% 6.25%;

  @media (max-width: 800px) {
    margin: 2% 5% 0 7%;
  }
`;

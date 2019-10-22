import styled from "styled-components";

// Whole NavBar Container styling//

export const NavBar = styled.nav`
  background-color: #393945;
  width: 100%
  display: flex;
  justify-content: space-between;
  padding: 1.0rem 1.5rem 1rem 2rem;
  align-items: center;
`;

// NavBar Form Component Container (contains Input & Buttons) styling//

export const FormGroup = styled.form`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
`;

// NavBar Login Input Container styling//

export const NavBarLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  // border: 1px solid yellow;

  @media (max-width: 460px) {  
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    // margin: 1rem;
  }
`;

// NavBar Login Input Container styling//

export const NavBarLoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  // border: 1px solid yellow;

  @media (max-width: 760px) {  
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    // margin: 1rem;
  }
`;

// NavBar Buttons Container styling//

export const NavBarButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  // border: 1px solid blue;


  @media (max-width: 760px) {  
    width: 100%;
  }
`;

export const Title = styled.button`
  color: white;
  font-family: sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  transition: color 0.1s ease-in-out;

  :hover {
    color: #51e3c2;
  }
`;
export const Field = styled.input`
  background-color: #4d505f;
  border: none;
  border-radius: 3px;
  padding: .7rem;
  margin: 0 0.7rem;
  color: white;
`;
export const Button = styled.button`
  border: 1px solid #51e3c2;
  border-radius: 4px;
  background-color: #393945;
  color: #51e3c2;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  transition: 0.1s ease-in-out;
  :hover:enabled {
    color: white;
    background-color: #51e3c2;
  }
  :disabled {
    color: grey;
    border: 1px solid grey;
  }
`;
export const ButtonLink = styled.button`
  color: #51e3c2;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  :hover {
    color: white;
  }
`;

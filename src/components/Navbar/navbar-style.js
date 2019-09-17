import styled from "styled-components";

// NavBar styling//

export const NavBar = styled.nav`
  background-color: #393945;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 0.5rem 2rem;
  align-items: center;
`;

// Form styling//

export const FormGroup = styled.form`
  width: 70%;
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

import styled from 'styled-components'; 

// Form styling//
export const FormGroup = styled.form`
    background: whitesmoke;
    display: block;
    margin: 1rem auto;
`;
// Login container styling//
export const LoginContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
    `;

// Input label styling//
export const Label = styled.label`
    display: flex;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.05rem auto;
    color: #6558F5;
`;

// Input Styling//
export const Input = styled.input`
    padding: 1rem;
    color: black;
    background: #C7C3FA;
    border: none;
    border-radius: 3px;
    width: 50%;
    margin: 0.5rem, 0.5rem;
`;

// Button Styling//
export const Button = styled.button`
	padding: 1em 2em;
	color: #6558F5;
	background: white;
	border-radius: 3px;
    margin: 0em auto;
    margin-bottom: 2em;
`;
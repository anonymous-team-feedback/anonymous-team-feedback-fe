import styled from "styled-components";

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
  min-height: 100vh;
`;

export const SubListContainer = styled.div`
  width: 80%;
  flex-direction: row;
  display: flex;
  border: 1px solid #393945;
  margin: .4rem auto;
  background: #393945;
  padding: 3%;
`;

export const H2 = styled.h2`
  text-align: left;
  color: white;
  background: #393945;
`;

export const HeaderDiv = styled.div`
  display: flex;
  padding: 2% 0;
`;

export const SecondDiv = styled.div`
  display: flex;
  background-color: #5b5c6b;
  padding: 1.5% 0;
`;

export const DateDiv = styled.div`
  width: 40%;
  display: flex;
  color: #008080;
`;

export const TitleDiv = styled.div`
  width: 60%;
  display: flex;
  color: #008080;
`;

export const FeedbackDiv = styled.div`
  display: flex;
  font-size: 16px;
  margin: 1.5% 0;
  height: 35px;
  border-bottom: 1px solid #5b5c6b;
`;

export const PostDateDiv = styled.div`
  display: flex;
  font-size: 16px;
  width: 40%;
`;

export const PostDiv = styled.div`
  display: flex;
  width: 60%;
`;

export const H1 = styled.h1`
  font-size: 20px;
  color: white;
`;

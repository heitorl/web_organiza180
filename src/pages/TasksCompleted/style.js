import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ContentSideBar = styled.div`
  display: flex;
  background-color: red;
  width: 300px;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1; /* Faz com que o Content ocupe todo o espaço livre */
  flex-direction: column;
`;



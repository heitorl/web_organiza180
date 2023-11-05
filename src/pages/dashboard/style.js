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
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  .ctn-column {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

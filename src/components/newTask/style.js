import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 45%;
  height: 70vh;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

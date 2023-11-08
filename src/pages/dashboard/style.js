import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .ctn-row {
    display: flex;
    align-items: flex-end;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  .modal {
    display: flex;
    text-align: center;
    width: 550px;
    margin: auto;
    height: 400px;
    -webkit-box-align: center;
    align-items: center;
  }

  .ctn-column {
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin-top: 50px;
    animation: ${fadeInDown} 0.5s;
  }

  .border {
    width: 55%;
    border-bottom: 3px solid var(--primary);

    padding-bottom: 40px;
  }
`;

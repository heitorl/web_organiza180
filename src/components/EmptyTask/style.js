import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  width: 550px;
  margin: auto;
  height: 400px;
  -webkit-box-align: center;
  align-items: center;

  h2 {
    color: #4a5568;

    span {
      font-weight: bold;
      color: var(--primary);
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  right: 280px;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 16px;
  }

  .col-info {
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    span {
      font-size: 20px;
      font-weight: bold;
      color: rgb(36, 39, 65);
    }
  }
`;

export const MenuItem = styled.ul`
  font-size: 14px;
`;

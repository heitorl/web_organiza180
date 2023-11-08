import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  height: 520px;

  background-color: #fff;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: 1000;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.4);
  align-items: center;
  padding: 10px;
  border-radius: 10px;

  .h2 {
    margin-top: 10px;
    display: flex;
    align-items: center;
    h2 {
      margin-left: 8px;
      color: var(--black);
      font-weight: bold;
    }
  }

  .ctn-info {
    display: flex;
    font-size: 20px;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;

    span {
      color: #9b9b9b;
      font-weight: bold;
      display: block;
      width: 350px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      strong {
        color: darkblue;
      }
    }
  }
`;

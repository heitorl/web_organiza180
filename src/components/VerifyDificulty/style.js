import styled from "styled-components";

export const Container = styled.div`
  span {
    position: absolute;
    color: rgb(36, 39, 65);
    bottom: 0px;
    left: 15px;
    font-size: 15px;

    strong {
      color: ${(props) =>
        props.difficulty === "baixa"
          ? "#92E9D9"
          : props.difficulty === "média"
          ? "#F2CB05"
          : props.difficulty === "alta"
          ? "#FF5A5F"
          : "#f5f5f5"};
    }
  }
`;

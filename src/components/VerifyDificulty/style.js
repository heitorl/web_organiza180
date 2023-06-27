import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  span {
    background: ${(props) =>
      props.difficulty === "baixa"
        ? "#92E9D9"
        : props.difficulty === "média"
        ? "#F2CB05"
        : props.difficulty === "alta"
        ? "#FF5A5F"
        : "#f5f5f5"};
    color: ${(props) => (props.difficulty === "baixa" ? "#000" : "#fff")};
    padding: 20px;
    border-radius: 4px;
  }
`;
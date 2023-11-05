import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Cor de fundo escura com transparência */
  z-index: 999; /* Um valor maior que o z-index do modal */
`;

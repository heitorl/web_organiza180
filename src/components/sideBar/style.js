import styled from 'styled-components';

export const Container = styled.div`
  background:var(--black);
  height: 100vh;
  max-width: 300px;
  width: 90%;
  box-shadow: 4px 4px 10px lightgray;
  animation: showSidebar .4s;



  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;
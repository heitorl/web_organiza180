import styled, { keyframes } from "styled-components"
import task from "../../assets/taskRegister.svg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;


`

export const Background = styled.div`

@media(min-width: 1000px){
  flex: 1;
  background: url(${task}) no-repeat center #D4FAF6;
  
  background-size: 50%;
  
  
}

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  background: white;

  h1 {
    font-size: 3rem;
  }

  p{
    margin-top: 8px;
  }
  a{
    font-weight: bold;
    color: var(--primary);
  }

`

const appearFromRight = keyframes`

  from{
    opacity: 0;
    transform: translateX(50px);    
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 2s;


`
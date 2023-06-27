import styled, { keyframes } from "styled-components"
import task from "../../assets/taskLogin.svg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;


`

export const Background = styled.div`

@media(min-width: 1000px){
  flex: 1;
  background: url(${task}) no-repeat center #D4FAF6;
  
  /* background: linear-gradient(to bottom, #56ccf2, #2f80ed); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

  .title{
    width: 340px;
    text-align: center;
  }
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

const appearFromLeft = keyframes`

  from{
    opacity: 0;
    transform: translateX(-100px);    
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
  animation: ${appearFromLeft} 2s;


`
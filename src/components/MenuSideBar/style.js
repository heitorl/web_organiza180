import styled from "styled-components";

export const ContentGeral = styled.div`
    margin-top: 30px;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  


  
    .ctn-links{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-decoration: none;
      font-size: 20px;
      margin-left: 10px;
      color: var(--primary);

      .ctn-icon{
        display: flex;        
        
        svg{
          margin-right: 15px;
          color: #ffff;
        }
        a{
          color: var(--primary);
          :hover{
            color: #4A5568;
          }
        }
      }
    }
    .ctn-setting{
      margin-top: 42px;
    }

`

export const ContentTitle = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 12px;
      span{
        color: var(--primary);
        font-size: 26px;
        font-weight: bold;
      }
`
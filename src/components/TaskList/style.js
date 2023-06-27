import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const TaskLister = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
`;
export const Task = styled.li`
    flex: 0 0 calc(26% - 30px);
    margin: 10px;
    height: 220px;
    list-style: none;
    border-radius: 6px;
    color: rgb(74, 85, 104);
    text-align: left;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;

  
  .ctn-info{
    display: flex;
    height: 110px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;

    span{
      text-align: left;
      margin-left: 20px;
      padding: 2px;
      border-radius: 5px;
    }
  }
  .ctn-description{
    margin-left: 12px;
  }

  .ctn-end{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    svg{
      color: green;
      width: 40px;
      height: 30px;
    }
  }
  .end{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .delete-icon {
 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 4px;
    svg{
      width: 20px;
      height: 20px;
      background-color: red;
      color: var(--white);
      border-radius: 50%;
      cursor: pointer;

    }
  }
`;
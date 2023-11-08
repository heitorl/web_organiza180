import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 620px;

  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  /* background-color: #16181d; */
  background-color: white;

  .new-task {
    display: flex;
    justify-content: center;
    background-color: white;

    height: 40px;
    align-items: center;
    width: 80%;
    margin: auto;
    border-top: 2px solid var(--primary);

    border-top-right-radius: 3px;

    svg {
      box-sizing: border-box;
      border: none;
      font-size: 30px;
      color: #242741;
    }
  }

  .ctn-title {
    display: flex;
    align-items: center;
    height: 80px;
    border-radius: 3px 3px 0 0;

    padding: 0 1.5rem 0 1.5rem;
    background-color: #242741;

    span {
      font-size: "17px";
      font-weight: bold;
      /* color: #9b9b9b; */
      color: var(--primary);
    }
  }

  .contain-task {
    padding: 0 1.5rem 0 1.5rem;
    display: flex;
    background: white;
    overflow: auto;
    flex: 1;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-white);
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    .ctn-task {
      margin-top: 5px;
      position: relative;
      margin-bottom: 12px;
      height: 72px;
      border-radius: 5px;
      padding: 1rem;
      background: #f8f8f8;
      font-size: 18px;
      color: #242741;
      font-weight: bold;
      .task-span {
        align-items: center;
        height: 100%;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .close-button {
        position: absolute;
        top: 2px;
        right: 5px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        color: #1a1d23;
      }

      .info {
        position: absolute;
        bottom: 5px;
        right: 5px;
        cursor: pointer;
        /* color: #242741; */
        color: dodgerblue;
        font-size: 10px;
      }
    }

    .ctn-task.dragging {
      outline: 2px solid var(--primary);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
      .info {
        display: none;
      }

      .close-button {
        display: none;
      }
      div {
        display: none;
      }
    }
  }
`;

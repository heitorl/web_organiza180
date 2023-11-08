import { Draggable, Droppable } from "react-beautiful-dnd";
import { IoAddCircleOutline } from "react-icons/io5";
import { Container } from "./style";
import PropTypes from "prop-types";

import NewTask from "../newTask";
import Backdrop from "../Backdrop";
import { useModal, useModalInfo } from "../../utils/useModalSchema.util";
import { ModalTaskInfo } from "../ModalTaskInfo";
import { useState } from "react";
import VerifyDifficulty from "../VerifyDificulty";

export const Column = ({ title, tasks, columnId, handleDeleteTask }) => {
  const { isModalOpen, openModal } = useModal();
  const { isModalInfoOpen, openModalInfo } = useModalInfo();
  const [taskCoordinates, setTaskCoordinates] = useState({ x: 0, y: 0 });
  const [selectedTaskInfo, setSelectedTaskInfo] = useState(null);

  const openMoreInfoTask = (task) => {
    setSelectedTaskInfo(task);
  };

  return (
    <Container>
      <div className="ctn-title">
        <span>{title}</span>
      </div>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className="contain-task"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks &&
              tasks.map((task, i) => (
                <Draggable key={task.id} draggableId={task.id} index={i}>
                  {(provided, snapshot) => (
                    <div
                      className={`ctn-task ${
                        snapshot.isDragging ? "dragging" : ""
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span className="task-span">{task.title}</span>
                      <button
                        className="close-button"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        X
                      </button>
                      <span
                        className="info"
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setTaskCoordinates({ x: rect.left, y: rect.top });
                          openModalInfo();
                          openMoreInfoTask(task);
                        }}
                      >
                        <u>MAIS INFO</u>
                      </span>
                      <VerifyDifficulty
                        className="dif"
                        difficulty={task.dificulty}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
            {isModalInfoOpen && (
              <ModalTaskInfo
                taskCoordinates={taskCoordinates}
                selectedTaskInfo={selectedTaskInfo}
              />
            )}
          </div>
        )}
      </Droppable>
      {columnId == "column-1" && (
        <span className="new-task">
          <IoAddCircleOutline
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
          />
        </span>
      )}
      {isModalOpen && (
        <div className="modal">
          <NewTask />
        </div>
      )}
      <Backdrop isModalOpen={isModalOpen || isModalInfoOpen} />
    </Container>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  columnId: PropTypes.string.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

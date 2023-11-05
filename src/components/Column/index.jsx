import { Draggable, Droppable } from "react-beautiful-dnd"; // Importe os componentes apropriados
import { IoAddCircleOutline } from "react-icons/io5";
import { Container } from "./style";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewTask from "../newTask";
import Backdrop from "../Backdrop";

export const Column = ({ title, tasks, columnId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Verifique se o clique ocorreu fora do modal
      if (isModalOpen && e.target.closest(".modal")) {
        return;
      }

      closeModal();
    };

    // Adicione o event ao documento
    document.addEventListener("click", handleOutsideClick);

    // Removendo o event quando o componente for desmontado
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  const handleDeleteTask = (task) => {
    return task;
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
                      <span className="info">
                        <u>MAIS INFO</u>
                      </span>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
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
      <Backdrop isModalOpen={isModalOpen} />
    </Container>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  columnId: PropTypes.string.isRequired,
};

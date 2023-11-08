import { FaTasks } from "react-icons/fa";
import { Container, Content } from "./style";
import PropTypes from "prop-types";
import { format } from "date-fns";
export const ModalTaskInfo = ({ taskCoordinates, selectedTaskInfo }) => {
  const modalWidth = 380;
  const modalHeight = 520;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let [adjustedLeft, adjustedTop] = [];

  if (
    taskCoordinates.x + modalWidth > viewportWidth ||
    taskCoordinates.y + modalHeight > viewportHeight
  ) {
    // Se o modal passar dos limites da tela, ajusto as coordenadas
    adjustedLeft = Math.min(taskCoordinates.x, viewportWidth - modalWidth);
    adjustedTop = Math.min(taskCoordinates.y, viewportHeight - modalHeight);
  }

  return (
    <Container top={adjustedTop} left={adjustedLeft}>
      <Content>
        <div className="h2">
          <FaTasks />
          <h2>Informações da tarefa</h2>
        </div>

        <div className="ctn-info">
          <span className="title">
            <strong>Título:</strong>
            {selectedTaskInfo.title}
          </span>
          <span className="description">
            <strong>Descrição:</strong> {selectedTaskInfo.description}
          </span>
          <span className="dif">
            <strong>dificuldade:</strong> {selectedTaskInfo.dificulty}
          </span>

          <span className="status">
            <strong>status:</strong> {selectedTaskInfo.status}
          </span>

          <span className="updated">
            <strong>Ultima atualização:</strong>{" "}
            {format(new Date(selectedTaskInfo.updatedAt), "dd/MM/yyyy")}
          </span>
          <span className="created">
            <strong>Criado em:</strong>{" "}
            {format(new Date(selectedTaskInfo.createdAt), "dd/MM/yyyy")}
          </span>
        </div>
      </Content>
    </Container>
  );
};

ModalTaskInfo.propTypes = {
  taskCoordinates: PropTypes.object,
  selectedTaskInfo: PropTypes.object,
};

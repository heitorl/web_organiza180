import { FaTasks } from "react-icons/fa";
import { Container, Content } from "./style";
import PropTypes from "prop-types";
export const ModalTaskInfo = ({ taskCoordinates }) => {
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
            <strong>Título:</strong> Beber agua
          </span>
          <span className="description">
            <strong>Descrição:</strong> jhondoe fala jhofala jhofala jhofala
            jhofala jhofala jhofala jho
          </span>
          <span className="dif">
            <strong>dificuldade:</strong> Média
          </span>

          <span className="status">
            <strong>status:</strong> TO-DO
          </span>

          <span className="updated">
            <strong>Ultima atualização:</strong> 22/02/2023
          </span>
          <span className="created">
            <strong>Criado em:</strong> 20/02/2023
          </span>
        </div>
      </Content>
    </Container>
  );
};

ModalTaskInfo.propTypes = {
  taskCoordinates: PropTypes.object,
};

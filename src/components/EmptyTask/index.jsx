import { useModal } from "../../utils/useModalSchema.util";
import NewTask from "../newTask";
import { Container } from "./style";

const EmptyTask = () => {
  const { isModalOpen, openModal } = useModal();
  console.log(isModalOpen);
  return (
    <Container>
      <h2>
        Você ainda não tem nenhuma tarefa em andamento. comece já a se
        organizar! clicando{" "}
        <span
          onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}
        >
          <u>aqui.</u>
        </span>
      </h2>
      {isModalOpen && <NewTask />}
    </Container>
  );
};

export default EmptyTask;

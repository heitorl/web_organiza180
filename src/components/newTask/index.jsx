import { Container, Content } from "./style";
import { useContext } from "react";
import { MdOutlineDescription } from "react-icons/md";
import Form from "../Form";
import { TaskContext } from "../../providers/TaskContext";

const NewTask = () => {
  const { createNewTask } = useContext(TaskContext);

  const handleCreateTask = async (data) => {
    try {
      await createNewTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formInputs = [
    {
      icon: MdOutlineDescription,
      label: "Título",
      placeholder: "Deixe um título legal",
      type: "text",
      name: "title",
      required: true,
    },
    {
      icon: MdOutlineDescription,
      label: "Descrição",
      placeholder: "Digite a descrição da tarefa",
      type: "text",
      name: "description",
    },
  ];

  const radioInput = {
    label: "Dificuldade:",
    options: [
      { label: "Baixa", value: "baixa", defaultChecked: true },
      { label: "Média", value: "média" },
      { label: "Alta", value: "alta" },
    ],
    name: "dificulty",
  };

  return (
    <Container>
      <Content>
        <h1>Criar Nova Tarefa</h1>
        <Form
          onSubmit={handleCreateTask}
          inputs={formInputs}
          radio={radioInput}
        />
      </Content>
    </Container>
  );
};

// NewTask.propTypes = {
//   isModalOpen: PropTypes.bool.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };

export default NewTask;

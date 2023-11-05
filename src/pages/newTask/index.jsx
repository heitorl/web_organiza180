import { Container, Content } from "./style";
import Form from "../../components/Form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../providers/TaskContext.jsx";
import Sidebar from "../../components/sideBar";
import { MdOutlineDescription } from "react-icons/md";

const NewTask = () => {
  const navigate = useNavigate();

  const { createNewTask } = useContext(TaskContext);

  const handleCreateTask = async (data) => {
    try {
      await createNewTask(data);
      navigate("/dashboard");
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
      name: "titulo",
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
      <Sidebar />
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

export default NewTask;

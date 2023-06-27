import { Link } from "react-router-dom"
import { Container } from "./style"


const EmptyTask = () => {


  return <Container>
    <h2>Você ainda não tem nenhuma tarefa em andamento. comece já a se organizar! clicando <Link to="/createTask">aqui.</Link></h2>
  </Container>
}

export default EmptyTask
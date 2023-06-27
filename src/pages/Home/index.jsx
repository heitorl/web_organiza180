// import { useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import addTasks from "../../assets/addtasks.svg"
import Button from "../../components/Button"
import { Container, Content } from "./style"

const Home = () => {

  const history = useNavigate()

  return <Container>
    <Content>
      <div className="ctn-img">
        <img src={addTasks} alt="task" />
      </div>

      <h1>Organiza<span>.</span>180</h1>
      <span>Organize todas as suas tarefas de uma maneira prática e efetiva</span>
      <div>
        <Button whiteSchema onClick={() => history("/signup")}>Cadastrar</Button> 
        <Button onClick={() => history("/signin")}>Entrar</Button>      
      </div>

    </Content>

  </Container>
}

export default Home
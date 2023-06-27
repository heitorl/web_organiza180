import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import Greeting from "../../components/Greeting"
import Card from "../../components/Card"
import { Container, Content } from "./style"
import Sidebar from "../../components/sideBar"



const TasksCompleted = () => {
  const { user } = useContext(UserContext)

  return <Container>   
    <Sidebar />
    <Content>
      {user && user.name && <Greeting name={user.name} />}
      <Card isCompleted={true}/>

    </Content>
  </Container>

}


export default TasksCompleted
import { useContext } from "react"
import Greeting from "../../components/Greeting"
import Sidebar from "../../components/sideBar"
import { Container, Content   } from "./style"
import { UserContext } from "../../providers/UserContext"
import Card from "../../components/Card"

export const Dashboard = () => {
    const { user } = useContext(UserContext)
    console.log(user)
  
    return <Container>   
      <Sidebar />
      <Content>
        {user && user.name && <Greeting name={user.name} />}
        <Card isCompleted={false}/>

      </Content>
    </Container>
  


}

export default Dashboard
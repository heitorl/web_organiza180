import { ContentGeral, ContentTitle } from "./style"
import { IoIosContacts } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdAddTask, MdOutlineTask } from "react-icons/md";
import { Link } from "react-router-dom";


const MenuSideBar = () => {


  return (

    <ContentGeral>
      <ContentTitle>
        <span>Geral</span>
      </ContentTitle>

    <div className="ctn-links">
      <div className="ctn-icon">
        <MdDashboard />
        <Link to="/dashboard">Dashboard</Link>
      </div>           
    </div>
   
    <div className="ctn-links">
      <div className="ctn-icon">
        <MdAddTask />
        <Link to="/createTask">Nova tarefa</Link>
      </div>           
    </div>
    <div className="ctn-links">
      <div className="ctn-icon">
        <MdOutlineTask />
        <Link to="/completeds">Tarefas Completadas</Link>
      </div>           
    </div>
    <div className="ctn-links">
      <div className="ctn-icon">
        <IoIosContacts />
      </div>           
    </div>
    

    <ContentTitle>
      <span>Account</span>
    </ContentTitle>

    
    <div className="ctn-links ctn-setting">
      <div className="ctn-icon">
        <FiSettings />
        <Link>Setinngs</Link> 
      </div>           
    </div>


  </ContentGeral>
  )
}

export default MenuSideBar
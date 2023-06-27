import { Routes as RoutesReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/index"
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/dashboard";
import NewTask from "../pages/newTask";
import TasksCompleted from "../pages/TasksCompleted";

// import ProtectedRoutes from "./route";


const Routes = () => {
  return (
    <RoutesReactRoutes>

      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/createTask" element={<NewTask />} />
      <Route path="/completeds" element={<TasksCompleted />} />
      
      
    </RoutesReactRoutes>
  )

}

export default Routes;
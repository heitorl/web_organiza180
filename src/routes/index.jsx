import { Routes as RoutesReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/dashboard";

// import ProtectedRoutes from "./route";

const Routes = () => {
  return (
    <RoutesReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </RoutesReactRoutes>
  );
};

export default Routes;

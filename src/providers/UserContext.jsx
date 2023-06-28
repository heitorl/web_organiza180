import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { api } from "../api";
import { toast } from "react-hot-toast";

export const UserContext = createContext({});



export const UserProvider = ({ children }) => {

  const navigate = useNavigate();

  const [data, setData] = useState(() => {

    const token = localStorage.getItem("@TOKEN");
    const user = localStorage.getItem("@WebProf:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/user/signin", formData);
      if (response.data.status != 200) {

        throw new Error("Resposta inválida");
      }
      const { token, user } = response.data.message;
  
      setData({ token, user });
  
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@WebProf:user", JSON.stringify(user));
  
      return true; 
    } catch (error) {
      toast.error("Email ou senha inválidos!")
      console.log(error);     
    }
  };

  const registerUser = async (formData) => {
    try {
      await api.post("/user/signup", formData);
      
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  

  const userLogout = () => {
    setData(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
    window.location.reload();   
  };



 

  return (
    <UserContext.Provider
      value={{
        user: data.user,
        token: data.token,
        registerUser,
        loginUser,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  )


}


UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
}
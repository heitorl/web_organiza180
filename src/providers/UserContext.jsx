import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { api } from "../api";
// import { toast } from "react-toastify";

export const UserContext = createContext({});



export const UserProvider = ({ children }) => {

  const navigate = useNavigate();

  const [data, setData] = useState(() => {

    const token = localStorage.getItem("@TOKEN");
    const user = localStorage.getItem("@WebProf:user");

    if (token && user) {
      console.log(user, '=====')
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/user/signin", formData);
      console.log(response)
      const { token, user } = response.data.message;

      setData({ token, user });

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@WebProf:user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (error) {
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




 

  return (
    <UserContext.Provider
      value={{
        user: data.user,
        token: data.token,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )


}


UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
}
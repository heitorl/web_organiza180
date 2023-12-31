
import {AnimationContainer, Background, Container, Content } from "./style"
import { FiLock, FiMail } from "react-icons/fi"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import Form from "../../components/Form"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import toast from 'react-hot-toast';


const Signin = () => {
  const navigate = useNavigate()
  const inputs = [
    {
      name: "email",
      validation: () =>  yup.string().required("Campo obrigatório!"),
      icon: FiMail,
      label: "email",
      placeholder: "Digite seu email",
      type: "text",
      
    },
    {
      name: "password",
      validation: () =>  yup.string().min(6, "Minimo de 8 digitos").required('Campo obrigatório!'),
      icon: FiLock,
      label: "password",
      placeholder: "Digite sua senha",
      type: "password",      
      
    },
  ]

  const { loginUser } = useContext(UserContext)

  const onSubmitFunction = async (data) => {
    try {
      const response = await loginUser(data);
      if (response) {
        toast.success("Login bem sucedido!");
        navigate("/dashboard");
      }
    } catch (error) {      
      console.log(error);
    }
  };

  return <Container> 

    <Content>
      <AnimationContainer>
      <div className="title">
        <h1>Entre com sua conta</h1>
      </div>
      <Form  
          onSubmit={onSubmitFunction} 
          link="/signin"
          inputs={inputs} 
      />
      <p>Não possui uma conta? Faça o <Link to="/signup">Cadastro</Link></p>
      </AnimationContainer>
    </Content>
    <Background />
  </Container>

}

export default Signin
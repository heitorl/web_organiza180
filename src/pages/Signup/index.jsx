import { FiMail, FiUser, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { AnimationContainer, Background, Container, Content } from "./style";
import Form from "../../components/Form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const inputs = [
    {
      name: "name",
      validation: () =>  yup.string().required("Campo obrigatório!"),
      icon: FiUser,
      label: "Nome",
      placeholder: "Digite seu nome",
      type: "text",
      
    },
    {
      name: "email",
      validation: () => yup.string().email("Email inválido").required("Campo obrigatório!"),
      icon: FiMail,
      label: "Email",
      placeholder: "Digite seu email",
      type: "email",
      
    },
    {
      name: "password",
      validation: () => yup.string().min(8, "Mínimo de 8 dígitos").required("Campo obrigatório!"),
      icon: FiLock,
      label: "Senha",
      placeholder: "uma senha segura",
      type: "password",        
    },
    
  ];

  const { registerUser } = useContext(UserContext)
  
  const onSubmitFunction = async (data) => {
    await registerUser(data)
    toast.success("Conta criada com sucesso!")
  }

  return <Container>
    <Background />

    <Content>
      <AnimationContainer>
        <div className="ctn-tile">
          <h1>Cadastro</h1>
        </div>
        <Form 
          onSubmit={onSubmitFunction} 
          link="/signin"
          inputs={inputs}
          
        />
        <p>
          Já tem uma conta? Faça o <Link to="/signin">Login</Link>
        </p>
        
      </AnimationContainer>
    </Content>
  </Container>

}

export default Signup
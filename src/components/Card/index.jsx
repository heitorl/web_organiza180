import TaskList from "../TaskList"
import { Container } from "./style"
import PropTypes from 'prop-types';


const Card = ({isCompleted}) => {


  return <Container>
       <TaskList isCompleted={isCompleted}/>

  </Container>

}

Card.propTypes = {
  isCompleted: PropTypes.bool
};

export default Card
import { Container, InputContainer } from "./style"
import PropTypes from 'prop-types';

const Input = ({label, icon: Icon, register, name, error, ...rest}) => {

  return <Container>
    <div>{label} {!!error && <span> - {error}</span>}</div>

    <InputContainer isErrored={!!error}>
      {Icon && <Icon size={20}/>}
      <input {...(register && register(name))}  {...rest}/>
    </InputContainer>
  </Container>
}

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
  register: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.string,
};

export default Input
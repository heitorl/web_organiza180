import { Container } from "./style"
import PropTypes from 'prop-types';

const Button = ({children, whiteSchema, ...rest}) => {
  return (
    <Container whiteSchema={whiteSchema} type="button" {...rest}>
      {children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  whiteSchema: PropTypes.bool
};

export default Button
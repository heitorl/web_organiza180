import { Container } from "./style";
import PropTypes from "prop-types";
const Backdrop = ({ isModalOpen }) => {
  return isModalOpen ? <Container></Container> : null;
};

export default Backdrop;

Backdrop.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};

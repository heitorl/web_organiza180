import { Container } from "./style";
import PropTypes from "prop-types";

const VerifyDifficulty = ({ difficulty }) => {
  return (
    <Container difficulty={difficulty}>
      <span>
        dificuldade: <strong>{difficulty}</strong>
      </span>
    </Container>
  );
};

VerifyDifficulty.propTypes = {
  difficulty: PropTypes.string,
};

export default VerifyDifficulty;

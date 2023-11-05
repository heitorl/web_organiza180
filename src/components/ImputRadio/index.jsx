import PropTypes from "prop-types";
import { Container } from "./style";

const InputRadio = ({ label, options, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            checked={option.defaultChecked}
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </Container>
  );
};

InputRadio.propTypes = {
  label: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
};

export default InputRadio;

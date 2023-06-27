import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import PropTypes from 'prop-types';
import { Formn } from "./style";
import { createValidationSchemaUtil } from "../../utils/createValidationSchema.util";
import Input from "../Input";
import InputRadio from "../ImputRadio";

const Form = ({ onSubmit, inputs, radio }) => {
  const schema = createValidationSchemaUtil(inputs);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <Formn onSubmit={handleSubmit(onSubmitFunction)}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          icon={input.icon}
          label={input.label}
          placeholder={input.placeholder}
          type={input.type}
          register={register}
          name={input.name}
          error={errors[input.name]?.message}
        />
      ))}
      {radio && (
        <InputRadio
          label={radio.label}
          options={radio.options}
          register={register}
          name={radio.name}
          error={errors[radio.name]?.message}
        />
      )}
      <Button type="submit">Enviar</Button>
    </Formn>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  link: PropTypes.string,
  radio: PropTypes.shape({
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
  }),
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Form;
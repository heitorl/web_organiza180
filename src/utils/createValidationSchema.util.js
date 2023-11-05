import * as yup from "yup";

export const createValidationSchemaUtil = (inputs) => {
  const validationSchema = {};

  inputs.forEach((input) => {
    const { name, validation, required } = input;

    validationSchema[name] = yup.lazy((value) => {
      if (validation && typeof validation === "function") {
        return validation(value);
      }

      if (required) {
        return yup.string().required("Campo obrigatório!");
      }

      return yup.string();
    });
  });

  return yup.object().shape(validationSchema);
};

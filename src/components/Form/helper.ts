import { validateInputField } from "../TextInput/helper";
import { FieldConfig, ValidatorType } from "./types";

export const handleInputChange = <T>(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { name, value, type } = e.target;
  setState((prevState) => ({
    ...prevState,
    [name]:
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
  }));
};

export const getDefaultFieldValidator = (
  type: string,
): ((value: string) => boolean) => {
  return (value: string) => validateInputField(type, value);
};

export const getFieldValidators = (
  fields: FieldConfig[],
): { [key: string]: ValidatorType } => {
  return fields.reduce<{ [key: string]: ValidatorType }>((acc, field) => {
    acc[field.name] =
      field.validateRegExp !== undefined
        ? (value: string) =>
            value === "" || field.validateRegExp?.test(value) || false
        : (getDefaultFieldValidator(field.type) ?? undefined);
    return acc;
  }, {});
};

// You can add more helper functions as needed

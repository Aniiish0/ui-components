import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "./hooks";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import Checkbox from "../CheckBox";
import Button from "../Button";
import { getFieldValidators } from "./helper";
import { GenericFormProps, ValidatorType } from "./types";

const GenericForm = <T extends object>({
  initialValues,
  fields,
  onSubmit,
}: GenericFormProps<T>) => {
  const { formState, handleChange } = useForm(initialValues);
  const formValidator: React.MutableRefObject<{
    [key: string]: ValidatorType;
  }> = useRef(getFieldValidators(fields));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (const key in formState) {
      const validator =
        formValidator.current[key as keyof typeof formValidator.current];
      if (
        typeof validator === "function" &&
        typeof formState[key] === "string" &&
        !validator(formState[key])
      ) {
        e.stopPropagation();
        console.log(`Form validation failed for [${key}] input field`);
        return;
      }
    }
    onSubmit(formState);
  };

  return (
    <Form onSubmit={handleSubmit} className="text-start">
      {fields.map((field) => (
        <div key={field.label} className="pb-3 rounded-0">
          {field.type === "textarea" ? (
            <TextArea
              label={field.label}
              name={field.name}
              value={(formState as never)[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              validator={formValidator.current[field.name]}
              validationError={field.validationError}
            />
          ) : field.type === "checkbox" ? (
            <Checkbox
              name={field.name}
              checked={(formState as never)[field.name]}
              onChange={handleChange}
              label={field.label}
              required={field.required}
            />
          ) : (
            <TextInput
              label={field.label}
              type={field.type}
              name={field.name}
              value={(formState as never)[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              validator={
                field.validateRegExp !== undefined
                  ? (value: string) =>
                      value === "" || field.validateRegExp?.test(value) || false
                  : undefined
              }
              validationError={field.validationError}
            />
          )}
        </div>
      ))}
      <Button label="Submit" />
    </Form>
  );
};

export default GenericForm;

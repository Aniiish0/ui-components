import React from "react";
import { Form } from "react-bootstrap";
import { validateInputField } from "./helper";
import { TextInputProps } from "./types";

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  validator,
  validationError,
}) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>
      {label}
      {required && <span>*</span>}
    </Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="form-control-lg rounded-0 border-black border-2"
      isInvalid={
        validator ? !validator(value) : !validateInputField(type, value)
      }
    />
    <Form.Control.Feedback type="invalid">
      {validationError || "Invalid input"}
    </Form.Control.Feedback>
  </Form.Group>
);

export default TextInput;

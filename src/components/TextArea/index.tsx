import React from "react";
import { Form } from "react-bootstrap";
import { TextAreaProps } from "./types";

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 5,
  validator,
  validationError,
}) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>
      {label}
      {required && <span>*</span>}
    </Form.Label>
    <Form.Control
      as="textarea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="form-control-lg rounded-0 border-black border-2"
      isInvalid={validator ? !validator(value) : false}
    />
    <Form.Control.Feedback type="invalid">
      {validationError || "Invalid input"}
    </Form.Control.Feedback>
  </Form.Group>
);

export default TextArea;

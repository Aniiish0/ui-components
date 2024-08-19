import React from "react";
import { Form } from "react-bootstrap";
import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  onChange,
  checked = false,
  required = false,
}) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Check
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      label={label + (required ? "*" : "")}
      required={required}
    />
  </Form.Group>
);

export default Checkbox;

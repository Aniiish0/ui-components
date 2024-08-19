export type ValidatorType = (value: string) => boolean;

export type FieldType =
  | "text"
  | "email"
  | "textarea"
  | "checkbox"
  | "tel"
  | "password";

export interface FieldConfig {
  label: string;
  name: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  validateRegExp?: RegExp;
  validationError?: string;
}

export interface GenericFormProps<T extends object> {
  initialValues: T;
  fields: FieldConfig[];
  onSubmit: (values: T) => void;
}

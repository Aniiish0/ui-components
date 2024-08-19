export interface TextInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean; // Add required prop to make input required by default. Default value is false.
  validator?: (value: string) => boolean;
  validationError?: string;
}

export interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
  required?: boolean; // Add required prop to make textarea required by default. Default value is false.
  validator?: (value: string) => boolean; // Add validator prop to validate input in textarea.
  validationError?: string; // Add validationError prop to display error message when input is invalid.
}

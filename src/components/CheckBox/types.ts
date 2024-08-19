export interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean; // Add required prop to make checkbox required by default. Default value is false.
}

export interface ButtonProps {
  label?: string;
  type?: "submit" | "button" | "reset"; // Default value is 'submit'. Add type prop to change button type.
  variant?: Variants; // Default value is 'primary'. Add variant prop to change variant type.
}

export type Variants = "primary" | "secondary" | "link";
export type BootstrapVariants = "primary" | "outline-primary" | "light";

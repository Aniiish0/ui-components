import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

export { default as Button } from "./components/Button";
export { default as CheckBox } from "./components/CheckBox";
export { default as CollapseCard } from "./components/CollapseCard";
export { default as Form } from "./components/Form";
export { default as Navbar } from "./components/Navbar";
export { default as MapView } from "./components/MapView";
export { default as Slider } from "./components/Slider";
export { default as TextArea } from "./components/TextArea";
export { default as TextInput } from "./components/TextInput";
export { default as ChatbotButton } from "./components/ChatbotButton";

export type {
  ButtonProps,
  Variants,
  BootstrapVariants,
} from "./components/Button/types";
export type { CheckboxProps } from "./components/CheckBox/types";
export type { CollapseCardProps } from "./components/CollapseCard/types";
export type {
  GenericFormProps,
  FieldConfig,
  FieldType,
  ValidatorType,
} from "./components/Form/types";
export type {
  NavbarProps,
  ButtonProps as NavbarButtonProps,
  NavbarItem,
} from "./components/Navbar/types";
export type { MapViewProps } from "./components/MapView/types";
export type { SliderProps } from "./components/Slider/types";
export type { TextAreaProps } from "./components/TextArea/types";
export type { TextInputProps } from "./components/TextInput/types";
export type { ChatbotButtonProps } from "./components/ChatbotButton/types";

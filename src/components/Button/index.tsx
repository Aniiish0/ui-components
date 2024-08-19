import React from "react";
import { Button } from "react-bootstrap";
import { ButtonProps } from "./types";
import {
  getAdditionalClassNameFromVariant,
  getBootstrapVariantFromVariant,
} from "./helper";

const CustomButton: React.FC<ButtonProps> = ({
  label = "Submit",
  type = "submit",
  variant = "primary",
}) => {
  const bootstrapVariant = getBootstrapVariantFromVariant(variant);
  const additionalClass = getAdditionalClassNameFromVariant(variant);
  return (
    <Button
      variant={bootstrapVariant}
      type={type}
      className={`btn-lg rounded-0 ${additionalClass}`}
    >
      {label}
      {variant === "link" && (
        <span>
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0L10.207 7l-4.853 4.854a.5.5 0 0 1-.708-.708L8.793 7 4.646 2.854a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      )}
    </Button>
  );
};

export default CustomButton;

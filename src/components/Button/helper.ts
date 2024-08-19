import { BootstrapVariants, Variants } from "./types";

export function getBootstrapVariantFromVariant(
  variant: Variants,
): BootstrapVariants {
  switch (variant) {
    case "primary":
      return "primary";
    case "secondary":
      return "outline-primary";
    case "link":
      return "light";
    default:
      return "primary";
  }
}

export function getAdditionalClassNameFromVariant(variant: Variants): string {
  switch (variant) {
    case "primary":
      return "";
    case "secondary":
      return "";
    case "link":
      return "custom-link-btn";
    default:
      return "";
  }
}

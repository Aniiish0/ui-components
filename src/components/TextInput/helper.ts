export const validateInputField = (type: string, value: string): boolean => {
  let regex = /.*$/;
  if (value === "") {
    return true;
  }
  switch (type) {
    case "email":
      regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      break;
    case "tel":
      regex = /^\d{10}$/;
      break;
    default:
      return true;
  }
  return regex.test(value);
};

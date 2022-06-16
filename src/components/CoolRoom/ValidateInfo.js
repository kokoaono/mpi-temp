export const ValidateInfo = (fridgeName, fridgeTemp) => {
  let errors = {};

  if (!fridgeName.trim()) {
    errors.fridgeName = "*Name or number required";
  }

  if (!fridgeTemp) {
    errors.fridgeTemp = "*Temperature required";
  }

  return errors;
};

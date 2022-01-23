export const ValidateInfo = (fridgeName, fridgeTemp) => {
  let errors = {};

  if (!fridgeName.trim()) {
    errors.fridgeName = 'Fridge name or number is required'
  }

  if (!fridgeTemp) {
    errors.fridgeTemp = 'Temperature is required'
  }

  return errors;
};
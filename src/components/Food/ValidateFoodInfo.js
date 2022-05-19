export const ValidateFoodInfo = (itemName, itemTemp, time) => {
  let errors = {};

  if (!itemName.trim()) {
    errors.itemName = 'Select Item Name'
  }

  if (!itemTemp) {
    errors.itemTemp = 'Temperature is required'
  }

  if (!time) {
    errors.time = 'Length of time is required'
  }
  return errors;
};

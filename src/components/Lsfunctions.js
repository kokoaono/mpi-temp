module.exports = {
  getData,
  getItemData,
};

//get fridge data
function getData() {
  const data = localStorage.getItem('fridges');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};

//Get FoodItem data
function getItemData() {
  const data = localStorage.getItem('items');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};
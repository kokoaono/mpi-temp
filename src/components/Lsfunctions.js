module.exports = {
  getData,
  getItemData,
  getUserData
};

//get fridge data
function getData() {
  const fridgeData = localStorage.getItem('fridges');
  if (fridgeData) {
    return JSON.parse(fridgeData);
  } else {
    return []
  }
};

//Get FoodItem data
function getItemData() {
  const itemData = localStorage.getItem('items');
  if (itemData) {
    return JSON.parse(itemData);
  } else {
    return []
  }
};

function getUserData() {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
    return JSON.parse(savedUser)
  } else {
    return []
  }
};
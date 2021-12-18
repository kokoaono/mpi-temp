module.exports = {
  getData,
  getFoodData
};

//get data from localStorage
function getData() {
  const data = localStorage.getItem('fridges');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};

//get food temp data
function getFoodData() {
  const foodData = localStorage.getItem('food');
  if (foodData) {
    return JSON.parse(foodData)
  } else {
    return []
  }
};

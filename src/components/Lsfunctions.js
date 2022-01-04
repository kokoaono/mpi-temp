module.exports = {
  getData,
  getItemData
};

//get fridge data from localStorage
function getData() {
  const data = localStorage.getItem('fridges');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};

function getItemData() {
  const data = localStorage.getItem('items');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};
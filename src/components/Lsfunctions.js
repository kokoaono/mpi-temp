module.exports = {
  getData,
  getItemData,
  getName
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

function getName() {
  const data = localStorage.getItem('fridgeName');
  if (data) {
    return JSON.parse(data);
  } else {
    return []
  }
};
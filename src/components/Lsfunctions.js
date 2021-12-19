module.exports = {
  getData
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


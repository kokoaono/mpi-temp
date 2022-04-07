const connection = require('./connection');

//DB function
module.exports = {
  getFridgeData,
  addFridge
};

//get All frige data
function getFridgeData(db = connection) {
  return db('fridges')
    .select()
};

//add fridge
function addFridge(newFridge, db = connection) {
  const { fridgeName, fridgeTemp } = newFridge
  return db('fridges')
    .insert({ fridgeName, fridgeTemp })
};
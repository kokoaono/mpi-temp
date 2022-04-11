const connection = require('./connection');

//DB function
module.exports = {
  getFridgeData,
  addFridge,
  deleteFridge,
  getFridgeById,
  editFridge
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

//delete by ID
function deleteFridge(id, db = connection) {
  return db('fridges')
    .where('id', id)
    .del()
};

//get item by its ID
function getFridgeById(id, db = connection) {
  return db('fridges')
    .where('id', id)
    .select()
};

//edit fridge
function editFridge(updatedFridge, db = connection) {
  const { id, fridgeName, fridgeTemp } = updatedFridge
  return db('fridges')
    .where('id', id)
    .update({ fridgeName, fridgeTemp })
};
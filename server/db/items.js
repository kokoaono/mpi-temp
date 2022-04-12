const connection = require('./connection');

//DB functions
module.exports = {
  getItems,
  addItem,
  deleteItem,
  getItemById,
  updateItem
};

//get all items
function getItems(db = connection) {
  return db('items')
    .select()
};

//Add an item
function addItem(newItem, db = connection) {
  const { itemName, itemTemp } = newItem
  return db('items')
    .insert({ itemName, itemTemp })
};

//delete by itemID
function deleteItem(id, db = connection) {
  return db('items')
    .where('id', id)
    .del()
};

//GET item by itemID
function getItemById(id, db = connection) {
  return db('items')
    .where('id', id)
    .select()
};

//Edit item
function updateItem(updatedItem, db = connection) {
  const { id, itemName, itemTemp } = updatedItem
  return db('items')
    .where('id', id)
    .update({ itemName, itemTemp })
};
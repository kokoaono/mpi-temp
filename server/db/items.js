const connection = require('./connection')

//DB functions
module.exports = {
  getItems,
  close,
  addItem,
  deleteItem
}

function close(db = connection) {
  db.destroy()
}

//get all items
function getItems(db = connection) {
  return db('items').select()
};

//Add an item
function addItem(newItem, db = connection) {
  const { itemName } = newItem
  return db('items')
    .insert({ itemName })
};

//delete by itemID
function deleteItem(id, db = connection) {
  return db('items')
    .where('id', id)
    .del()
};
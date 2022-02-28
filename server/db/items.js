const config = require('../../knexfile').development
const database = require('knex')(config)

//DB functions
module.exports = {
  getItems,
  close,
  addItem
}

function close(db = database) {
  db.destroy()
}

//get all items
function getItems(db = database) {
  return db('items').select()
};

//Add an item
function addItem(newItem, db = database) {
  const { name } = newItem
  return db('items')
    .insert({ name })
};
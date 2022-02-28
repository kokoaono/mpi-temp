// const config = require('../../knexfile').development
// const database = require('knex')(config)

const database = require('./connection')

//DB functions
module.exports = {
  getItems,
  // close,
  addItem
}

// function close(db = database) {
//   db.destroy()
// }

//get all items
function getItems(db = database) {
  return db('test_items').select()
};

//Add an item
function addItem(newItem, db = database) {
  const { name } = newItem
  return db('test_items')
    .insert({ name })
    .then(([id]) => {
      return { id, name }
    })
    .catch(err => {
      console.error(err)
      throw err
    })
};
const connection = require('./connection');

module.exports = {
  getAllItems
}

function getAllItems(db = connection) {
  return db('items').select()
}

exports.up = function(knex) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments();
    tbl.string('itemName')
  })
  
};

exports.down = function(knex) {
  
};

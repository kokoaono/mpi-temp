exports.up = function (knex) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments();
    tbl.string('itemName');
    tbl.integer('itemTemp');
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('items')
};
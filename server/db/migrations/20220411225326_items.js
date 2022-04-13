
exports.up = function (knex) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments();
    tbl.string('item_name');
    tbl.integer('item_temp');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('items')
};

exports.up = function (knex) {
  return knex.schema.createTable('test_items', tbl => {
    tbl.increments().primary();
    tbl.string('name')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('test_items')
};

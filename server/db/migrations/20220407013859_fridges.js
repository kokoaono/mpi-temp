
exports.up = function (knex) {
  return knex.schema.createTable('fridges', tbl => {
    tbl.increments();
    tbl.string('fridgeName');
    tbl.integer('fridgeTemp');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('fridges')
};

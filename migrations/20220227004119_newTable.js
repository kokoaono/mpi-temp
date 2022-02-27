
exports.up = function (knex) {
  return knex.schema.createTable('newTable', tbl => {
    tbl.increments();
    tbl.string('table_name');
    tbl.timestamps();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('newTable');
};

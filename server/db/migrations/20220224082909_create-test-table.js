
exports.up = function (knex) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('id')
    tbl.string('name')
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('items')
};


exports.up = function (knex) {
  return knex.schema.createTable('test', tbl => {
    tbl.increments().primary()
    tbl.string('name')
    tbl.timestamps()
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('test')
};

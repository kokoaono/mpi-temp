exports.up = function (knex) {
  return knex.schema.createTable('items', tbl => {
    tbl.increments('id');
    tbl.string('item_name').notNullable();
    tbl.timestamps(true, true);
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('items')
};

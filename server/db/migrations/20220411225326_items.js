
exports.up = function (knex) {
  return knex.schema.alterTable('items', tbl => {
    tbl.integer('item_temp');
  })
};

exports.down = function (knex) {
  return knex.schema.alterTable('items', tbl => {
    tbl.dropColumn('item_temp');
  })
};

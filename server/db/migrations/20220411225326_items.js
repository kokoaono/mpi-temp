
exports.up = function (knex) {
  return knex.schema.alterTable('items', tbl => {
    tbl.string('item_name');
    tbl.integer('item_temp');
  })
};

exports.down = function (knex) {
  return knex.schema.alterTable('items', tbl => {
    tbl.dropColumn('item_temp');
    tbl.dropColumn('item_name');
  })
};

const { fridgeData } = require('../data/fridgeData')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('test_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_items').insert(fridgeData);
    });
};

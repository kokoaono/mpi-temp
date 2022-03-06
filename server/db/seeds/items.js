const { fridgeData } = require('../data/fridgeData');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert(fridgeData);
    });
};
// Testing database set up for now.
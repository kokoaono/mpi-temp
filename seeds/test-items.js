
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { id: 1, name: 'butter' },
        { id: 2, name: 'rice' },
        { id: 3, name: 'rice milk' }
      ]);
    });
};

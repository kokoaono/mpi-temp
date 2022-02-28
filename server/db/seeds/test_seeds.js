
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        { id: 1, name: 'onion' },
        { id: 2, name: 'lettuce' },
        { id: 3, name: 'rose' }
      ]);
    });
};

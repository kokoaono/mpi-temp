exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fridges').del()
    .then(function () {
      // Inserts seed entries
      return knex('fridges').insert([
        {
          id: 1,
          fridgeName: 'test2',
          fridgeTemp: 3.2
        }
      ]);
    });
};

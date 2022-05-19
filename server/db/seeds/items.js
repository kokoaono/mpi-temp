exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          item_name: 'Salmon',
          item_temp: 65
        }
      ]);
    });
};
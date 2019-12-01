
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('eat').del()
    .then(function () {
      // Inserts seed entries
      return knex('eat').insert([
        { eat_id: 1, amount: '190', measurement: 'mls', created_at: '2019-12-01 06:16:24' },
        { eat_id: 2, amount: '170', measurement: 'mls', created_at: '2019-12-01 06:16:24' },
        { eat_id: 3, amount: '190', measurement: 'mls', created_at: '2019-12-01 06:16:24' }
      ]);
    });
};

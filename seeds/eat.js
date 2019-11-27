
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('eat').del()
    .then(function () {
      // Inserts seed entries
      return knex('eat').insert([
        { eat_id: 1, amount: '190', measurement: 'mls', created_at: '2017-01-30T11:49:19.278' },
        { eat_id: 2, amount: '170', measurement: 'mls', created_at: '2017-01-30T19:49:19.278' },
        { eat_id: 3, amount: '190', measurement: 'mls', created_at: '2017-01-30T15:49:19.278' }
      ]);
    });
};

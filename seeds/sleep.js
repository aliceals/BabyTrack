
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sleep').del()
    .then(function () {
      // Inserts seed entries
      return knex('sleep').insert([
        { sleep_id: 2, time_started: '2019-12-01 06:16:24', duration: '1 min' },
        { sleep_id: 1, time_started: '2019-12-01 06:16:24', duration: '2 min' },
        { sleep_id: 3, time_started: '2019-12-01 06:16:24', duration: '3 min' }
      ]);
    });
};

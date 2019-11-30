
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sleep').del()
    .then(function () {
      // Inserts seed entries
      return knex('sleep').insert([
        { sleep_id: 2, time_started: '2017-01-30T12:49:19.278', duration: '1 min' },
        { sleep_id: 1, time_started: '2017-02-30T10:49:19.278', duration: '2 min' },
        { sleep_id: 3, time_started: '2017-04-30T18:49:19.278', duration: '3 min' }
      ]);
    });
};

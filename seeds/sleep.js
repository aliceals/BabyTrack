
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { sleep_id: 1, time_started: '2017-02-30T10:49:19.278', time_ended: '2017-02-30T11:49:19.278' },
        { sleep_id: 2, time_started: '2017-01-30T12:49:19.278', time_ended: '2017-01-30T13:49:19.278' },
        { sleep_id: 3, time_started: '2017-04-30T18:49:19.278', time_ended: '2017-04-30T19:49:19.278' }
      ]);
    });
};

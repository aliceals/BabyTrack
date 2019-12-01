
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('nappy').del()
    .then(function () {
      // Inserts seed entries
      return knex('nappy').insert([
        { nappy_id: 1, type: 'Poo', time: "2017-01-30T15:49:19.278" },
        { nappy_id: 2, type: 'Wee', time: "2017-01-30T16:49:19.278" },
        { nappy_id: 3, type: 'Both', time: "2017-01-30T18:49:19.278" }
      ]);
    });
};

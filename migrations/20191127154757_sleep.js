

exports.up = function (knex) {
    return knex.schema.createTable('sleep', (table) => {
        table.increments('sleep_id').primary()
        table.datetime('time_started').defaultTo(new Date().toISOString())
        table.string('duration')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('sleep')
};

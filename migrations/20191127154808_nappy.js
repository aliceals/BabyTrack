

exports.up = function (knex) {
    return knex.schema.createTable('nappy', (table) => {
        table.increments('nappy_id').primary()
        table.string('type')
        table.datetime('time').defaultTo(new Date().toISOString())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('nappy')
};


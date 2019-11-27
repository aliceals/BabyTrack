
exports.up = function (knex) {
    return knex.schema.createTable('eat', (table) => {
        table.increments('eat_id').primary()
        table.integer('amount')
        table.string('measurement')
        table.datetime('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('eat')
};
